# Data models

---

## Watchlist

| name       | type   | unique | optional |
| ---------- | ------ | ------ | -------- |
| \_id       | string | yes    | no       |
| account_id | string | no     | no       |
| media_id   | string | no     | no       |

## Comment

| name         | type   | unique | optional |
| ------------ | ------ | ------ | -------- |
| \_id         | string | yes    | no       |
| commentor_id | string | no     | no       |
| comment      | string | no     | no       |
| post_date    | string | no     | no       |
| edit_date    | string | no     | no       |

## Rating

| name    | type   | unique | optional |
| ------- | ------ | ------ | -------- |
| \_id    | string | yes    | no       |
| page_id | string | no     | no       |
| user_id | string | no     | no       |
| value   | string | no     | no       |

## Account Detail

| name          | type   | unique | optional |
| ------------- | ------ | ------ | -------- |
| \_id          | string | yes    | no       |
| bio           | string | no     | no       |
| date          | string | no     | no       |
| profile_image | string | no     | no       |

## Account

| name      | type   | unique | optional |
| --------- | ------ | ------ | -------- |
| \_id      | string | yes    | no       |
| full_name | string | no     | no       |
| password  | string | no     | no       |
