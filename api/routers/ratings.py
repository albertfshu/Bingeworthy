from fastapi import (
    Depends,
    APIRouter,
)
from queries.ratings import RatingQueries


from models import (
    RatingOut,
    RatingIn,
)


router = APIRouter()


@router.post("/api/rating/{page_id}", response_model=RatingOut)
async def create_rating(
    page_id: str,
    info: RatingIn,
    queries: RatingQueries = Depends()
):
    query = queries.create(info, page_id=page_id)
    return query


@router.get("/api/rating/{page_id}")
async def get_page_ratings(
    page_id: str,
    queries: RatingQueries = Depends()
):
    return queries.get_page_rating(page_id=page_id)


@router.put("/api/rating/{page_id}/{user_id}", response_model=RatingOut)
async def update_rating(
    page_id: str,
    user_id: str,
    info: RatingIn,
    queries: RatingQueries = Depends()
):
    return queries.update(info=info, page_id=page_id, user_id=user_id)


@router.get("/api/accounts/{user_id}/ratings")
async def get_user_ratings(
    user_id: str,
    queries: RatingQueries = Depends()
):
    return queries.get_user_ratings(user_id=user_id)
