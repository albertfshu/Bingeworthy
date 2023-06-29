from models import AccountDetailsIn, AccountDetailsOut, DuplicateAccountError
from pydantic import BaseModel
from .client import Queries
from pymongo.errors import DuplicateKeyError
import datetime


class AccountDetailsQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "account_details"

    def get(self, id: str) -> AccountDetailsOut:
        props = self.collection.find_one({"_id": id})
        props["id"] = str(props["_id"])
        props["date"] = datetime.date(props["date"])
        return AccountDetailsOut(**props)

    def create(self, info: AccountDetailsIn, id: str) -> AccountDetailsOut:
        props = info.dict()
        props["_id"] = id
        props["date"] = datetime.date(props["date"])
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return AccountDetailsOut(**props)
