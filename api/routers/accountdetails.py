from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.accountdetails import AccountDetailsQueries

from models import (
    AccountDetailsIn,
    AccountDetailsOut,
    DuplicateAccountError,
)


router = APIRouter()


@router.post("/api/accounts/{id}", response_model=AccountDetailsOut)
async def create_account_details(
    id: str,
    info: AccountDetailsIn,
    request: Request,
    response: Response,
    queries: AccountDetailsQueries = Depends(),
):
    try:
        query = queries.create(info, id)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create account details",
        )
    return query


@router.get("/api/accounts/{id}",  response_model=AccountDetailsOut)
async def get_account_details(
    id: str,
    queries: AccountDetailsQueries = Depends()
):
    return queries.get(id=id)


@router.put("/api/accounts/{id}",  response_model=AccountDetailsOut)
async def update_account_details(
    id: str,
    info: AccountDetailsIn,
    queries: AccountDetailsQueries = Depends()
):
    return queries.update(info, id=id)
