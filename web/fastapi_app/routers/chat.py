import os
import shutil
import json
import time
import httpx
from fastapi import APIRouter, HTTPException, Depends, Request, UploadFile, File
from fastapi.responses import FileResponse
from ..dependencies import verify_auth
from ..config import UPLOAD_FOLDER, ALLOWED_EXTENSIONS
from ..services.chat_service import (
    get_msg, delete_specified_msg, delete_all_msg, 
    get_file_storage, update_file_storage
)
from ..utils.logger import get_logger

router = APIRouter()
logger = get_logger()

# 确保上传目录存在
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def gen_file_name(filename):
    """如果文件存在，加后缀重命名"""
    i = 1
    name, extension = os.path.splitext(filename)
    while os.path.exists(os.path.join(UPLOAD_FOLDER, filename)):
        # 避免重复添加后缀
        # 原逻辑简单的 splitext 可能导致 a_1_2.jpg，这里简化处理
        filename = f"{name}_{i}{extension}"
        i += 1
    return filename

@router.post("/api/chat/uploadFile", dependencies=[Depends(verify_auth)])
async def upload_file_api(file: UploadFile = File(...)):
    try:
        filename = gen_file_name(file.filename)
        mime_type = file.content_type
        
        uploaded_file_path = os.path.join(UPLOAD_FOLDER, filename)
        
        with open(uploaded_file_path, "wb") as f:
            content = await file.read()
            f.write(content)
            
        return {"files": [{
            "name": filename,
            "type": mime_type,
            "path": "file://" + uploaded_file_path
        }]}
    except Exception as e:
        return {"error": str(e)}

@router.get("/api/chat/file", dependencies=[Depends(verify_auth)])
async def get_file_api(path: str = "", name: str = ""):
    try:
        origin_file_path = path
        file_name = name
        
        if origin_file_path.startswith("file://"):
            # 查询数据库
            stored_name = await get_file_storage(origin_file_path)
            if stored_name:
                file_name = stored_name
            else:
                # 尝试从路径中提取并移动
                raw_path = origin_file_path[7:] # 去掉 file://
                file_name = os.path.basename(raw_path)
                dest_path = os.path.join(UPLOAD_FOLDER, file_name)
                
                # 如果源文件不在上传目录，则移动
                if os.path.abspath(raw_path) != os.path.abspath(dest_path):
                    if os.path.exists(dest_path):
                        file_name = gen_file_name(file_name)
                        dest_path = os.path.join(UPLOAD_FOLDER, file_name)
                    
                    if os.path.exists(raw_path):
                        shutil.move(raw_path, dest_path)
                        await update_file_storage(origin_file_path, file_name)
                    else:
                         # 源文件也不存在，可能是直接访问文件名
                         pass
                else:
                    # 就在上传目录
                    pass

        file_path = os.path.join(UPLOAD_FOLDER, file_name)
        if not os.path.exists(file_path):
            return {"error": "File not found"}
            
        return FileResponse(file_path)
    except Exception as e:
        return {"error": str(e)}

@router.post("/api/chat/music", dependencies=[Depends(verify_auth)])
async def get_music_api(request: Request):
    try:
        data = await request.json()
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://ss.xingzhige.com/music_card/card",
                json=data
            )
            result = response.json()
            return result['meta']['music']
    except Exception as e:
        return {"error": f"请求时出错: {str(e)}"}

@router.get("/api/chat/get_history", dependencies=[Depends(verify_auth)])
async def get_history_api(start: int, end: int):
    try:
        result = await get_msg(start, end)
        return {"data": result}
    except Exception as e:
        return {"error": str(e)}

@router.post("/api/chat/del_history", dependencies=[Depends(verify_auth)])
@router.get("/api/chat/del_history", dependencies=[Depends(verify_auth)])
async def del_history_api(request: Request):
    # 支持 GET 和 POST
    # msg_id 在 args (query params) 中? 原代码: request.args.get("msg_id")
    # POST 也可能带 query params。
    msg_id = request.query_params.get("msg_id")
    try:
        if msg_id:
            await delete_specified_msg(msg_id)
        else:
            await delete_all_msg()
        return {"message": "删除成功"}
    except Exception as e:
        return {"error": str(e)}
