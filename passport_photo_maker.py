from PIL import Image

def create_passport_photo(image_path):
    image = Image.open(image_path)
    image = image.resize((300, 300))  # Resize to passport photo dimensions
    output_path = "passport_photo.png"
    image.save(output_path)
    return output_path