# -*- coding: utf-8 -*-
import datetime
from asyncio import sleep

from developTools.event.events import GroupMessageEvent
from developTools.message.message_components import Text, At, Image
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
import time
import hashlib
import base64
import json
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from urllib.parse import quote

# --- YKT Crypto & Config ---
YKT_BASE_URL = "http://202.202.43.47:8080/ZNCard-Access"
YKT_DEFAULT_KEY = "lyy4pGK2Iw0XtQPq"
YKT_MC_KEY = "gQCob9ZNJ7k0WUjr"
YKT_DEVICE_ID = "41A0A3958BC13A7D13A473B4EF575F13"

class CryptoUtils:
    @staticmethod
    def aes_encrypt(text, key_str):
        key = key_str.encode('utf-8')
        cipher = AES.new(key, AES.MODE_ECB)
        padded_text = pad(text.encode('utf-8'), AES.block_size)
        encrypted = cipher.encrypt(padded_text)
        return base64.b64encode(encrypted).decode('utf-8')

    @staticmethod
    def aes_decrypt(text_base64, key_str):
        try:
            key = key_str.encode('utf-8')
            cipher = AES.new(key, AES.MODE_ECB)
            encrypted = base64.b64decode(text_base64)
            decrypted = unpad(cipher.decrypt(encrypted), AES.block_size)
            return decrypted.decode('utf-8')
        except Exception as e:
            return None

    @staticmethod
    def encrypt_sub16(input_str):
        encrypted = CryptoUtils.aes_encrypt(input_str, YKT_DEFAULT_KEY)
        if len(encrypted) > 16:
            return encrypted[:16]
        else:
            return encrypted.ljust(16, 'F')

    @staticmethod
    def tans_params(params):
        result = ""
        for key in params:
            val = params[key]
            if val is not None:
                encoded_key = quote(str(key))
                encoded_val = quote(str(val))
                result += f"{encoded_key}={encoded_val}&"
        return result

    @staticmethod
    def generate_mac(params):
        items = []
        for key in params:
            val = params[key]
            if val is not None:
                encoded_key = quote(str(key))
                encoded_val = quote(str(val))
                items.append(f"{encoded_key}={encoded_val}")
        items.append(f"MCKEY={YKT_MC_KEY}")
        items.sort()
        final_str = "".join(items)
        m = hashlib.md5()
        m.update(final_str.encode('utf-8'))
        return m.hexdigest().upper()

class YKTManager:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.client = httpx.AsyncClient(headers={
            "User-Agent": "Mozilla/5.0 (Linux; Android 16; 2311DRK48C Build/BP2A.250605.031.A3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/143.0.7499.34 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/41.37931)",
            "Content-Type": "application/x-www-form-urlencoded"
        })
        self.uuid = None
        self.token_id = None
        self.user_id = None
        self.emp_id = None
        self.e_account_id = None

    async def get_new_id(self):
        url = f"{YKT_BASE_URL}/appEntrance!newid.action"
        payload = {"TIMESTAMP": int(time.time() * 1000)}
        try:
            resp = await self.client.post(url, json=payload, headers={"Content-Type": "application/json"})
            data = resp.json()
            if data and data[0]['IS_SUCCESS'] == 'T':
                self.uuid = data[0]['DATA']
                return True
        except:
            pass
        return False

    async def login(self):
        if not await self.get_new_id(): return False

        url = f"{YKT_BASE_URL}/appEntrance!gateWay.action"
        params = {
            "SERVICE_TYPE": "appLoginUser",
            "USERNO": self.username,
            "PASSWORD": self.password,
            "DEVICEID": YKT_DEVICE_ID,
            "TIMESTAMP": str(int(time.time() * 1000)),
            "LOGINTYPE": "false"
        }
        params["MAC"] = CryptoUtils.generate_mac(params)
        param_str = CryptoUtils.tans_params(params)
        dynamic_key = CryptoUtils.encrypt_sub16(self.uuid)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {"INFO": encrypted_info}
        try:
            resp = await self.client.post(url, data=payload)
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                decrypted_data = CryptoUtils.aes_decrypt(json_resp[0]['DATA'], YKT_DEFAULT_KEY)
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        self.token_id = result['item']['tokenId']
                        self.user_id = result['item']['userid']
                        self.emp_id = result['item']['empvo']['empId']
                        self.e_account_id = result['item']['empvo']['eAccountId']
                        return True
        except:
            pass
        return False

    async def ensure_login(self):
        if not self.token_id:
            return await self.login()
        
        # Check token validity using a lightweight request (e.g. get buildings)
        # We need to manually construct this request to avoid infinite recursion
        # since generic_request calls ensure_login.
        test_res = await self.generic_request("getElectricityBuilding", {"TYPE": "1"}, need_token=True, check_login=False)
        if test_res is None:
            self.token_id = None
            return await self.login()
        
        return True

    async def generic_request(self, service_type, extra_params, need_token=True, check_login=True):
        if check_login:
            if not await self.ensure_login(): return None
        
        url = f"{YKT_BASE_URL}/appEntrance!gateWay.action"
        params = {
            "SERVICE_TYPE": service_type,
            "TIMESTAMP": str(int(time.time() * 1000)),
            "USERID": str(self.user_id),
            "EMPID": str(self.emp_id),
            **extra_params
        }
        if need_token:
            params["TOKEN"] = self.token_id
            
        params["MAC"] = CryptoUtils.generate_mac(params)
        if need_token: del params["TOKEN"]
        
        param_str = CryptoUtils.tans_params(params)
        dynamic_key = CryptoUtils.encrypt_sub16(self.token_id)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {"INFO": encrypted_info, "USID": self.user_id}
        
        try:
            resp = await self.client.post(url, data=payload)
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                decrypted_data = CryptoUtils.aes_decrypt(json_resp[0]['DATA'], YKT_DEFAULT_KEY)
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        return result['item']
        except:
            pass
        return None

    async def get_electricity_buildings(self):
        return await self.generic_request("getElectricityBuilding", {"TYPE": "1"})

    async def get_electricity_floors(self, build_no):
        return await self.generic_request("getElectricityFloor", {"BUILDNO": str(build_no)})

    async def get_electricity_rooms(self, build_no, floor_no):
        return await self.generic_request("getElectricityRoom", {
            "ARCHITECTUREID": str(build_no),
            "FLOOR": str(floor_no)
        })

    async def query_electricity_by_room(self, all_room_no):
        return await self.generic_request("queryRoomEleByAllroomno", {"ALLROOMNO": str(all_room_no)})

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
    
    # YKT Manager
    ykt_username = config.cqupt_helper.config.get("ykt_login_info", {}).get("username", default_username)
    ykt_password = config.cqupt_helper.config.get("ykt_login_info", {}).get("password", default_password)
    ykt_manager = YKTManager(ykt_username, ykt_password)

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
        # White List Check
        white_list_cfg = config.cqupt_helper.config.get("white_list", {})
        if white_list_cfg.get("enable", True):
            if event.group_id not in white_list_cfg.get("group_ids", []):
                return

        if event.message_chain.has(At) and event.message_chain.has(Text):
            sender_id, text_command = event.message_chain.get(At)[0].qq, event.message_chain.get(Text)[0].text.strip()
        else :
            sender_id = str(event.sender.user_id)
            text_command = event.pure_text.strip()
        
        # 增加换绑指令
        if text_command.startswith("课表换绑"):
            text_command = "课表绑定" + text_command[4:].strip()
            force_bind = True
        else:
            force_bind = False

        if text_command.startswith("课表绑定"):
            try:
                stu_id = text_command[4:].strip()
                if not stu_id:
                    await bot.send(event, Text("请输入学号，例如：课表绑定2000210091"))
                    return

                db = await AsyncSQLiteDatabase.get_instance()
                
                # Check existing binding
                if not force_bind:
                    user_data = await db.read_user(sender_id)
                    existing_cqupt = user_data.get("cqupt", {})
                    if existing_cqupt and existing_cqupt.get("stu_id"):
                        old_stu_id = existing_cqupt.get("stu_id")
                        old_info = existing_cqupt.get("student_info", {})
                        old_name = old_info.get("name", "未知用户")
                        
                        msg = f"已绑定学号：{old_stu_id} ({old_name})\n如需更换绑定，请发送：课表换绑{stu_id}"
                        await bot.send(event, Text(msg))
                        return
                
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
                    if not raw_table:
                        await bot.send(event, Text("未查询到课表数据，请检查学号是否正确。"))
                        return

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
        
        elif text_command in ["昨天课表","今天课表", "明天课表", "后天课表"] or \
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
                    # logger.info(f"Query course for {sender_id} on {today - datetime.timedelta(days=1)}")
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
                    await bot.send(event, [At(qq=sender_id), Text(f"\n当前是第{week}周，不在学期课程安排范围内（1-20周）。")])
                    return
                
                # Fetch courses
                try:
                    courses = course_table[week-1][day_idx]
                except IndexError:
                    courses = []
                
                week_days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                
                if not courses:
                    await bot.send(event, [At(qq=sender_id), Text(f"\n📅 第{week}周 {week_days[day_idx]} ({target_date.strftime('%m-%d')})\n今天没课，好好休息吧！")])
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

                msg = f"\n{header_info}📅 第{week}周 {week_days[day_idx]} ({target_date.strftime('%m-%d')})\n"
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
                await bot.send(event, [At(qq=sender_id), Text(msg)])
                
            except Exception as e:
                logger.error(f"Query course error: {e}")
                await bot.send(event, Text(f"查询出错: {e}"))

        elif text_command.startswith("电费绑定"):
            try:
                room_str_full = text_command[4:].strip()
                if "舍" not in room_str_full:
                    await bot.send(event, Text("格式错误，请包含'舍'"))
                    return
                
                parts = room_str_full.split("舍")
                if len(parts) < 2:
                     await bot.send(event, Text("格式错误，无法解析"))
                     return
                
                building_part = parts[0] + "舍"
                room_num_part = parts[1]
                
                if len(room_num_part) < 2:
                     await bot.send(event, Text("房间号格式错误"))
                     return
                     
                floor_raw = room_num_part[:-2]
                if not floor_raw:
                     await bot.send(event, Text("房间号格式错误，无法解析楼层"))
                     return

                if len(floor_raw) == 1:
                    floor_str = "0" + floor_raw
                else:
                    floor_str = floor_raw
                
                # await bot.send(event, Text("正在连接电费系统..."))
                
                if not await ykt_manager.ensure_login():
                     await bot.send(event, Text("电费系统登录失败，请联系管理员"))
                     return

                buildings = await ykt_manager.get_electricity_buildings()
                if not buildings:
                     await bot.send(event, Text("无法获取楼栋列表"))
                     return
                
                target_build_no = None
                for b in buildings:
                    if b['BUILDNAME'] == building_part:
                        target_build_no = b['BUILDNO']
                        break
                
                if not target_build_no:
                     await bot.send(event, Text(f"未找到楼栋：{building_part}"))
                     return
                
                rooms = await ykt_manager.get_electricity_rooms(target_build_no, floor_str)
                if not rooms:
                     await bot.send(event, Text(f"未找到该楼层房间信息 (楼栋:{target_build_no}, 楼层:{floor_str})"))
                     return
                
                target_room = None
                for r in rooms:
                    if r.get('CYROOMNO') == room_num_part:
                        target_room = r
                        break
                
                if not target_room:
                     await bot.send(event, Text(f"未找到房间：{room_num_part}"))
                     return
                
                all_room_no = target_room['ALLROOMNO']
                room_name = f"{building_part}{room_num_part}"
                
                db = await AsyncSQLiteDatabase.get_instance()
                user_data = await db.read_user(sender_id)
                if not user_data: user_data = {}
                cqupt_data = user_data.get("cqupt", {})
                
                cqupt_data["electricity"] = {
                    "all_room_no": all_room_no,
                    "room_name": room_name,
                    "bind_at": datetime.datetime.now().isoformat()
                }
                user_data["cqupt"] = cqupt_data
                await db.write_user(sender_id, user_data)
                
                await bot.send(event, Text(f"电费绑定成功！\n已绑定：{room_name}"))
                
            except Exception as e:
                logger.error(f"Ele binding error: {e}")
                await bot.send(event, Text(f"绑定出错: {e}"))

        elif text_command == "电费查询":
            try:
                db = await AsyncSQLiteDatabase.get_instance()
                user_data = await db.read_user(sender_id)
                cqupt_data = user_data.get("cqupt", {})
                ele_data = cqupt_data.get("electricity")
                
                if not ele_data:
                    await bot.send(event, Text("请先绑定寝室！详见：重邮帮助"))
                    return
                
                all_room_no = ele_data.get("all_room_no")
                room_name = ele_data.get("room_name")
                
                if not await ykt_manager.ensure_login():
                     await bot.send(event, Text("电费系统登录失败，请联系管理员"))
                     return
                
                res = await ykt_manager.query_electricity_by_room(all_room_no)
                if not res:
                     await bot.send(event, Text("查询失败，未获取到数据"))
                     return

                msg = f"🏠 寝室：{room_name}\n"
                msg += f"本月用量：{res.get('amount')}\n"
                msg += f"本月费用：{res.get('totalValue')}\n"
                msg += f"💰 余额：{res.get('blanceValue')} 元\n"
                msg += f"🕒 更新：{res.get('recordTime')}"
                
                await bot.send(event, [At(qq=sender_id), Text("\n" + msg)])
                
            except Exception as e:
                logger.error(f"Ele query error: {e}")
                await bot.send(event, Text(f"查询出错: {e}"))

        elif text_command == "重邮帮助":
            draw_json = [
                {'type': 'basic_set', 'img_name_save': 'cqupt_course_help.png'},
                {'type': 'avatar', 'subtype': 'common',
                 'img': [f"https://q1.qlogo.cn/g?b=qq&nk={event.self_id}&s=640"], 'upshift_extra': 15,
                 'content': [f"[name]重邮助手[/name]\n[time]随时随地查看课程安排与查询电费[/time]"]},
                '在这里你可以通过bot快速查询你的重邮课表安排。@谁，查询/绑定的对象就是谁。查询/绑定自己的不需要@。\n[title]指令菜单：[/title]'
                '\n- 绑定学号：课表绑定 202xxxxx \n[des]初次使用必须绑定，会自动获取姓名班级信息[/des]'
                '\n- 更换绑定：课表换绑 202xxxxx \n[des]已绑定用户更换学号时使用[/des]'
                '\n- 查询昨天课表：昨天课表'
                '\n- 查询今天课表：今天课表'
                '\n- 查询明天课表：明天课表'
                '\n- 查询后天课表：后天课表'
                '\n- 查询本周特定日：周一课表、周二课表...周日课表'
                '\n- 电费绑定寝室：电费绑定 兴业苑1舍101'
                '\n- 电费查询：电费查询'
                '\n[title]注意：[/title]绑定只需进行一次，数据会自动保存。'
                '\n[des]数据来源：红岩网校-掌上重邮API；重邮一卡通APP[/des]'
            ]
            await bot.send(event, Image(file=(await manshuo_draw(draw_json))))
