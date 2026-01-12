import time
import os
from fastapi import APIRouter, Request, Response, HTTPException, Depends
from cryptography.fernet import Fernet
from ruamel.yaml import YAML
from ..dependencies import auth_info, verify_auth
from ..config import USER_FILE, AUTH_DURATION, DEFAULT_USER_INFO
from ..utils.logger import get_logger

router = APIRouter()
logger = get_logger()
yaml = YAML()

# 用户信息，内存中维护一份
user_info = DEFAULT_USER_INFO.copy()

def load_user_info():
    global user_info
    if os.path.exists(USER_FILE):
        try:
            with open(USER_FILE, 'r', encoding="utf-8") as file:
                yaml_data = yaml.load(file)
                if yaml_data:
                    user_info.update(yaml_data)
            logger.info("登录信息读取成功")
        except Exception as e:
            logger.warning(f"登录信息读取失败: {e}，已恢复默认")
            save_user_info()
    else:
        logger.warning("用户配置文件不存在，使用默认配置")
        save_user_info()

def save_user_info():
    with open(USER_FILE, 'w', encoding="utf-8") as file:
        yaml.dump(user_info, file)

@router.post("/api/login")
async def login(request: Request, response: Response):
    data = await request.json()
    account = data.get("account")
    password = data.get("password")
    
    if account == user_info["account"] and password == user_info["password"]:
        logger.server(f"WebUI登录 - {request.client.host}")
        auth_token = Fernet.generate_key().decode()
        auth_expires = int(time.time() + AUTH_DURATION)
        auth_info[auth_token] = auth_expires
        
        response.set_cookie(key="auth_token", value=auth_token, httponly=True) # httponly for security
        response.set_cookie(key="auth_expires", value=str(auth_expires))
        
        return {"message": "登录成功", "auth_token": auth_token}
    else:
        logger.error(f"WebUI登录失败 - {request.client.host}")
        return {"error": "Failed"}

@router.post("/api/logout")
async def logout(request: Request):
    recv_token = request.cookies.get('auth_token')
    if recv_token in auth_info:
        del auth_info[recv_token]
        return {"message": "退出登录成功"}
    else:
        return {"error": "登录信息无效"}

@router.get("/api/profile", dependencies=[Depends(verify_auth)])
async def get_profile():
    return {"account": user_info['account']}

@router.post("/api/profile", dependencies=[Depends(verify_auth)])
async def update_profile(request: Request):
    data = await request.json()
    logger.server(data)
    
    if data.get("account"):
        user_info["account"] = data["account"]
    if data.get("password"):
        user_info["password"] = data["password"]
        save_user_info()
    
    # 清空所有登录信息，强制重新登录
    auth_info.clear()
    return {"message": "账户信息修改成功，请重新登录"}

# 在模块导入时尝试加载，或者由 main.py 调用 load_user_info
load_user_info()
