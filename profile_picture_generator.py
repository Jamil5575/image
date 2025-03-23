from stylegan2 import generate_profile_picture

def generate_profile_picture(image_path):
    output_path = "profile_picture.png"
    generate_profile_picture(image_path, output_path)
    return output_path