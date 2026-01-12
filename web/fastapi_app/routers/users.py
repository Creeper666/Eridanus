import sys
import os
from fastapi import APIRouter, Depends, Request
from ..dependencies import verify_auth
from ..config import ROOT_DIR
from ..services.user_service import (
    get_users_range, get_users_count, search_users_by_id
)

# 导入 update_user
sys.path.append(ROOT_DIR)
try:
    from framework_common.database_util.User import update_user
except ImportError:
    # 可能是路径问题或者文件不存在，暂时 mock 或者报错
    print("Warning: framework_common not found")
    async def update_user(**kwargs):
        return "Update function not available"

router = APIRouter()

@router.get("/api/usermgr/userList", dependencies=[Depends(verify_auth)])
async def get_users_api(
    current: int = 1,
    pageSize: int = 10,
    sortBy: str = None,
    sortOrder: str = None,
    user_id: str = None
):
    try:
        start = (current - 1) * pageSize
        end = start + pageSize
        
        if user_id:
            total_count = await get_users_count(user_id)
            users = await search_users_by_id(user_id, start, end, sortBy, sortOrder)
        else:
            total_count = await get_users_count()
            users = await get_users_range(start, end, sortBy, sortOrder)
            
        return {
            "data": users,
            "total": total_count,
            "success": True,
            "pageSize": pageSize,
            "current": current,
        }
    except Exception as e:
        return {"error": f"获取用户信息失败: {e}"}

@router.post("/api/usermgr/modUser", dependencies=[Depends(verify_auth)])
async def mod_user_api(request: Request):
    try:
        data = await request.json()
        result = await update_user(
            user_id = int(data.get("user_id")),
            nickname = data.get("nickname"),
            card = data.get("card"),
            sex = data.get("sex"),
            age = int(data.get("age")),
            city = data.get("city"),
            permission = int(data.get("permission")),
            ai_token_record = int(data.get("ai_token_record")),
            user_portrait = data.get("user_portrait"),
        )
        return {"message": result}
    except Exception as e:
        return {"error": f"更新用户信息失败: {e}"}
