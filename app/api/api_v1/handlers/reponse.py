from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends
from app.models.reponse_model import Reponse
from app.models.user_model import User
from app.api.deps.user_deps import get_current_user
from app.schemas.reponse_schema import ReponseOut, ReponseCreate, ReponseUpdate
from app.services.reponse_service import ReponseService


reponse_router = APIRouter()

@reponse_router.get('/', summary="Get all Reponse of current_users ", response_model=List[Reponse])
async def list(current_user: User = Depends(get_current_user)):
    return await ReponseService.list_reponses(current_user)

# get all responses of questions
@reponse_router.get('/reponse/{question_id}', summary="Get all Reponse of questions ", response_model=List[ReponseOut])
async def list(question_id : UUID ,current_user: User = Depends(get_current_user)):
    return await ReponseService.list_reponses_of_questions(current_user, question_id)

@reponse_router.get('/search/{titre}', summary="Get all search reponses", response_model=List[ReponseOut])
async def list(titre: str, current_user: User = Depends(get_current_user)):
    return await ReponseService.retrieve_reponse_by_titre(current_user, titre)

@reponse_router.post('/create', summary="Create Reponse", response_model=Reponse)
async def create_reponse(data: ReponseCreate, current_user: User = Depends(get_current_user)):
    return await ReponseService.create_reponse(current_user, data)


@reponse_router.get('/{reponse_id}', summary="Get reponse by reponse_id", response_model=ReponseOut)
async def retrieve(question_id: UUID, current_user: User = Depends(get_current_user)):
    return await ReponseService.retrieve_reponse(current_user, question_id)


@reponse_router.put('/{reponse_id}', summary="Update reponse by reponse_id", response_model=ReponseOut)
async def update(reponse_id: UUID, data: ReponseUpdate, current_user: User= Depends(get_current_user)):
    return await ReponseService.update_reponse(current_user, reponse_id, data)


@reponse_router.delete('/{reponse_id}', summary="Delete reponse by reponse_id")
async def delete(reponse_id: UUID, current_user: User = Depends(get_current_user)):
    await ReponseService.delete_reponse(current_user, reponse_id)
    return None