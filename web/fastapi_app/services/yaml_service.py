import os
import importlib.util
from io import StringIO
from ruamel.yaml import YAML, comments
from ruamel.yaml.scalarint import ScalarInt
from ruamel.yaml.scalarstring import DoubleQuotedScalarString, SingleQuotedScalarString
from ..config import RUN_DIR
from ..utils.logger import get_logger

logger = get_logger()
yaml = YAML()
yaml.preserve_quotes = True

def get_plugin_description(plugin_dir):
    init_file = os.path.join(plugin_dir, '__init__.py')
    if not os.path.exists(init_file):
        return None
    spec = importlib.util.spec_from_file_location("plugin_init", init_file)
    module = importlib.util.module_from_spec(spec)
    try:
        spec.loader.exec_module(module)
        return getattr(module, 'plugin_description', None)
    except Exception:
        return None

def build_yaml_file_map(run_dir):
    yaml_map = {}
    run_dir = os.path.abspath(run_dir)
    for root, _, files in os.walk(run_dir):
        for file in files:
            if not file.endswith('.yaml'):
                continue
            abs_path = os.path.join(root, file)
            rel_path = os.path.relpath(abs_path, run_dir).replace("\\", "/")
            parts = rel_path.split("/")
            if len(parts) < 2:
                continue
            plugin_dir = os.path.join(run_dir, parts[0])
            plugin_desc = get_plugin_description(plugin_dir)
            if not plugin_desc:
                continue
            filename = os.path.splitext(parts[-1])[0]
            key = f"{plugin_desc}.{filename}"
            yaml_map[key] = abs_path
    return yaml_map

YAML_FILES = build_yaml_file_map(RUN_DIR)

def merge_dicts(old, new):
    for k, v in old.items():
        if isinstance(v, dict) and k in new and isinstance(new[k], dict):
            merge_dicts(v, new[k])
        elif isinstance(v, list) and k in new and isinstance(new[k], list):
            new[k] = [item for item in v if v is not None]
        elif k in new and type(v) != type(new[k]):
            if isinstance(new[k], DoubleQuotedScalarString) or isinstance(new[k], SingleQuotedScalarString):
                v = str(v)
                new[k] = v
            elif isinstance(new[k], ScalarInt) or isinstance(v, ScalarInt):
                v = int(v)
                new[k] = v
            else:
                logger.warning(f"旧值: {v}, 新值: {new[k]} 直接覆盖")
                new[k] = v
        elif k in new:
            new[k] = v

def conflict_file_dealer(old_data: dict, file_new):
    try:
        old_data_yaml_str = StringIO()
        yaml.dump(old_data, old_data_yaml_str)
        old_data_yaml_str.seek(0)
        old_data = yaml.load(old_data_yaml_str)
        
        with open(file_new, 'r', encoding="utf-8") as file:
            new_data = yaml.load(file)
            
        merge_dicts(old_data, new_data)
        
        with open(file_new, 'w', encoding="utf-8") as file:
            yaml.dump(new_data, file)
        return True
    except Exception as e:
        logger.error(f"冲突文件处理失败: {e}")
        return False

def extract_comments(data, path="", comments_dict=None):
    if comments_dict is None:
        comments_dict = {}

    if isinstance(data, comments.CommentedMap):
        for key, value in data.items():
            new_path = f"{path}.{key}" if path else key
            if key in data.ca.items and data.ca.items[key][2]:
                comment = data.ca.items[key][2].value.strip("# \n")
                comments_dict[new_path] = comment
            extract_comments(value, new_path, comments_dict)

    elif isinstance(data, comments.CommentedSeq):
        for index, item in enumerate(data):
            new_path = f"{path}[{index}]"
            if data.ca.comment and data.ca.comment[0]:
                comments_dict[path] = data.ca.comment[0].value.strip("# \n")
            extract_comments(item, new_path, comments_dict)

    return comments_dict

def extract_key_order(data, path="", order_dict=None):
    if order_dict is None:
        order_dict = {}

    if isinstance(data, comments.CommentedMap):
        order_dict[path] = list(data.keys())
        for key, value in data.items():
            new_path = f"{path}.{key}" if path else key
            extract_key_order(value, new_path, order_dict)

    elif isinstance(data, comments.CommentedSeq):
        for index, item in enumerate(data):
            new_path = f"{path}[{index}]"
            extract_key_order(item, new_path, order_dict)

    return order_dict

def load_yaml_with_comments(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = yaml.load(f)
        order = extract_key_order(data)
        comments = extract_comments(data)
        return {"data": data, "comments": comments, "order": order}
    except Exception as e:
        return {"error": str(e)}

def load_yaml(file_path):
    """加载 YAML 文件并返回内容及注释"""
    try:
        return load_yaml_with_comments(file_path)
    except Exception as e:
        return {"error": str(e)}

def save_yaml(file_path, data):
    return conflict_file_dealer(data["data"], file_path)

def search_yaml_content(search_key):
    index_dict = {}
    for filename, file_path in YAML_FILES.items():
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                yaml_data = yaml.load(f)
            
            def search_in_dict(d, path=""):
                results = []
                for key, value in d.items():
                    current_path = f"{path}.{key}" if path else key
                    if isinstance(key, str) and search_key.lower() in key.lower():
                        results.append({
                            "file": filename,
                            "path": current_path,
                            "value": value
                        })
                    if isinstance(value, dict):
                        results.extend(search_in_dict(value, current_path))
                return results
            
            if isinstance(yaml_data, dict):
                matches = search_in_dict(yaml_data)
                if matches:
                    index_dict[filename] = matches
                    
        except Exception as e:
            logger.error(f"处理文件 {filename} 时出错: {str(e)}")
            continue
    
    result_list = []
    for filename, matches in index_dict.items():
        for match in matches:
            result_list.append({
                "file": filename,
                "path": match["path"],
                "value": match["value"]
            })
    return result_list
