## DAY 1 - 6.26.23 - Backend Authentication
We're working on the backend as a full group, we're currently having a blocker with creating an account as when it tries to log-in it tosses an unauthorized error. I'm wondering if this has to do with how we've saved the hashed-password but are just logging in with the plain text (though there does seem code to account for this).

FIXED : issue was resolved by passing our data back within AccountQueries get to have hashed_password as a property instead of just password which is where our function was sending out a 500 error.

## DAY 2 - 6.27.23 - MONGODB Prep
reviewed mongo and postgres for the future

## DAY 3 - 6.28.23 - Backend Watchlist (CRUD)

## DAY 4 - 6.29.23 - Backend Comments


## DAY 5 - 6.30.23 - Backend Ratings
split two variables movies and shows .
* create
* update
* get list
* specify user's ratings

## DAY 6 - 7.10.23 - Review Redux
individually reviewed redux to prepare for front end work

## DAY 7 - 7.11.23 - Review Redux
continued to individually review redux

## DAY 8 - 7.12.23

## DAY 9 - 7.13.23

## DAY 10 - 7.14.23
Unit tests written for accounts & comments
