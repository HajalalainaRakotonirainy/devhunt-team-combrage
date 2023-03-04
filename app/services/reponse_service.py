from typing import List
from uuid import UUID
from app.models.user_model import User
from app.models.reponse_model import Reponse
from app.schemas.reponse_schema import ReponseCreate, ReponseUpdate, ReponseOut

class ReponseService:
    @staticmethod
    async def list_reponses(user: User) -> ReponseOut:
        reponses = await Reponse.find(Reponse.owner.id == user.id).to_list()
        return reponses

    @staticmethod
    async def list_reponses_of_questions(user: User , question_id) -> List[Reponse] : 
        reponses = await Reponse.find(Reponse.question_id == question_id).to_list()
        return reponses
    
    @staticmethod
    async def create_reponse(user: User, data: ReponseCreate) -> Reponse:
        reponse = Reponse(**data.dict(), owner=user)
        return await reponse.insert()

    @staticmethod
    async def retrieve_reponse(current_user: User, reponse_id: UUID):
        reponse = await Reponse.find_one(Reponse.reponse_id == reponse_id, Reponse.owner.id == current_user.id)
        return reponse
    # recherche par titre
    @staticmethod
    async def retrieve_reponse_by_titre(current_user: User, titre: str) -> List[Reponse]:
        reponse = await Reponse.find({"$or" : [{Reponse.titre : {"$regex" : titre}}, {Reponse.description : {"$regex" : titre}}]}).to_list()
        return reponse

    @staticmethod
    async def update_reponse(current_user: User, reponse_id: UUID, data: ReponseUpdate):
        reponse = await ReponseService.retrieve_reponse(current_user, reponse_id)
        await reponse.update({"$set" : data.dict(exclude_unset=True)})

        await reponse.save()
        return reponse

    @staticmethod
    async def delete_reponse(current_user: User, reponse_id: UUID):
        reponse = await ReponseService.retrieve_reponse(current_user, reponse_id)
        if reponse:
            await reponse.delete()
        return None        