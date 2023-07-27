from models import AccountDetailsIn, AccountDetailsOut, DuplicateAccountError
from .client import Queries
from datetime import datetime
from pymongo.errors import DuplicateKeyError


class AccountDetailsQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "account_details"

    def get(self, id: str) -> AccountDetailsOut:
        props = self.collection.find_one({"_id": id})
        return AccountDetailsOut(**props)

    def create(self, info: AccountDetailsIn, id: str) -> AccountDetailsOut:
        props = info.dict()
        props["_id"] = id
        props["date"] = datetime.now()
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        return AccountDetailsOut(**props)

    def update(self, info: AccountDetailsIn, id: str) -> AccountDetailsOut:
        self.collection.update_one({"_id": id}, {"$set": info.dict()})
        details = self.collection.find_one({"_id": id})
        return details
