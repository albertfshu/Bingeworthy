from pydantic import BaseModel
from typing import List
from jwtdown_fastapi.authentication import Token

class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    username: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class WatchlistIn(BaseModel):
    media_id: str
    name: str

class WatchlistOut(BaseModel):
    id: str
    account_id: str
    media_id: str
    name: str

class Watchlist(BaseModel):
    watchlist: List[WatchlistOut]
