import os
import pymongo


MONGO_URL = os.environ["MONGO_URL"]
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    def __init__(self, DB_NAME, COLLECTION):
        self.DB_NAME = DB_NAME
        self.COLLECTION = COLLECTION

    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
