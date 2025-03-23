from realesrgan import RealESRGANer

def upscale_image(image_path):
    upscaler = RealESRGANer(model_path="RealESRGAN_x4plus.pth")
    output_path = "upscaled_image.png"
    upscaler.enhance(image_path, output_path)
    return output_path