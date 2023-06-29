## DAY 1 - Backend Authentication
We're working on the backend as a full group, we're currently having a blocker with creating an account as when it tries to log-in it tosses an unauthorized error. I'm wondering if this has to do with how we've saved the hashed-password but are just logging in with the plain text (though there does seem code to account for this).

FIXED : issue was resolved by passing our data back within AccountQueries get to have hashed_password as a property instead of just password which is where our function was sending out a 500 error.

## DAY 2 - MONGODB Prep
reviewed mongo and postgres for the future

## DAY 3 - Backend Watchlist (CRUD)