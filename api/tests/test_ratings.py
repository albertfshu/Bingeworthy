from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries

client = TestClient(app)


class FakeAccountQueries:
    def get_all(self):
        return [
            {
                "username": "test",
            }
        ]

    def get_one_by_name(self):
        return {
            "username": "test",
        }

    def test_get_all_accounts():
        app.dependency_overrides[AccountQueries] = FakeAccountQueries

        res = client.get("/api/accounts")
        data = res.json()

        assert res.status_code == 200
        assert data == {
            "accounts": [
                {
                    "username": "test",
                }
            ]
        }

    def get_account_by_username():
        app.dependency_overrides[AccountQueries] = FakeAccountQueries

        res = client.get("/api/accounts/test-accounts")
        data = res.json()

        assert res.status_code == 200
        assert data == {
            "username": "test",
        }
