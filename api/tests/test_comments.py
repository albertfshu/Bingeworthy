from fastapi.testclient import TestClient
from main import app
from queries.comments import CommentQueries

client = TestClient(app)


class FakeCommentQueries:
    def get_all(self):
        return [
            {
                "comment": "test",
            }
        ]

    def get_one_by_name(self):
        return {
            "comment": "test",
        }

    def test_get_all_accounts():
        app.dependency_overrides[CommentQueries] = FakeCommentQueries

        res = client.get("/api/comments")
        data = res.json()

        assert res.status_code == 200
        assert data == {
            "username": [
                {
                    "username": "test",
                    "comment": "test",
                    "comment_id": 1
                }
            ]
        }

    def get_account_by_username():
        app.dependency_overrides[CommentQueries] = FakeCommentQueries

        res = client.get("/api/comments/test-comments")
        data = res.json()

        assert res.status_code == 200
        assert data == {
            "comments": "test",
        }
