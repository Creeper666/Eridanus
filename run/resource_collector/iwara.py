from developTools.event.events import GroupMessageEvent
from run.resource_collector.func_collection import iwara_search, iwara_tendency


def main(bot, config):
    @bot.on(GroupMessageEvent)
    async def search_image(event):
        if str(event.pure_text).startswith("iwara下载"):
            word = str(event.pure_text).replace("iwara下载", "")
            await iwara_search(bot, event, config, word, "download")
        elif str(event.pure_text).startswith("iwara搜"):
            word = str(event.pure_text).replace("iwara搜", "")
            await iwara_search(bot, event, config, word, "search")
        elif str(event.pure_text).startswith("iwara最新"):
            await iwara_tendency(bot, event, config, "newest")
        elif str(event.pure_text).startswith("iwara趋势"):
            await iwara_tendency(bot, event, config, "trending")
        elif str(event.pure_text).startswith("iwara热门"):
            await iwara_tendency(bot, event, config, "hotest")
        elif str(event.pure_text).startswith("iwara"):
            await bot.send(event, "无权限或指令无效")
