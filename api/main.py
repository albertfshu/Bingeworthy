from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import accounts, watchlist, accountdetails, comments, ratings


app = FastAPI()

app.include_router(authenticator.router, tags=['Accounts'])
app.include_router(accounts.router, tags=['Accounts'])
app.include_router(watchlist.router, tags=['Watchlist'])
app.include_router(accountdetails.router, tags=["Account_Details"])
app.include_router(comments.router, tags=["Comments"])
app.include_router(ratings.router, tags=["Ratings"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }

@app.get("/")
def home():
    return True
