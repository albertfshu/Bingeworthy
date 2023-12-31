from fastapi.testclient import TestClient
from main import app
from queries.watchlist import WatchlistQueries
from models import WatchlistIn
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": "1337", "username": "fakeuser"}


class FakeWatchlistQueries:
    def create(self, watchlist_in: WatchlistIn, account_id: str):
        return {
            "id": "watchlist_id",
            "account_id": account_id,
            "media_id": watchlist_in.media_id,
        }

    def list_all_for_account(self, account_id: str):
        return {
            "watchlist": [
                {
                    "id": "watchlist_id",
                    "account_id": account_id,
                    "media_id": "1",
                }
            ]
        }

    def delete(self, watchlist_id: str, account_id: str):
        return {"success": True}


def test_list_watchlist_for_account():
    app.dependency_overrides[WatchlistQueries] = FakeWatchlistQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    account_id = "fakeuser"
    res = client.get(f"/api/accounts/{account_id}/watchlist")
    data = res.json()

    assert res.status_code == 200
    assert "watchlist" in data
    assert data["watchlist"] == [
        {
            "id": "watchlist_id",
            "account_id": "fakeuser",
            "media_id": "1",
        }
    ]


def test_create_watchlist():
    app.dependency_overrides[WatchlistQueries] = FakeWatchlistQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    watchlist_in = WatchlistIn(media_id="1")

    res = client.post(
        "/api/accounts/{account_id}/watchlist", json=watchlist_in.dict()
    )
    data = res.json()

    assert res.status_code == 200
    assert data["account_id"] == "fakeuser"
    assert data["media_id"] == "1"


def test_delete_watchlist():
    app.dependency_overrides[WatchlistQueries] = FakeWatchlistQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    res = client.delete("/api/accounts/{account_id}/watchlist/{watchlist_id}")
    data = res.json()

    assert res.status_code == 200
    assert data == {"success": True}
