from fastapi.testclient import TestClient
from main import app
from queries.ratings import RatingQueries
from models import RatingIn, RatingOut

client = TestClient(app)


class FakeRatingQueries:
    def create(self, info: RatingIn, page_id: str) -> RatingOut:
        props = info.dict()
        props["page_id"] = page_id
        return RatingOut(**props)


def test_create_rating():
    app.dependency_overrides[RatingQueries] = FakeRatingQueries
    page_id = 1
    rating_in = RatingIn(value=4, user_id="1337")
    res = client.post(f"/api/rating/{page_id}", json=rating_in.dict())
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "page_id": "1",
        "user_id": "1337",
        "value": 4,
    }
