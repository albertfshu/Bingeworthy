from models import WatchlistIn
from bson.objectid import ObjectId
from .client import Queries


class WatchlistQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "watchlist"

    def create(self, watchlist_in: WatchlistIn, account_id: str):
        watchlist = watchlist_in.dict()
        watchlist["account_id"] = account_id
        self.collection.insert_one(watchlist)
        watchlist["id"] = str(watchlist["_id"])
        return watchlist

    def list_all_for_account(self, account_id: str):
        results = []
        for watchlist in self.collection.find({"account_id": account_id}):
            watchlist["id"] = str(watchlist["_id"])
            results.append(watchlist)
        return {"watchlist": results}

    def delete(self, watchlist_id: str, account_id: str):
        result = self.collection.delete_one(
            {"_id": ObjectId(watchlist_id), "account_id": account_id}
        )
        return result.deleted_count > 0
