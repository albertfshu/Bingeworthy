from models import AccountDetailsIn, AccountDetailsOut, DuplicateAccountError
from pydantic import BaseModel
from .client import Queries
from pymongo.errors import DuplicateKeyError
import datetime


class AccountDetailsQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "account_details"

    def get(self, id: str) -> AccountDetailsOut:
        props = self.collection.find_one({"id": id})
        return AccountDetailsOut(**props)

    def create(self, info: AccountDetailsIn, id: str) -> AccountDetailsOut:
        props = info.dict()
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        return AccountDetailsOut(**props)
