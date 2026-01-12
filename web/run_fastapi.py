import os
import sys
import asyncio
import socket

# 确保当前目录在 sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi_app.utils.helpers import install_and_import

# 检查并安装依赖
install_and_import("fastapi")
install_and_import("uvicorn")
# python-multipart 是 FastAPI 的依赖，通常不需要显式 import，但为了确保安装，我们检查它
# 注意：python-multipart 的 import 名称通常是 multipart
install_and_import("python-multipart", "multipart")
install_and_import("aiosqlite")
install_and_import("psutil")
install_and_import("cryptography")
install_and_import("ruamel.yaml")
install_and_import("hypercorn") # 使用 hypercorn 以更好地支持双栈

from hypercorn.config import Config
from hypercorn.asyncio import serve
from fastapi_app.main import app

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

async def main():
    port = 5007
    if is_port_in_use(port):
        print(f"警告: 端口 {port} 已被占用，尝试使用其他端口...")
        # 这里可以选择退出或换端口，但为了保持兼容性，最好还是 5007
        # 或者提示用户关闭旧服务
        # print("请先关闭旧的服务器 (server_new.py)")
        
    config = Config()
    # 尝试绑定 IPv6 (在支持双栈的系统上也会绑定 IPv4) 和 IPv4
    # 在某些系统上，绑定 [::] 会自动包含 IPv4，重复绑定 0.0.0.0 会报错
    # 我们可以先尝试绑定 [::]，如果系统是 Windows，通常默认不支持双栈 socket（除非特殊配置），
    # 所以为了保险，我们尝试同时绑定，但要注意处理 potential error。
    # Hypercorn 允许绑定列表。
    
    config.bind = ["0.0.0.0:5007", "[::]:5007"]
    config.accesslog = "-" # 输出到 stdout
    config.errorlog = "-"
    
    print(f"正在启动 FastAPI 服务器，监听端口 {port} (IPv4 & IPv6)...")
    print(f"WebUI 地址: http://localhost:{port}")
    
    try:
        await serve(app, config)
    except Exception as e:
        print(f"启动失败: {e}")
        print("尝试仅绑定 IPv4...")
        config.bind = ["0.0.0.0:5007"]
        await serve(app, config)

if __name__ == "__main__":
    asyncio.run(main())
