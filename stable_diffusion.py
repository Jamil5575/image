from diffusers import StableDiffusionPipeline
import torch

def generate_image(prompt, style):
    pipe = StableDiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-2-1")
    pipe = pipe.to("cuda")
    image = pipe(prompt).images[0]
    output_path = "generated_image.png"
    image.save(output_path)
    return output_path