import json
import time
import asyncio
from typing import List, Set
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from ..dependencies import auth_info
from ..config import VALID_MESSAGE_ACTIONS, IP_WHITELIST
from ..services.chat_service import update_msg
from ..utils.logger import get_logger

router = APIRouter()
logger = get_logger()

class ConnectionManager:
    def __init__(self):
        self.active_connections: Set[WebSocket] = set()

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.add(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.discard(websocket)

    async def broadcast(self, message: str, exclude: WebSocket = None):
        for connection in list(self.active_connections):
            if connection != exclude:
                try:
                    await connection.send_text(message)
                except Exception:
                    self.disconnect(connection)

manager = ConnectionManager()

@router.websocket("/api/ws")
async def websocket_endpoint(websocket: WebSocket):
    # 鉴权
    client_host = websocket.client.host
    try:
        # 本地回环或白名单直接放行
        if client_host not in ['127.0.0.1', '::1'] and client_host not in IP_WHITELIST:
            token = websocket.query_params.get("auth_token")
            if not token or token not in auth_info or auth_info[token] <= int(time.time()):
                logger.warning(f"WebSocket 客户端登录失败 - {client_host}")
                await websocket.close(code=1008) # Policy Violation
                return
            logger.server(f"WebSocket客户端登录 - {client_host}")
    except Exception as e:
        logger.error(f"WebSocket Auth Error: {e}")
        await websocket.close(code=1008)
        return

    await manager.connect(websocket)
    logger.server("WebSocket 客户端已连接")
    
    try:
        while True:
            data = await websocket.receive_text()
            try:
                message = json.loads(data)
            except json.JSONDecodeError:
                continue
                
            # Echo 处理
            if "echo" in message:
                response = {
                    'status': 'ok',
                    'retcode': 0,
                    'data': {'message_id': 1253451396},
                    'message': '',
                    'wording': '',
                    'echo': message['echo']
                }
                await websocket.send_text(json.dumps(response))
                # 继续处理后续逻辑吗？原代码似乎没有 return/continue，而是继续往下走
                
            time_now = int(time.time() * 1000)
            message_id = time_now
            is_update = False
            role = 'end'
            
            # WebUI 消息处理
            if isinstance(message, list) and len(message) > 0:
                is_update = True
                # message[0] 是 meta info
                if isinstance(message[0], dict) and "msg_id" in message[0]:
                    message_id = message[0]["msg_id"]
                    del message[0] # 修改了原列表
                # 剩下的 message 是消息内容
                
            # OneBot 消息处理
            elif isinstance(message, dict) and message.get("action") in VALID_MESSAGE_ACTIONS:
                is_update = True
                message_id = time_now
                role = 'start'
            
            # 存入数据库
            if is_update:
                await update_msg(time_now, json.dumps({
                    "role": role,
                    "message_id": message_id,
                    "message": message
                }))
            
            # 构造 OneBot 事件
            onebot_event = {
                'self_id': 1000000,
                'user_id': 111111111,
                'time': time_now,
                'message_id': message_id,
                'real_id': 1253451396,
                'message_seq': 1253451396,
                'message_type': 'group',
                'sender': {'user_id': 111111111, 'nickname': '主人', 'card': '', 'role': 'member', 'title': ''},
                'raw_message': "",
                'font': 14,
                'sub_type': 'normal',
                'message': message,
                'message_format': 'array',
                'post_type': 'message',
                'group_id': 879886836
            }
            
            event_json = json.dumps(onebot_event, ensure_ascii=False)
            await manager.broadcast(event_json, exclude=websocket)
            
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        # logger.server("WebSocket 客户端断开连接")
    except Exception as e:
        logger.error(f"WebSocket Error: {e}")
        manager.disconnect(websocket)
