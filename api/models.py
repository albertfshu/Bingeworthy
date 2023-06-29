from pydantic import BaseModel
from typing import List
from jwtdown_fastapi.authentication import Token
from datetime import date, datetime

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


class CommentsIn(BaseModel):
    account_id: str
    comment: str
    date: datetime


class CommentsOut(BaseModel):
    account_id: str
    comment: str
    date: datetime


class AccountDetailsOut (BaseModel):
    _id: str
    bio: str
    date: datetime


class AccountDetailsIn(BaseModel):
    _id: str
    bio: str
    date: datetime
