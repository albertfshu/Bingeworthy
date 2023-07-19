from fastapi import (
    Depends,
    HTTPException,
    status,
    APIRouter,
)
# from jwtdown_fastapi.authentication import Token
# from authenticator import authenticator
from queries.comments import CommentQueries

from models import (
    Comments,
    CommentIn,
    # CommentList,
    DuplicateAccountError,
)

router = APIRouter()


@router.post("/api/comments/{page_id}", response_model=Comments)
async def create_comment(
    id: str,
    info: CommentIn,
    queries: CommentQueries = Depends(),
):
    try:
        query = queries.create(info, page_id=id)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create account details",
        )
    return query


@router.get("/api/comments/{page_id}")
async def get_page_comments(
  id: str,
  queries: CommentQueries = Depends(),
):
    return {"comments": queries.get_all(id)}


@router.get("/api/comments/{page_id}/{comment_id}", response_model=Comments)
async def get_comment(
    id: str,
    comment_id: str,
    queries: CommentQueries = Depends()
):
    return queries.get(id, comment_id)


@router.put('/api/comments/{page_id}/{comment_id}', response_model=Comments)
async def update_comment(
    id: str,
    info: CommentIn,
    comment_id: str,
    queries: CommentQueries = Depends(),
):
    try:
        query = queries.update(info, id=comment_id)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot update comment details",
        )
    return query


@router.delete('/api/comments/{page_id}/{comment_id}')
async def delete_comment(
    comment_id: str,
    queries: CommentQueries = Depends()
):
    return queries.delete(comment_id)
