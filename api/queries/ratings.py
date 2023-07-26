from models import RatingIn, RatingOut
from .client import Queries


class RatingQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "ratings"

    # def get(self, page_id: str, user_id: str) -> RatingOut:
    #     return self.collection.find_one({"page_id": page_id,"user_id": user_id})

    def get_page_rating(self, page_id: str):
        page_ratings = list(self.collection.find({"page_id": page_id}))
        for rating in page_ratings:
            rating["_id"] = str(rating["_id"])
        return page_ratings

    def get_user_ratings(self, user_id: str):
        user_ratings = list(self.collection.find({"user_id": user_id}))
        for rating in user_ratings:
            rating["_id"] = str(rating["_id"])
        return user_ratings

    def create(self, info: RatingIn, page_id: str) -> RatingOut:
        props = info.dict()
        props["page_id"] = page_id
        self.collection.insert_one(props)
        return RatingOut(**props)

    def update(self, info: RatingIn, page_id: str, user_id: str) -> RatingOut:
        props = info.dict()
        # props["page_id"] = page_id
        # props["user_id"] = user_id
        self.collection.update_one({"page_id": page_id, "user_id": user_id}, {"$set": props})
        details = self.collection.find_one({"page_id": page_id, "user_id": user_id})
        return details
