
import requests
import json
import time
import hashlib
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from urllib.parse import quote

# 配置信息 (请修改此处)
USERNAME = "1686233"  # 你的学工号
PASSWORD = "147741"        # 你的密码 (注意：之前分析中密码是"147741"或"1"，请确认)
DEVICE_ID = "41A0A3958BC13A7D13A473B4EF575F13" # 模拟设备ID

# 常量
BASE_URL = "http://202.202.43.47:8080/ZNCard-Access"
DEFAULT_KEY = "lyy4pGK2Iw0XtQPq"
MC_KEY = "gQCob9ZNJ7k0WUjr" # 用于 MAC 签名的密钥 (根据代码分析猜测)

class CryptoUtils:
    @staticmethod
    def aes_encrypt(text, key_str):
        key = key_str.encode('utf-8')
        cipher = AES.new(key, AES.MODE_ECB)
        # PKCS7 填充
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
            print(f"解密失败: {e}")
            return None

    @staticmethod
    def encrypt_sub16(input_str):
        """密钥派生函数: 加密输入并截取前16位"""
        encrypted = CryptoUtils.aes_encrypt(input_str, DEFAULT_KEY)
        if len(encrypted) > 16:
            return encrypted[:16]
        else:
            return encrypted.ljust(16, 'F')

    @staticmethod
    def tans_params(params):
        """模拟 tansParams 函数：生成 URL 查询字符串，带 trailing &"""
        result = ""
        # 遍历 Object.keys(t)，JS 中顺序通常是插入顺序 (对于非整数键)
        # 这里为了稳妥，且 encryptPKEY 似乎接受任何顺序，我们直接遍历
        # 注意：tansParams 使用 encodeURIComponent
        for key in params:
            val = params[key]
            if val is not None:
                encoded_key = quote(str(key))
                encoded_val = quote(str(val))
                result += f"{encoded_key}={encoded_val}&"
        return result

    @staticmethod
    def generate_mac(params):
        """生成 MAC 签名"""
        MC_KEY = "gQCob9ZNJ7k0WUjr"
        
        # 1. 构造 "key=value" 列表 (URL编码)
        items = []
        for key in params:
            val = params[key]
            if val is not None:
                encoded_key = quote(str(key))
                encoded_val = quote(str(val))
                items.append(f"{encoded_key}={encoded_val}")
        
        # 2. 追加 MCKEY
        items.append(f"MCKEY={MC_KEY}")
        
        # 3. 排序
        items.sort()
        
        # 4. 拼接 (无分隔符)
        final_str = "".join(items)
        
        # 5. MD5
        m = hashlib.md5()
        m.update(final_str.encode('utf-8'))
        return m.hexdigest().upper()

class YKTClient:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Linux; Android 16; 2311DRK48C Build/BP2A.250605.031.A3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/143.0.7499.34 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/41.37931)",
            "Content-Type": "application/x-www-form-urlencoded"
        })
        self.uuid = None
        self.token_id = None
        self.user_id = None
        self.emp_id = None
        self.e_account_id = None

    def get_new_id(self):
        """Step 1: 获取 UUID"""
        url = f"{BASE_URL}/appEntrance!newid.action"
        payload = {"TIMESTAMP": int(time.time() * 1000)}
        
        print(f"\n[1] 请求 UUID: {url}")
        try:
            resp = self.session.post(url, json=payload, headers={"Content-Type": "application/json"})
            data = resp.json()
            if data and data[0]['IS_SUCCESS'] == 'T':
                self.uuid = data[0]['DATA']
                print(f"UUID 获取成功: {self.uuid}")
                return True
            else:
                print(f"UUID 获取失败: {data}")
                return False
        except Exception as e:
            print(f"请求异常: {e}")
            return False

    def login(self, username, password):
        """Step 2: 登录"""
        if not self.uuid:
            print("请先获取 UUID")
            return False

        url = f"{BASE_URL}/appEntrance!gateWay.action"
        
        # 1. 准备业务参数
        params = {
            "SERVICE_TYPE": "appLoginUser",
            "USERNO": username,
            "PASSWORD": password,
            "DEVICEID": DEVICE_ID,
            "TIMESTAMP": str(int(time.time() * 1000)),
            "LOGINTYPE": "false"
        }
        
        # 2. 计算 MAC
        params["MAC"] = CryptoUtils.generate_mac(params)
        
        # 3. 构造参数字符串 (用于加密)
        # 使用 tansParams 逻辑
        param_str = CryptoUtils.tans_params(params)
        
        # 4. 生成动态密钥
        dynamic_key = CryptoUtils.encrypt_sub16(self.uuid)
        
        # 5. 加密 INFO
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        # 6. 发送请求
        payload = {"INFO": encrypted_info}
        print(f"\n[2] 发送登录请求: {url}")
        # print(f"明文参数: {param_str}")
        
        try:
            resp = self.session.post(url, data=payload)
            # print(f"响应: {resp.text}")
            
            # 7. 解密响应
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                encrypted_data = json_resp[0]['DATA']
                decrypted_data = CryptoUtils.aes_decrypt(encrypted_data, DEFAULT_KEY)
                
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    # print(f"登录响应明文: {json.dumps(result, indent=2, ensure_ascii=False)}")
                    
                    if result['status'] == 0:
                        self.token_id = result['item']['tokenId']
                        self.user_id = result['item']['userid']
                        self.emp_id = result['item']['empvo']['empId']
                        self.e_account_id = result['item']['empvo']['eAccountId']
                        print(f"登录成功! Token: {self.token_id}, UserID: {self.user_id}")
                        print(f"EmpID: {self.emp_id}, EAccountID: {self.e_account_id}")
                        print(f"姓名: {result['item']['empvo']['name']}")
                        return True
                    else:
                        print(f"登录失败: {result['message']}")
                        return False
            else:
                print(f"请求返回失败状态: {json_resp}")
                return False
                
        except Exception as e:
            print(f"登录异常: {e}")
            return False

    def get_account_info(self):
        """Step 3: 获取账户信息"""
        if not self.token_id:
            print("未登录")
            return False
            
        url = f"{BASE_URL}/appEntrance!gateWay.action"
        
        params = {
            "SERVICE_TYPE": "getEAcountNum",
            "TIMESTAMP": str(int(time.time() * 1000)),
            "USERID": str(self.user_id),
            "EMPID": str(self.emp_id),
            "EACCOUNTID": str(self.e_account_id),
            "TOKEN": self.token_id # 添加 TOKEN 用于计算 MAC
        }
        
        # 计算 MAC (包含 TOKEN)
        params["MAC"] = CryptoUtils.generate_mac(params)
        
        # 删除 TOKEN (不参与加密传输)
        del params["TOKEN"]
        
        # 构造参数串
        param_str = CryptoUtils.tans_params(params)
        print(param_str)
        # 使用 Token 生成密钥
        dynamic_key = CryptoUtils.encrypt_sub16(self.token_id)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {
            "INFO": encrypted_info,
            "USID": self.user_id # 业务请求通常带 USID
        }
        
        print(f"\n[3] 获取账户信息: {url}")
        try:
            print(payload)
            resp = self.session.post(url, data=payload)
            json_resp = resp.json()
            
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                encrypted_data = json_resp[0]['DATA']
                decrypted_data = CryptoUtils.aes_decrypt(encrypted_data, DEFAULT_KEY)
                
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        item = result['item']
                        print(">>> 账户信息 <<<")
                        print(f"余额: {item.get('accountAmount0')} 元")
                        print(f"状态: {item.get('accountStatusStr')}")
                        return True
                    else:
                        print(f"查询失败: {result['message']}")
            else:
                print(f"响应状态异常: {json_resp}") # 修改：打印完整响应
                
        except Exception as e:
            print(f"查询异常: {e}")
            return False

    def get_electricity_buildings(self):
        """Step 4.1: 获取楼栋列表"""
        if not self.token_id:
            print("未登录")
            return None
            
        url = f"{BASE_URL}/appEntrance!gateWay.action"
        
        params = {
            "SERVICE_TYPE": "getElectricityBuilding",
            "TIMESTAMP": str(int(time.time() * 1000)),
            "USERID": str(self.user_id),
            "EMPID": str(self.emp_id),
            "TYPE": "1",
            "TOKEN": self.token_id
        }
        
        # MAC & Encrypt
        params["MAC"] = CryptoUtils.generate_mac(params)
        del params["TOKEN"]
        param_str = CryptoUtils.tans_params(params)
        dynamic_key = CryptoUtils.encrypt_sub16(self.token_id)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {"INFO": encrypted_info, "USID": self.user_id}
        
        print(f"\n[4.1] 获取楼栋列表...")
        try:
            resp = self.session.post(url, data=payload)
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                decrypted_data = CryptoUtils.aes_decrypt(json_resp[0]['DATA'], DEFAULT_KEY)
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        return result['item']
        except Exception as e:
            print(f"获取楼栋异常: {e}")
        return None

    def get_electricity_floors(self, build_no):
        """Step 4.2: 获取楼层列表"""
        url = f"{BASE_URL}/appEntrance!gateWay.action"
        params = {
            "SERVICE_TYPE": "getElectricityFloor",
            "TIMESTAMP": str(int(time.time() * 1000)),
            "USERID": str(self.user_id),
            "EMPID": str(self.emp_id),
            "BUILDNO": str(build_no),
            "TOKEN": self.token_id
        }
        
        params["MAC"] = CryptoUtils.generate_mac(params)
        del params["TOKEN"]
        param_str = CryptoUtils.tans_params(params)
        dynamic_key = CryptoUtils.encrypt_sub16(self.token_id)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {"INFO": encrypted_info, "USID": self.user_id}
        print(f"\n[4.2] 获取楼层列表 (BuildNo: {build_no})...")
        
        try:
            resp = self.session.post(url, data=payload)
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                decrypted_data = CryptoUtils.aes_decrypt(json_resp[0]['DATA'], DEFAULT_KEY)
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        return result['item']
        except Exception as e:
            print(f"获取楼层异常: {e}")
        return None

    def get_electricity_rooms(self, build_no, floor_no):
        """Step 4.3: 获取房间列表"""
        url = f"{BASE_URL}/appEntrance!gateWay.action"
        params = {
            "SERVICE_TYPE": "getElectricityRoom",
            "TIMESTAMP": str(int(time.time() * 1000)),
            "USERID": str(self.user_id),
            "EMPID": str(self.emp_id),
            "ARCHITECTUREID": str(build_no),
            "FLOOR": str(floor_no),
            "TOKEN": self.token_id
        }
        
        params["MAC"] = CryptoUtils.generate_mac(params)
        del params["TOKEN"]
        param_str = CryptoUtils.tans_params(params)
        dynamic_key = CryptoUtils.encrypt_sub16(self.token_id)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {"INFO": encrypted_info, "USID": self.user_id}
        print(f"\n[4.3] 获取房间列表 (BuildNo: {build_no}, Floor: {floor_no})...")
        
        try:
            resp = self.session.post(url, data=payload)
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                decrypted_data = CryptoUtils.aes_decrypt(json_resp[0]['DATA'], DEFAULT_KEY)
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        return result['item']
        except Exception as e:
            print(f"获取房间异常: {e}")
        return None

    def query_electricity_by_room(self, all_room_no):
        """Step 4.4: 查询用电详情"""
        url = f"{BASE_URL}/appEntrance!gateWay.action"
        params = {
            "SERVICE_TYPE": "queryRoomEleByAllroomno",
            "TIMESTAMP": str(int(time.time() * 1000)),
            "USERID": str(self.user_id),
            "EMPID": str(self.emp_id),
            "ALLROOMNO": str(all_room_no),
            "TOKEN": self.token_id
        }
        
        params["MAC"] = CryptoUtils.generate_mac(params)
        del params["TOKEN"]
        param_str = CryptoUtils.tans_params(params)
        dynamic_key = CryptoUtils.encrypt_sub16(self.token_id)
        encrypted_info = CryptoUtils.aes_encrypt(param_str, dynamic_key)
        
        payload = {"INFO": encrypted_info, "USID": self.user_id}
        print(f"\n[4.4] 查询用电详情 (AllRoomNo: {all_room_no})...")
        
        try:
            resp = self.session.post(url, data=payload)
            json_resp = resp.json()
            if json_resp and json_resp[0]['IS_SUCCESS'] == 'T':
                decrypted_data = CryptoUtils.aes_decrypt(json_resp[0]['DATA'], DEFAULT_KEY)
                if decrypted_data:
                    result = json.loads(decrypted_data)
                    if result['status'] == 0:
                        return result['item']
        except Exception as e:
            print(f"查询用电异常: {e}")
        return None

def demo_electricity_flow(client):
    """演示完整的电费查询流程"""
    # 1. 获取楼栋
    buildings = client.get_electricity_buildings()
    if not buildings:
        print("未找到楼栋信息")
        return
    
    # 打印前5个楼栋供参考
    print("可选楼栋示例:")
    for b in buildings:
        print(f"  [{b['BUILDNO']}] {b['BUILDNAME']}")
    
    # 模拟选择: 明理苑3舍 (BUILDNO=426)
    target_build_no = "429" 
    target_build_name = "明理苑6舍"
    
    # 检查是否存在
    found = False
    for b in buildings:
        if b['BUILDNO'] == target_build_no:
            target_build_name = b['BUILDNAME']
            found = True
            break
    
    if not found:
        # 如果没找到426，就默认用第一个
        target_build_no = buildings[0]['BUILDNO']
        target_build_name = buildings[0]['BUILDNAME']
        
    print(f"选择楼栋: {target_build_name} ({target_build_no})")

    # 2. 获取楼层
    floors = client.get_electricity_floors(target_build_no)
    if not floors:
        print("未找到楼层信息")
        return
    else:
        for floor in floors:
            print(floor)

    # 模拟选择: 04层
    target_floor = "03"
    if not any(f['FLOORNO'] == target_floor for f in floors):
        target_floor = floors[0]['FLOORNO']
        
    print(f"选择楼层: {target_floor}")

    # 3. 获取房间
    rooms = client.get_electricity_rooms(target_build_no, target_floor)
    if not rooms:
        print("未找到房间信息")
        return
    else:
        for room in rooms:
            print(f"  [{room['ROOMNO']}] {room['CYROOMNO']} ({room['ALLROOMNO']})")

    # 模拟选择: 403 (ALLROOMNO=42600403)
    # log中: ROOMNO="03", CYROOMNO="403", ALLROOMNO="42600403"
    target_room = None
    for r in rooms:
        if "11" == r.get('ROOMNO', ''):
            target_room = r
            break
    
    if not target_room:
        target_room = rooms[0]
        
    print(f"选择房间: {target_room.get('CYROOMNO')} (AllRoomNo: {target_room['ALLROOMNO']})")

    # 4. 查询电费
    ele_info = client.query_electricity_by_room(target_room['ALLROOMNO'])
    if ele_info:
        print(">>> 用电详情 <<<")
        print(f"房间: {ele_info.get('roomno')}")
        print(f"剩余电量/水量: {ele_info.get('amount')}")
        print(f"余额: {ele_info.get('blanceValue')} 元")
        print(f"总费用: {ele_info.get('totalValue')}")
        print(f"记录时间: {ele_info.get('recordTime')}")

if __name__ == "__main__":
    client = YKTClient()
    if client.get_new_id():
        # 请确保上面的 USERNAME 和 PASSWORD 已修改为正确的值
        if client.login(USERNAME, PASSWORD):
            client.get_account_info()
            
            # 执行电费查询演示
            demo_electricity_flow(client)
