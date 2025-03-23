import os

def save_uploaded_file(file, save_path):
    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)