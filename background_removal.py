from rembg import remove

def remove_background(image_path):
    with open(image_path, "rb") as input_file:
        output = remove(input_file.read())
    output_path = "background_removed.png"
    with open(output_path, "wb") as output_file:
        output_file.write(output)
    return output_path