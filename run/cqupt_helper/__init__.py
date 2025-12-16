plugin_description="重邮助手"


dynamic_imports ={
    "run.cqupt_helper.func_collection": ["random_ninjutsu","query_ninjutsu"],
}
function_declarations=[
    {
        "name": "query_course",
        "description": "根据学号，查询自己的课程表",
        "parameters": {
            "type": "object",
            "properties": {
                "stu_id": {
                    "type": "integer",
                    "description": "学生学号"
                },
            },
            "required": [
                "stu_id"
            ]
        }
    }
]