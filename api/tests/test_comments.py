from fastapi.testclient import TestClient
from main import app
from queries.comments import CommentQueries
from models import Comments, CommentIn
import datetime

client = TestClient(app)


class FakeCommentQueries:

    def create(self, info: CommentIn, page_id: str) -> Comments:
        props = info.dict()
        props["page_id"] = page_id
        props["post_date"] = datetime.datetime.now()
        props["edit_date"] = props["post_date"]
        return Comments(**props)


def test_create_comment():
    app.dependency_overrides[CommentQueries] = FakeCommentQueries
    page_id = 1
    comment_in = CommentIn(commentor_id="testuser", comment="testcomment")
    res = client.post(f"/api/comments/{page_id}", json=comment_in.dict())
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "page_id": "1",
        "commentor_id":"testuser",
        "comment":"testcomment",
        "post_date":data["post_date"],
        "edit_date":data["edit_date"]
    }
