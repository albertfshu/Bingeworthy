from models import AccountIn, AccountOut, AccountOutWithPassword, DuplicateAccountError
# from pydantic import BaseModel
from .client import Queries
from pymongo.errors import DuplicateKeyError


class AccountQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"_id": username})
        props["id"] = str(props["_id"])
        props["hashed_password"] = props["password"]
        return AccountOutWithPassword(**props)
        # return self.collection.find_one({"username":username})

    def create(self, info:  AccountIn, hashed_password: str) -> AccountOutWithPassword:
        props = info.dict()
        props["_id"] = str(props["username"])
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()

        return AccountOut(**props)
