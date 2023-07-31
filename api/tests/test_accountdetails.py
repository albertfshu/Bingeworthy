from fastapi.testclient import TestClient
from main import app
from models import AccountDetailsIn, AccountDetailsOut
from queries.accountdetails import AccountDetailsQueries
import datetime

client = TestClient(app)


class FakeAccountDetailsQueries:
    def create(self, info: AccountDetailsIn, id: str) -> AccountDetailsOut:
        props = info.dict()
        props["_id"] = id
        props["date"] = datetime.datetime.now()
        return props


def test_create_account_details():
    app.dependency_overrides[AccountDetailsQueries] = FakeAccountDetailsQueries
    test_id = "123"
    test_info = AccountDetailsIn(
        id=test_id,
        bio="test bio",
        profile_image="",
        date=datetime.datetime.now(),
    )
    res = client.post(f"/api/accounts/{test_id}", json=test_info.dict())
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "bio": "test bio",
        "profile_image": "",
        "date": data["date"],
    }
