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
Unit tests written for accounts & comments -- needs more work

## DAY 11 - 7.17.23
worked on unit tests and worked on parsing the 3rd party api to the search results on the movie list

## DAY 12 - 7.18.23
finished login and signup css to match figma
added search bar to nav - not connected to search results


## DAY 13 - 7.19.23
tested how to connect the search bar in the nav to reflect the search bar in the home.jsx page

## DAY 14 - 7.20.23
reviewed how to do infinite loops for movie and tv show galleries

## DAY 15 - 7.21.23
DAY OFF

## DAY 16 - 7.24.23
first adaptation of the movie gallery loop as well as front end for search bar issues in nav for home page troubleshooting

## DAY 17 - 7.25.23
home page beautification , front end for tvshow portion on home page worked on

## DAY 18 - 7.26.23
alphabetized drop down for language
fixed search button in nav
actually got the infinite loops working on the shows and movies
fixed the scrolling buttons on the galleries to function properly

## DAY 19 - 7.27.23
front end for top 20 page + css was fixed
unit test done for account detail

## DAY 20 - FINISHED!!
end to end testing
issue with CORS backend wasn't allowing front end to make requests. Adjusted backend for queries , front end wanted username when creating account -- backend wanted _id. problem was fixed!
