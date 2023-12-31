from models import Comments, CommentList, CommentIn
from .client import Queries
from bson.objectid import ObjectId
import datetime


class CommentQueries(Queries):
    DB_NAME = "bingeworthy"
    COLLECTION = "comments"

    def get(self, comment_id: str) -> Comments:
        props = self.collection.find_one({"_id": ObjectId(comment_id)})
        return props

    def get_all(self, id: str) -> CommentList:
        props = self.collection.find({"page_id": id})
        page_comments = []
        for prop in props:
            prop["_id"] = str(prop["_id"])
            page_comments.append(prop)
        return page_comments

    def create(self, info: CommentIn, page_id: str) -> Comments:
        props = info.dict()
        props["page_id"] = page_id
        props["post_date"] = datetime.datetime.now()
        props["edit_date"] = props["post_date"]
        self.collection.insert_one(props)
        return Comments(**props)

    def update(self, info: CommentIn, id: str) -> Comments:
        props = info.dict()
        props["edit_date"] = datetime.datetime.now()
        self.collection.update_one({"_id": ObjectId(id)}, {"$set": props})
        details = self.collection.find_one({"_id": ObjectId(id)})
        return details

    def delete(self, id: str):
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count > 0
