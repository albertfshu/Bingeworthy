from models import (
    AccountIn,
    AccountOut,
    AccountOutWithPassword,
    DuplicateAccountError,
)
from .client import Queries
from pymongo.errors import DuplicateKeyError


class AccountQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"username": username})
        props["id"] = str(props["_id"])
        props["hashed_password"] = props["password"]
        return AccountOutWithPassword(**props)

    def create(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOutWithPassword:
        props = info.dict()
        props["password"] = hashed_password
        try:
            if self.collection.find_one({"username": props["username"]}):
                raise DuplicateAccountError()
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return AccountOut(**props)
