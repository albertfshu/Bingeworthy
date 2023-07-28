# APIs

## Account Details

- **Method**: `POST`, `GET`, `PUT`
- **Path**: `/api/accounts/{id}`

Input:

```json
{
  "_id": string,
  "bio": string,
  "profile_image": string,
}
```

Output:

```json
{
    "_id": string,
    "bio": string,
    "date": datetime,
    "profile_image": string,
}

```

Creating an account creates an account detail that saves an id, bio, and profile_image. This adds a new Account Detail to the database which can edited by the user who's \_id matches and is able to be read for profile display.

## Comments

- **Method**: `POST`, `GET`, `GET`, `PUT`, `DELETE`
- **Path**: `/api/comments/{page_id}`,`/api/comments/{page_id}/{comments_id}`

Input:

````json
{
    "commentor_id": string,
    "comment": string,
}

Output:

```json
{
    "page_id": string,
    "commentor_id": string,
    "comment": string,
    "post_date": datetime,
    "edit_date": datetime,
}

````

Creating a Comment saves a page_id, commentor_id, and a comment. This adds a new Comment to the database which can edited or deleted by the user who's \_id matches. As well as being able to be read on media detail pages / user pages for display.

## Ratings

- **Method**:`POST`,`GET`,`PUT`,`GET`
- **Path**: `/api/rating/{page_id}`,`/api/rating/{page_id}/{user_id}`

Input:

````json
{
    "value": integer,
    "user_id": string,
}

Output:

```json
{
    "page_id": string,
    "user_id": string,
    "value": integer,
}

````

Creating a Rating saves a value, user_id, and page_id. This adds a new Rating to the database which can be edited by the user who's user_id matches. This is able to be read and updated on media detail pages and read on the rating list page.

## Watchlist

- **Method**:`GET`,`POST`,`DELETE`
- **Path**: `/api/accounts/{account_id}/watchlist`,`/api/accounts/{account_id}/watchlist/{watchlist_id}`

Input:

````json
{
    "media_id": string,
}

Output:

```json
{
    "id": string,
    "account_id": string,
    "media_id": string,
}

````

Creating a Watchlist saves a media_id and user_id. This adds a new Watchlist to the database which can be deleted by the user who's user_id matches. This is able to be read and deleted on the media detail pages and read on the watchlist list page.
