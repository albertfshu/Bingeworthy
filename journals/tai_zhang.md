## DAY 1 - Backend Authentication
We're working on the backend as a full group, we're currently having a blocker with creating an account as when it tries to log-in it tosses an unauthorized error. I'm wondering if this has to do with how we've saved the hashed-password but are just logging in with the plain text (though there does seem code to account for this).

Update: We finished it! The issue was how we passed back our data within AccountQueries get, rather than returning an AccountOutWithPassword (so that it'd contain the hashed_password) we returned the values of the find_one. We solved this by formatting this into the right property names and then casting it to AccountOutWithPassword.

## DAY 2 - MONGODB Prep
As we finished authentication early, we brushed up on mongodb and postgres content in preparation for later.

## DAY 3 - Backend Watchlist (CRUD)
