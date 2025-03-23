from lama_cleaner import replace_object

def replace_object(image_path):
    output_path = "object_replaced.png"
    replace_object(image_path, output_path)
    return output_path