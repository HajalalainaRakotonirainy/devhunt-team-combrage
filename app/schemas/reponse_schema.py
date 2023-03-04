from datetime import datetime
# from typing import Optional
from uuid import UUID
from pydantic import BaseModel, Field
# from app.models.user_model import User

class ReponseCreate(BaseModel):
    description: str
    question_id : UUID
    user_id : UUID

class ReponseUpdate(BaseModel):
    description: str

class ReponseOut(BaseModel):
    reponse_id: UUID
    description: str
    created_at : datetime 
    updated_at : datetime 
    user_id : UUID
