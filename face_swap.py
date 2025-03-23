from deepface import DeepFace

def swap_faces(source_path, target_path):
    result = DeepFace.swap_faces(source_path, target_path)
    output_path = "swapped_image.png"
    result.save(output_path)
    return output_path