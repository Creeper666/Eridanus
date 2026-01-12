import os
import sys
import time
import shutil
import zipfile
from fastapi import APIRouter, HTTPException, Depends, Request
from fastapi.responses import FileResponse
from ..dependencies import verify_auth
from ..services.yaml_service import (
    YAML_FILES, load_yaml, save_yaml, search_yaml_content
)
from ..services.chat_service import update_file_storage
from ..config import ROOT_DIR, UPLOAD_FOLDER
from ..utils.logger import get_logger

router = APIRouter()
logger = get_logger()

# 简单的防抖控制
is_saving_yaml = False

@router.get("/api/load/{filename}", dependencies=[Depends(verify_auth)])
async def load_file_api(filename: str):
    if filename not in YAML_FILES:
        return {"error": "文件名错误"}

    file_path = YAML_FILES[filename]
    if not os.path.exists(file_path):
        return {"error": "文件不存在"}

    data_with_comments = load_yaml(file_path)
    return data_with_comments

@router.post("/api/save/{filename}", dependencies=[Depends(verify_auth)])
async def save_file_api(filename: str, request: Request):
    global is_saving_yaml
    if is_saving_yaml:
        return {"error": "操作过快！"}
    
    is_saving_yaml = True
    try:
        if filename not in YAML_FILES:
            return {"error": "文件名错误"}

        file_path = YAML_FILES[filename]
        if not os.path.exists(file_path):
            return {"error": "文件不存在"}

        data = await request.json()
        if not data:
            return {"error": "无效数据"}
        
        result = save_yaml(file_path, data)
        if result:
            return {"message": "文件保存成功"}
        else:
            return {"error": "文件保存失败"}
    finally:
        is_saving_yaml = False

@router.get("/api/files", dependencies=[Depends(verify_auth)])
async def list_files_api():
    return {"files": list(YAML_FILES.keys())}

@router.post("/api/search_yaml", dependencies=[Depends(verify_auth)])
async def search_yaml_keys_api(request: Request):
    data = await request.json()
    search_key = data.get("search")
    
    if not search_key:
        return {"error": "搜索键名不能为空"}
    
    try:
        result_list = search_yaml_content(search_key)
        return {"results": result_list}
    except Exception as e:
        logger.error(f"搜索YAML键名时出错: {str(e)}")
        return {"error": f"搜索时出错: {str(e)}"}

@router.get("/api/menu/load", dependencies=[Depends(verify_auth)])
async def menu_editor_api():
    if "基础配置.menu" not in YAML_FILES:
        return {"error": "菜单配置文件不存在"}
        
    file_path = YAML_FILES["基础配置.menu"]
    data_with_comments = load_yaml(file_path)
    # 返回 content 部分
    try:
        return data_with_comments["data"]["help_menu"]["content"]
    except KeyError:
        return {"error": "菜单配置结构错误"}

@router.post("/api/menu/update", dependencies=[Depends(verify_auth)])
async def update_menu_api(request: Request):
    try:
        content = await request.json()
        data = {"data": {"help_menu": {"content": content}}}
        if "基础配置.menu" not in YAML_FILES:
             return {"error": "菜单配置文件不存在"}
             
        file_path = YAML_FILES["基础配置.menu"]
        result = save_yaml(file_path, data)
        if result:
            return {"message": "菜单保存成功"}
        else:
            return {"error": "菜单保存失败"}
    except Exception as e:
        return {"error": str(e)}

@router.get("/api/tools/export_yaml", dependencies=[Depends(verify_auth)])
async def export_yaml_api():
    try:
        sys.path.append(ROOT_DIR)
        from tool import export_yaml as export_yaml_func
        
        export_yaml_func()
        
        timestamp = int(time.time())
        zip_filename = f"yaml_backups_{timestamp}.zip"
        # 确保 upload 目录存在
        os.makedirs(UPLOAD_FOLDER, exist_ok=True)
        zip_filepath = os.path.join(UPLOAD_FOLDER, zip_filename)
        
        # 压缩 old_yamls (tool.py 生成的目录，在 ROOT_DIR 下？需确认 tool.py 的工作目录)
        # tool.py 通常在 ROOT_DIR 下运行，所以 old_yamls 应该在 ROOT_DIR/old_yamls
        # 但是 server_new.py 是在 web 目录下运行的...
        # 让我们假设 export_yaml_func 在当前工作目录下生成 old_yamls
        
        source_dir = "old_yamls" # 假设在 CWD
        if not os.path.exists(source_dir):
             # 尝试在 ROOT_DIR 找
             source_dir = os.path.join(ROOT_DIR, "old_yamls")
        
        if not os.path.exists(source_dir):
             return {"error": "导出失败，未找到 old_yamls 目录"}

        with zipfile.ZipFile(zip_filepath, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(source_dir):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.join("old_yamls", os.path.relpath(file_path, source_dir))
                    zipf.write(file_path, arcname)
        
        # 删除生成的目录
        shutil.rmtree(source_dir)
        
        # 记录到数据库
        # 注意：这里引用了 chat_service 的 update_file_storage，需要正确导入
        from ..services.chat_service import update_file_storage
        await update_file_storage(zip_filename, zip_filename)
        
        return {"message": "导出成功", "file": zip_filename}
    except Exception as e:
        logger.error(f"导出失败: {e}")
        return {"error": str(e)}

@router.post("/api/tools/import_yaml", dependencies=[Depends(verify_auth)])
async def import_yaml_api(request: Request):
    try:
        data = await request.json()
        zip_filename = data.get("file")
        
        if not zip_filename:
            return {"error": "文件名不能为空"}
        
        zip_filepath = os.path.join(UPLOAD_FOLDER, zip_filename)
        if not os.path.exists(zip_filepath):
            return {"error": "文件不存在"}
        
        # 解压到 ROOT_DIR (因为 tool.py 在 ROOT_DIR)
        extract_path = ROOT_DIR
        
        with zipfile.ZipFile(zip_filepath, 'r') as zip_ref:
            namelist = zip_ref.namelist()
            logger.server(f"压缩包内文件和文件夹路径: {namelist}")
            root_items = {item.split('/')[0] for item in namelist if item.split('/')[0]}
            if len(root_items) == 1 and 'old_yamls' in root_items:
                zip_ref.extractall(extract_path)
            else:
                raise ValueError("压缩包目录有误")
        
        sys.path.append(ROOT_DIR)
        from tool import import_yaml as import_yaml_func
        
        # 切换工作目录到 ROOT_DIR 执行 import，然后再切回来？
        # tool.py 里的路径可能是相对的。
        cwd = os.getcwd()
        os.chdir(ROOT_DIR)
        try:
            import_yaml_func()
        finally:
            os.chdir(cwd)
        
        # 删除解压后的文件夹
        shutil.rmtree(os.path.join(ROOT_DIR, "old_yamls"), ignore_errors=True)
        
        return {"message": "导入成功"}
    except Exception as e:
        logger.error(f"导入失败: {e}")
        return {"error": str(e)}
