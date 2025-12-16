# -*- coding: utf-8 -*-
import datetime
import random
from asyncio import sleep

from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
import asyncio
from developTools.event.events import GroupMessageEvent, LifecycleMetaEvent
from developTools.message.message_components import Image, Text, Card
from framework_common.database_util.User import get_users_with_permission_above, get_user
from framework_common.database_util.llmDB import delete_user_history
from framework_common.framework_util.websocket_fix import ExtendBot
from framework_common.manshuo_draw import RedisDatabase, manshuo_draw
from framework_common.utils.random_str import random_str
from framework_common.utils.utils import download_img
from run.ai_llm.service.aiReplyCore import aiReplyCore
from run.anime_game_service.service.epicfree import epic_free_game_get
from run.basic_plugin.service.life_service import bingEveryDay, danxianglii
from run.basic_plugin.service.nasa_api import get_nasa_apod
from run.basic_plugin.service.weather_query import free_weather_query
from run.group_fun.service.lex_burner_Ninja import Lexburner_Ninja
from run.resource_collector.service.asmr.asmr100 import random_asmr_100
from run.streaming_media.service.Link_parsing.Link_parsing import bangumi_PILimg
from run.system_plugin.func_collection import trigger_tasks
from framework_common.database_util.ManShuoDrawCompatibleDataBase import AsyncSQLiteDatabase
import httpx
import traceback

HEADER = {
    "Host": "be-dev.redrock.cqupt.edu.cn",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0",
    "Accept": "application/json",
    "Content-Type": "text/plain; charset=UTF-8",
    "Origin": "https://redrockmobile.github.io",
    "Referer": "https://redrockmobile.github.io/",
}



def main(bot: ExtendBot, config):
    logger = bot.logger

    # 从配置文件中获取登录信息 (Default password)
    default_password = config.cqupt_helper.config["login_info"]["password"]
    default_username = config.cqupt_helper.config["login_info"]["username"]

    # Global token cache
    service_token = {"token": None}

    async def check_token(token: str) -> bool:
        if not token: return False
        url = "https://be-dev.redrock.cqupt.edu.cn/magipoke/person/info"
        headers = HEADER.copy()
        headers["Authorization"] = f"Bearer {token}"
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(url, headers=headers)
                return response.status_code == 200
        except Exception as e:
            logger.error(f"Token check failed: {e}")
            return False

    async def login() -> str:
        """Login with default credentials"""
        url = "https://be-dev.redrock.cqupt.edu.cn/magipoke/token"
        logger.info(f"Login with username: {default_username}")
        data = {"stuNum": str(default_username), "idNum": str(default_password)}
        async with httpx.AsyncClient() as client:
            response = await client.post(url, headers=HEADER, json=data)
            response.raise_for_status()
            token = response.json()["data"]["token"]
            service_token["token"] = token
            return token

    async def get_course_table(token: str, target_stu_id: str):
        url = "https://be-dev.redrock.cqupt.edu.cn/magipoke-jwzx/kebiao"
        headers = HEADER.copy()
        headers["Authorization"] = f"Bearer {token}"
        # Use form data as requested: body content stu_num=...
        data = {"stu_num": target_stu_id}
        async with httpx.AsyncClient() as client:
            response = await client.post(url, headers=headers, data=data)
            response.raise_for_status()
            return response.json()["data"]["courseTable"]

    def process_course_data(raw_data):
        # 20 weeks, 7 days (Mon=0 to Sun=6)
        # Week 1 maps to index 0
        flattened = [[[] for _ in range(7)] for _ in range(20)]
        
        for course in raw_data:
            weeks = course.get("week", [])
            day_idx = course.get("hash_day") # 0-6
            
            # Extract relevant info
            info = {
                "course": course.get("course"),
                "begin_lesson": course.get("begin_lesson"),
                "period": course.get("period"),
                "classroom": course.get("classroom"),
                "teacher": course.get("teacher"),
                "type": course.get("type"),
                "rawWeek": course.get("rawWeek"),
                "lesson": course.get("lesson")
            }
            
            for w in weeks:
                if 1 <= w <= 20:
                    flattened[w-1][day_idx].append(info)
        return flattened
    
    @bot.on(GroupMessageEvent)
    async def _(event: GroupMessageEvent):
        text_command = event.pure_text
        sender_id = str(event.sender.user_id)
        
        if text_command.startswith("课表绑定"):
            try:
                stu_id = text_command[4:].strip()
                if not stu_id:
                    await bot.send(event, Text("请输入学号，例如：课表绑定2000210091"))
                    return

                db = await AsyncSQLiteDatabase.get_instance()
                
                # Check/Get Service Token
                token_to_use = service_token["token"]
                
                # Verify if current token is valid
                if not await check_token(token_to_use):
                    try:
                        token_to_use = await login()
                    except Exception as e:
                        logger.error(f"Service Login failed: {e}")
                        await bot.send(event, Text(f"服务账号登录失败，请联系管理员。错误: {e}"))
                        return

                # Get course table for target student
                try:
                    raw_table = await get_course_table(token_to_use, stu_id)
                    processed_table = process_course_data(raw_table)
                    
                    # Save to DB (Store token too, though it's the service token)
                    data = {
                        "cqupt": {
                            "stu_id": stu_id,
                            "password": default_password,
                            "token": token_to_use,
                            "course_table": processed_table,
                            "updated_at": datetime.datetime.now().isoformat()
                        }
                    }
                    await db.write_user(sender_id, data)
                    
                    await bot.send(event, Text(f"学号 {stu_id} 课表绑定成功！"))
                    
                except Exception as e:
                    error_msg = traceback.format_exc()
                    logger.error(f"Get course table failed: {e}\n{error_msg}")
                    await bot.send(event, Text(f"获取课表失败: {e}"))
                    
            except Exception as e:
                logger.error(f"Binding error: {e}")
                await bot.send(event, Text(f"绑定出错: {e}"))
