## DAY 1 - Backend Authentication

We're working on the backend as a full group, we're currently having a blocker with creating an account as when it tries to log-in it tosses an unauthorized error. I'm wondering if this has to do with how we've saved the hashed-password but are just logging in with the plain text (though there does seem code to account for this).

Update: We finished it! The issue was how we passed back our data within AccountQueries get, rather than returning an AccountOutWithPassword (so that it'd contain the hashed_password) we returned the values of the find_one. We solved this by formatting this into the right property names and then casting it to AccountOutWithPassword.

## DAY 2 - MONGODB Prep

As we finished authentication early, we brushed up on mongodb and postgres content in preparation for later.

## DAY 3 - Backend Watchlist (CRUD)

We completed the watchlist backend based off of the favorites example and had a fairly easy time in doing so.

## DAY 4 - Backend Comments (CRUD)

We completed the comments backend based off of watchlist and a good number more tweaks. We ran into a few blockers such as not being able to iterate ObjectId but were fortunately able to solve through everything as a team.

## DAY 5 - Backend Ratings (CRUD)

Completed Ratings, utilized a prefix to the id's for separating movies and shows within the id's (m for movies, s for shows). Has create, update and get functions.
Explored the API throughly and figured out how to properly hit the 3rd party TMDB endpoints.

## DAY 6 - Reviewed new Redux

As we all struggled with understanding Redux, today was mostly spent on trying to figure it out.

## DAY 7 - Installed TailwindCSS

Installed TailwindCSS, tested on the base React page.

## DAY 8 - Attempting to Implement Redux & Start Frontend

Attempted to start implementing redux and creating our frontend, starting off with working out most of the redux. Yet to test or see it deployed as we've got a few holes in Redux to finish up.

## DAY 9 - Successfully got Redux to show on a frontend

Finished up the holes we had from the other day in Redux and successfully got our sign-up page to show up on the server.

## DAY 10 - Test cases written for accounts & search being fleshed out

## DAY 11 - Begun setting up search, as well as fleshing out Movie

## DAY 12 - Fixed Tailwind installation, fleshed out TV search, details, cards, providers.

## DAY 13 - Added additional search functionality, started implementation Reviews

Search is now capable of searching by year as a criteria (specifically from that year due to api) and is now properly capable of showing multiple pages of results.
Reviews implementation has started through getting down the css & html for displaying the gotten list of comments for a page. Form set up for submission (yet to properly submit yet), buttons for delete and edit (requires implementaiton of these functions)

## DAY 14 - uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh idrm

## DAY 15 -

## DAY 16 -

## DAY 17 -

## DAY 18 -
