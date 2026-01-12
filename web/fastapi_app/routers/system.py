import os
import psutil
from fastapi import APIRouter, Depends, Request
from fastapi.responses import FileResponse
from ..dependencies import verify_auth
from ..config import ROOT_DIR, REPO_SOURCES, GIT_PATH
from ..services.user_service import get_users_range, get_users_count, get_user_signed_days
from ..routers.auth import user_info

router = APIRouter()

@router.get("/api/diagnosis", dependencies=[Depends(verify_auth)])
@router.post("/api/diagnosis", dependencies=[Depends(verify_auth)])
async def diagnosis_api(request: Request):
    try:
        logs_dir = os.path.join(ROOT_DIR, "log")
        
        if request.method == "GET":
            if not os.path.exists(logs_dir):
                return {"files": []}
            files = [f for f in os.listdir(logs_dir) if os.path.isfile(os.path.join(logs_dir, f))]
            return {"files": files}
            
        elif request.method == "POST":
            data = await request.json()
            filename = data.get("file")
            file_path = os.path.join(logs_dir, filename)
            
            # 安全检查
            if not os.path.abspath(file_path).startswith(os.path.abspath(logs_dir)):
                return {"error": "Invalid file path"}
            if not os.path.exists(file_path):
                return {"error": "File not found"}
                
            file_size = os.path.getsize(file_path)
            if file_size > 30 * 1024 * 1024:
                return {"error": f"日志文件过大: {file_size / 1024 / 1024:.2f} MB"}
                
            return FileResponse(file_path)
            
    except Exception as e:
        return {"error": str(e)}

@router.get("/api/dashboard/basicInfo", dependencies=[Depends(verify_auth)])
async def basic_info_api(systemInfo: str = None):
    try:
        cpu_percent = psutil.cpu_percent(interval=0.5)
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage('/')
        
        if systemInfo:
            return {
                "systemInfo": {
                    "cpuUsage": cpu_percent,
                    "totalMemory": memory.total,
                    "usedMemory": memory.used,
                    "totalDisk": disk.total,
                    "usedDisk": disk.used
                },
            }
            
        token_rank = await get_users_range(0, 10, "ai_token_record", "DESC")
        signin_rank = await get_user_signed_days()
        total_users = await get_users_count()
        
        return {
            "systemInfo": {
                "cpuUsage": cpu_percent,
                "totalMemory": memory.total,
                "usedMemory": memory.used,
                "totalDisk": disk.total,
                "usedDisk": disk.used
            },
            "botInfo": {
                "totalUsers": total_users,
                "totalFriends": user_info.get('friends', 0),
                "totalGroups": user_info.get('groups', 0)
            },
            "ranks": {
                "tokenRank": token_rank,
                "signInRank": signin_rank
            }
        }
    except Exception as e:
        return {"error": f"获取基本信息失败: {e}"}

@router.get("/api/sources", dependencies=[Depends(verify_auth)])
async def list_sources_api():
    return list(REPO_SOURCES)

@router.post("/api/clone", dependencies=[Depends(verify_auth)])
async def clone_source_api(request: Request):
    data = await request.json()
    source_url = data.get("source")
    
    if not source_url:
        return {"error": "Missing source URL"}
    
    eridanus_path = os.path.join(os.getcwd(), "Eridanus") # 假设在 CWD 克隆
    if os.path.exists(eridanus_path):
        return {"error": "Eridanus already exists。请删除现有Eridanus后再尝试克隆"}
        
    os.system(f"{GIT_PATH} clone --depth 1 {source_url}")
    return {"message": f"开始部署 {source_url}"}

@router.get("/api/tools/restart", dependencies=[Depends(verify_auth)])
async def restart_server_api():
    return {"message": "功能开发中，敬请期待"}
