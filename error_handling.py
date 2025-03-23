from fastapi import HTTPException

def handle_error(error_message):
    raise HTTPException(status_code=500, detail=error_message)