import os
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from .config import DIST_DIR
from .routers import auth, files, chat, users, system, websocket
from .utils.logger import get_logger

logger = get_logger()

app = FastAPI(title="Eridanus WebUI", docs_url="/api/docs", openapi_url="/api/openapi.json")

# CORS 配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有来源，或者配置特定域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(auth.router)
app.include_router(files.router)
app.include_router(chat.router)
app.include_router(users.router)
app.include_router(system.router)
app.include_router(websocket.router)

# 404 处理 (SPA 支持)
@app.exception_handler(404)
async def custom_404_handler(request: Request, exc):
    # 如果是 API 请求，返回 JSON 404
    if request.url.path.startswith("/api"):
        return JSONResponse({"error": "Not Found"}, status_code=404)
    
    # 否则返回 index.html (SPA 路由)
    index_path = os.path.join(DIST_DIR, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    else:
        return JSONResponse({"error": "Frontend not found"}, status_code=404)

# 挂载静态文件
# 注意：这必须放在最后，以免覆盖 API 路由
if os.path.exists(DIST_DIR):
    app.mount("/", StaticFiles(directory=DIST_DIR, html=True), name="static")
else:
    logger.warning(f"静态文件目录不存在: {DIST_DIR}")

@app.on_event("startup")
async def startup_event():
    from .services.chat_service import init_db
    await init_db()
    logger.info("Eridanus WebUI Backend Started")
