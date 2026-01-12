import time
from fastapi import Request, HTTPException, Depends
from fastapi.security import APIKeyCookie
from .config import IP_WHITELIST

# 全局存储认证信息: token -> expire_timestamp
auth_info = {}

async def verify_auth(request: Request):
    # 白名单直接放行
    client_host = request.client.host
    if client_host in IP_WHITELIST:
        return True
    
    # 检查 cookie
    auth_token = request.cookies.get("auth_token")
    if not auth_token:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    expire_time = auth_info.get(auth_token)
    if not expire_time or expire_time < int(time.time()):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    return True
