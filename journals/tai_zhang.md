## 6/26 - DAY 1 - Backend Authentication

We're working on the backend as a full group, we're currently having a blocker with creating an account as when it tries to log-in it tosses an unauthorized error. I'm wondering if this has to do with how we've saved the hashed-password but are just logging in with the plain text (though there does seem code to account for this).

Update: We finished it! The issue was how we passed back our data within AccountQueries get, rather than returning an AccountOutWithPassword (so that it'd contain the hashed_password) we returned the values of the find_one. We solved this by formatting this into the right property names and then casting it to AccountOutWithPassword.

## 6/27 - DAY 2 - MONGODB Prep

As we finished authentication early, we brushed up on mongodb and postgres content in preparation for later.

## 6/28 - DAY 3 - Backend Watchlist (CRUD)

We completed the watchlist backend based off of the favorites example and had a fairly easy time in doing so.

## 6/29 - DAY 4 - Backend Comments (CRUD)

We completed the comments backend based off of watchlist and a good number more tweaks. We ran into a few blockers such as not being able to iterate ObjectId but were fortunately able to solve through everything as a team.

## 6/30 - DAY 5 - Backend Ratings (CRUD)

Completed Ratings, utilized a prefix to the id's for separating movies and shows within the id's (m for movies, s for shows). Has create, update and get functions.
Explored the API throughly and figured out how to properly hit the 3rd party TMDB endpoints.

## 7/10 - DAY 6 - Reviewed new Redux

As we all struggled with understanding Redux, today was mostly spent on trying to figure it out.

## 7/11 - DAY 7 - Installed TailwindCSS

Installed TailwindCSS, tested on the base React page.

## 7/12 -DAY 8 - Attempting to Implement Redux & Start Frontend

Attempted to start implementing redux and creating our frontend, starting off with working out most of the redux. Yet to test or see it deployed as we've got a few holes in Redux to finish up.

## 7/13 - DAY 9 - Successfully got Redux to show on a frontend

Finished up the holes we had from the other day in Redux and successfully got our sign-up page to show up on the server.

## 7/14 - DAY 10 - Test cases written for accounts & search being fleshed out

Developing search function.

## 7/17 - DAY 11 - Begun setting up search, as well as fleshing out Movie

Created some movie search, details, etc for what we'll be needing. Setting up search to call to 3rd party api and exploring ways to add search parameters.

## 7/18 - DAY 12 - Fixed Tailwind installation, fleshed out TV search, details, cards, providers.

Tailwind wasn't installed correctly, so that was fixed. Added defaulting to popular when no search and then search results when there is a search input.

## 7/19 - DAY 13 - Added additional search functionality, started implementation Reviews

Search is now capable of searching by year as a criteria (specifically from that year due to api) and is now properly capable of showing multiple pages of results.
Reviews implementation has started through getting down the css & html for displaying the gotten list of comments for a page. Form set up for submission (yet to properly submit yet), buttons for delete and edit (requires implementaiton of these functions)

## 7/20 DAY 14 - Reviews & Stuff

Added reviews functionality for post and delete, but has a placeholder for edit which needs to be worked on still. Assisted with some profile fixes.

## 7/24 DAY 15 - Simplify and Stuff

Got account details functional and works as part of account creation. Added a path for search through the address for the nav search bar.

## 7/25 DAY 16 - Ratings, Reviews & Others

Started on ratings, fleshed out it's functionality, but didn't implement it yet. Seperated the account part of Nav for working profile icons. Fixed up filteredTVShows/filteredMovies for better consistency.

## 7/26 DAY 17 - Creating Unit Test, Adding Ratings & Others

Created comment test case for create. Added remove button to watchlist list of a user profile. Reviews/comment user icons are now functional. Implemented raints into detail pages. Adjusted all id's so movies have a "mID=" prefix and tvs have a "tID=" prefix.

## 7/27 DAY 18 - Finalizing Project & End to End testing

Re-added old grid style of search results for movie & tv list and simplifying popular movie & tv lists for smoother performance. Removed ratings sort by rating within table as it was unfortuantely inconsistent from it. Cleaned up most files for unused imports, prints, console.logs, etc.

## 7/28 DAY 19 - Last Day, Final Checks

Got the sign up page working. Finalized documentation and code clean up.
