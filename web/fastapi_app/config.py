import os
import sys
from ruamel.yaml import YAML

# 默认端口
DEFAULT_PORT = 5007

# 路径配置
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WEB_DIR = os.path.dirname(BASE_DIR)
ROOT_DIR = os.path.dirname(WEB_DIR)
RUN_DIR = os.path.abspath(os.path.join(WEB_DIR, '..', 'run'))
UPLOAD_FOLDER = os.path.join(WEB_DIR, "chat_files")
USER_FILE = os.path.join(WEB_DIR, "user_info.yaml")
DIST_DIR = os.path.join(WEB_DIR, "dist")

# Git 配置
CUSTOM_GIT_PATH = os.path.join(ROOT_DIR, "environments", "MinGit", "cmd", "git.exe")
GIT_PATH = CUSTOM_GIT_PATH if os.path.exists(CUSTOM_GIT_PATH) else "git"

# 鉴权配置
AUTH_DURATION = 720000
IP_WHITELIST = ["127.0.0.1","192.168.195.128","192.168.195.180","::1"] # ["127.0.0.1", "::1"]
# IP_WHITELIST = []

# YAML 解析器初始化
yaml = YAML()
yaml.preserve_quotes = True

# 默认用户信息
DEFAULT_USER_INFO = {
    "account": "eridanus",
    "password": "f6074ac37e2f8825367d9ae118a523abf16924a86414242ae921466db1e84583",
    "friends": 0,
    "groups": 0,
}

# 可用的 git 源
REPO_SOURCES = [
    "https://ghfast.top/https://github.com/avilliai/Eridanus.git",
    "https://mirror.ghproxy.com/https://github.com/avilliai/Eridanus",
    "https://github.moeyy.xyz/https://github.com/avilliai/Eridanus",
    "https://github.com/avilliai/Eridanus.git",
    "https://gh.llkk.cc/https://github.com/avilliai/Eridanus.git",
    "https://gitclone.com/github.com/avilliai/Eridanus.git"
]

# 合法的消息事件
VALID_MESSAGE_ACTIONS = ['send_group_forward_msg', 'send_group_msg', 'upload_group_file']

# 允许的文件后缀
ALLOWED_EXTENSIONS = {'gif', 'png', 'jpg', 'jpeg', 'bmp', 'webp', 'tif', 'tiff', 'heif', 'ico', 'heic', 'svg', 'avif', 'jfif', 'zip'}
