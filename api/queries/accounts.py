from pydantic import BaseModel
from .client import Queries
from pymongo.errors import DuplicateKeyError

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


class AccountQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "accounts"
    def get(self, username: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"username":username})
        print(props)
        print("=======")
        props["id"] = str(props["_id"])
        props["hashed_password"] = props["password"]
        return AccountOutWithPassword(**props)
        # return self.collection.find_one({"username":username})

    def create(self, info:  AccountIn, hashed_password: str) -> AccountOutWithPassword:
        props = info.dict()
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return AccountOut(**props)
