# -*- coding: utf-8 -*-
import datetime
from asyncio import sleep

from developTools.event.events import GroupMessageEvent
from developTools.message.message_components import Text, At
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

'''
上课时间
第一节 8:00-8:45
第二节 8:55-9:40
第三节 10:15-11:00
第四节 11:10-11:55
---
第五节 14:00-14:45
第六节 14:55-15:40
第七节 16:15-17:00
第八节 17:10-17:55
---
第九节 19:00-19:45
第十节 19:55-20:40
第十一节 20:50-21:35
第十二节 21:45-22:30
'''
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
        headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"
        
        # Use form data as requested: body content stu_num=...
        data = f"stu_num={target_stu_id}".encode("utf-8")
        logger.info(f"Get course table request: {data}")
        
        async with httpx.AsyncClient() as client:
            response = await client.post(url, headers=headers, content=data)
            # error_msg = traceback.format_exc()
            logger.info(f"Get course table response: {response.status_code}, {response.text}")
            response.raise_for_status()
            return response.json()["data"]

    async def get_student_info(token: str, target_stu_id: str):
        url = f"https://be-dev.redrock.cqupt.edu.cn/magipoke-jwzx/search/people?stu={target_stu_id}"
        headers = HEADER.copy()
        headers["Authorization"] = f"Bearer {token}"
        
        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=headers)
            logger.info(f"Get student info response: {response.status_code}, {response.text}")
            response.raise_for_status()
            res_json = response.json()
            if res_json.get("status") == 10000 and res_json.get("data"):
                return res_json["data"][0]
            return None

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
        if event.message_chain.has(At) and event.message_chain.has(Text):
            sender_id, text_command = event.message_chain.get(At)[0].qq, event.message_chain.get(Text)[0].text.strip()
        else :
            sender_id = str(event.sender.user_id)
            text_command = event.pure_text.strip()
        
        if text_command.startswith("课表绑定"):
            try:
                stu_id = text_command[4:]
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
                    
                    # Get student info
                    student_info = await get_student_info(token_to_use, stu_id)
                    
                    # Save to DB (Store token too, though it's the service token)
                    data = {
                        "cqupt": {
                            "stu_id": stu_id,
                            "password": default_password,
                            "token": token_to_use,
                            "course_table": processed_table,
                            "student_info": student_info,
                            "updated_at": datetime.datetime.now().isoformat()
                        }
                    }
                    await db.write_user(sender_id, data)
                    
                    msg = f"学号 {stu_id} 课表绑定成功！"
                    if student_info:
                        msg += f"\n姓名: {student_info.get('name')}"
                        msg += f"\n专业: {student_info.get('major')}"
                        msg += f"\n班级: {student_info.get('classnum')}"
                    
                    await bot.send(event, Text(msg))
                    
                except Exception as e:
                    error_msg = traceback.format_exc()
                    logger.error(f"Get course table failed: {e}\n{error_msg}")
                    await bot.send(event, Text(f"获取课表失败: {e}"))
                    
            except Exception as e:
                logger.error(f"Binding error: {e}")
                await bot.send(event, Text(f"绑定出错: {e}"))
        
        elif text_command in ["今天课表", "明天课表", "后天课表"] or \
             (text_command.endswith("课表") and text_command[:2] in ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]):
            try:
                db = await AsyncSQLiteDatabase.get_instance()
                user_data = await db.read_user(sender_id)
                cqupt_data = user_data.get("cqupt", {})
                
                if not cqupt_data or not cqupt_data.get("course_table"):
                    await bot.send(event, Text("请先绑定课表，发送：课表绑定+学号"))
                    return
                
                course_table = cqupt_data.get("course_table")

                today = datetime.date.today()
                
                # Determine target date
                if text_command=="昨天课表":
                    target_date = today - datetime.timedelta(days=1)
                elif text_command == "今天课表":
                    target_date = today
                elif text_command == "明天课表":
                    target_date = today + datetime.timedelta(days=1)
                elif text_command == "后天课表":
                    target_date = today + datetime.timedelta(days=2)
                else:
                    # Handle "周X课表"
                    target_weekday_str = text_command[:2]
                    weekday_map = {"周一": 0, "周二": 1, "周三": 2, "周四": 3, "周五": 4, "周六": 5, "周日": 6}
                    target_weekday = weekday_map.get(target_weekday_str)
                    
                    if target_weekday is not None:
                        current_weekday = today.weekday()
                        # Calculate date of this week's target day
                        delta = target_weekday - current_weekday
                        target_date = today + datetime.timedelta(days=delta)
                    else:
                        await bot.send(event, Text(f"未知的周{target_weekday_str}课表，请检查输入。"))
                        return
                
                # Helper to parse date from config
                def parse_config_date(cfg_date):
                    if not cfg_date: return None
                    try:
                        return datetime.date(int(cfg_date['year']), int(cfg_date['month']), int(cfg_date['day']))
                    except:
                        return None

                # Get semester start dates from config
                cfg = config.cqupt_helper.config
                fall_start = parse_config_date(cfg.get("semester_start_fall"))
                spring_start = parse_config_date(cfg.get("semester_start_spring"))
                
                # Determine current semester start
                candidates = [d for d in [fall_start, spring_start] if d and d <= target_date]
                if candidates:
                    current_start = max(candidates)
                else:
                    valid_dates = [d for d in [fall_start, spring_start] if d]
                    if valid_dates:
                        current_start = min(valid_dates, key=lambda x: abs((target_date - x).days))
                    else:
                        await bot.send(event, Text("未配置学期开始时间，请联系管理员"))
                        return
                
                # Calculate week and day
                delta_days = (target_date - current_start).days
                week = (delta_days // 7) + 1
                day_idx = target_date.weekday() # 0=Mon, 6=Sun
                
                # Week validation
                if week < 1 or week > 20:
                    await bot.send(event, [At(sender_id), Text(f"当前是第{week}周，不在学期课程安排范围内（1-20周）。")])
                    return
                
                # Fetch courses
                try:
                    courses = course_table[week-1][day_idx]
                except IndexError:
                    courses = []
                
                week_days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                
                if not courses:
                    await bot.send(event, [At(sender_id), Text(f"📅 第{week}周 {week_days[day_idx]} ({target_date.strftime('%m-%d')})\n今天没课，好好休息吧！")])
                    return
                
                # Sort by begin_lesson
                courses.sort(key=lambda x: x.get("begin_lesson", 0))
                
                # Time mapping
                lesson_time_map = {
                    1: ("8:00", "8:45"),
                    2: ("8:55", "9:40"),
                    3: ("10:15", "11:00"),
                    4: ("11:10", "11:55"),
                    5: ("14:00", "14:45"),
                    6: ("14:55", "15:40"),
                    7: ("16:15", "17:00"),
                    8: ("17:10", "17:55"),
                    9: ("19:00", "19:45"),
                    10: ("19:55", "20:40"),
                    11: ("20:50", "21:35"),
                    12: ("21:45", "22:30")
                }

                def get_time_range(begin, period):
                    end_lesson = begin + period - 1
                    start_time = lesson_time_map.get(begin, ("??:??", "??:??"))[0]
                    end_time = lesson_time_map.get(end_lesson, ("??:??", "??:??"))[1]
                    return f"{start_time}-{end_time}"

                # Format message
                stu_id = cqupt_data.get("stu_id", "")
                student_info = cqupt_data.get("student_info", {})
                name = student_info.get("name", "") if student_info else ""
                
                header_info = ""
                if name or stu_id:
                    header_info = f"{name} {stu_id}\n"

                msg = f"{header_info}📅 第{week}周 {week_days[day_idx]} ({target_date.strftime('%m-%d')})\n"
                for c in courses:
                    begin = c.get("begin_lesson", 1)
                    period = c.get("period", 2)
                    time_range = get_time_range(begin, period)
                    
                    msg += f"----------------\n"
                    msg += f"📖 {c.get('course')}\n"
                    msg += f"📍 {c.get('classroom')}\n"
                    msg += f"👨‍🏫 {c.get('teacher')}\n"
                    msg += f"⏰ {c.get('lesson')} ({time_range})\n"
                msg = msg.rstrip("\n")
                await bot.send(event, Text(msg))
                
            except Exception as e:
                logger.error(f"Query course error: {e}")
                await bot.send(event, Text(f"查询出错: {e}"))
