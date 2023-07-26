from fastapi import (
    Depends,
    # HTTPException,
    # status,
    # Response,
    APIRouter,
    # Request,
)
# from jwtdown_fastapi.authentication import Token
# from authenticator import authenticator
from queries.ratings import RatingQueries

from models import (
    RatingOut,
    RatingIn,
    # DuplicateAccountError,
)

router = APIRouter()


# @router.post("/api/movie/{movie_id}/rating", response_model=RatingOut)
# async def create_movie_rating(
#     movie_id: str,
#     user_id: str,
#     info: RatingIn,
#     queries: RatingQueries = Depends()
# ):
#     query = queries.create(info, page_id=("m" + movie_id), user_id=user_id)
#     return query


# @router.get("/api/movie/{movie_id}/rating")
# async def get_movie_rating(
#     movie_id: str,
#     queries: RatingQueries = Depends()
# ):
#     return queries.get_page_rating(page_id=("m" + movie_id))


# @router.put("/api/movie/{movie_id}/rating/{user_id}", response_model=RatingOut)
# async def update_movie_rating(
#     movie_id: str,
#     user_id: str,
#     info: RatingIn,
#     queries: RatingQueries = Depends()
# ):
#     return queries.update(info=info, page_id=("m" + movie_id), user_id=user_id)


# @router.post("/api/shows/{show_id}/rating", response_model=RatingOut)
# async def create_show_rating(
#     show_id: str,
#     user_id: str,
#     info: RatingIn,
#     queries: RatingQueries = Depends()
# ):
#     query = queries.create(info, page_id=("t" + show_id), user_id=user_id)
#     return query


# @router.get("/api/shows/{show_id}/rating")
# async def get_show_rating(
#     show_id: str,
#     queries: RatingQueries = Depends()
# ):
#     return queries.get_page_rating(page_id=("t" + show_id))


# @router.put("/api/show/{show_id}/rating/{user_id}", response_model=RatingOut)
# async def update_show_rating(
#     show_id: str,
#     user_id: str,
#     info: RatingIn,
#     queries: RatingQueries = Depends()
# ):
#     return queries.update(info=info, page_id=("t" + show_id), user_id=user_id)


# @router.get("/api/user/{user_id}/rating/")
# async def get_user_ratings(
#     user_id: str,
#     queries: RatingQueries = Depends()
# ):
#     return queries.get_user_ratings(user_id=user_id)

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
