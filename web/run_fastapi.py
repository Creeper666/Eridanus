import os
import sys
import asyncio
import socket

# 确保当前目录在 sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi_app.utils.helpers import install_and_import
from fastapi_app.utils.logger import get_logger

logger = get_logger("WebUI")

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
from fastapi_app.config import DEFAULT_PORT

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

async def main():
    port = DEFAULT_PORT
    if is_port_in_use(port):
        while True:
            logger.warning(f"端口 {port} 已被占用！")
            time.sleep(5)
    '''
    while is_port_in_use(port) and port < 65535:
        logger.warning(f"端口 {port} 已被占用，尝试使用端口 {port+1}")
        port += 1
        # 自动选择下一个可用端口，直到可用为止。如果端口范围 5007-65535 均被占用，提示用户关闭旧服务。
        if port >= 65535:
            logger.error("端口范围 5007-65535 均被占用，无法启动服务器!")
            return
    '''
    config = Config()
    # 尝试绑定 IPv6 (在支持双栈的系统上也会绑定 IPv4) 和 IPv4
    # 在某些系统上，绑定 [::] 会自动包含 IPv4，重复绑定 0.0.0.0 会报错
    # 我们可以先尝试绑定 [::]，如果系统是 Windows，通常默认不支持双栈 socket（除非特殊配置），
    # 所以为了保险，我们尝试同时绑定，但要注意处理 potential error。
    # Hypercorn 允许绑定列表。
    
    config.bind = [f"0.0.0.0:{port}", f"[::]:{port}"]
    config.accesslog = None # 禁用访问日志输出
    config.errorlog = "-" # 保留错误日志
    
    logger.info(f"正在启动 FastAPI 服务器，监听端口 {port} (IPv4 & IPv6)...")
    logger.info(f"WebUI 地址: http://localhost:{port}")
    
    try:
        await serve(app, config)
    except Exception as e:
        logger.error(f"启动失败: {e}")
        logger.info("尝试仅绑定 IPv4...")
        config.bind = [f"0.0.0.0:{port}"]
        await serve(app, config)

if __name__ == "__main__":
    asyncio.run(main())
