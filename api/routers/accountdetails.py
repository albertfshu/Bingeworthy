from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from queries.accountdetails import AccountDetailsQueries

from models import (
    AccountDetailsIn,
    AccountDetailsOut,
    DuplicateAccountError,
)

router = APIRouter()

@router.post("/api/accounts/{username}", response_model=AccountDetailsOut)
async def create_account_details(
    username: str,
    info: AccountDetailsIn,
    request: Request,
    response: Response,
    accounts: AccountDetailsQueries = Depends(),
):
    try:
        account = accounts.create(info, username)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create account details",
        )
    return AccountDetailsIn(account=account, **info.dict())





# ## Update account details
# @router.post("/api/accounts/{username}", response_model=AccountDetailsOut)
# async def update_account_details(
#     username: str,
#     info: AccountDetailsIn,
#     request: Request,
#     response: Response,
#     accounts: AccountDetailsQueries = Depends(),
# ):
#     try:
#         account = accounts.update(info, username) ## add update method in AccountDetailQueries
#     except DuplicateAccountError:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="Cannot update account details",
#         )
    # return AccountDetailsIn(account=account, **info.dict())
