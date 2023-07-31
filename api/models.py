from pydantic import BaseModel
from typing import List
from datetime import datetime


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


class WatchlistOut(BaseModel):
    id: str
    account_id: str
    media_id: str


class Watchlist(BaseModel):
    watchlist: List[WatchlistOut]


class CommentIn(BaseModel):
    commentor_id: str
    comment: str


class Comments(BaseModel):
    page_id: str
    commentor_id: str
    comment: str
    post_date: datetime
    edit_date: datetime


class CommentList(BaseModel):
    comment_list: List[Comments]


class AccountDetailsOut(BaseModel):
    _id: str
    bio: str
    date: datetime
    profile_image: str


class AccountDetailsIn(BaseModel):
    _id: str
    bio: str
    profile_image: str


class RatingOut(BaseModel):
    page_id: str
    user_id: str
    value: int


class RatingIn(BaseModel):
    value: int
    user_id: str
