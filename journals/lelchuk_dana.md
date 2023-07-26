## Day 1 - 06/26/23
Completed Authentication for back-end with the entire group. We hit an obstacle when attempting to log in, where we would encounter an "unauthorized" error. We successfully resolved this issue by including an object with the hashed__password as a property name as the return data.

## Day 2 - 06/27/23
Reviewed content in preparation for completing CRUD

## Day 3 - 06/28/23
Completed three end-points for the router with authentication, which includes the following endpoints:
*listing the watchlist
*creating a new watchlist
*deleting a watchlist.

## Day 4 - 06/28/23


## Day 5 - 06/28/23
Succesfully implemented Redux into our front-end! yay! Still going to have to go back and play around with TailwindCSS but I am excited to experiment with new features


## DAY 6 - 7.10.23 - Review Redux

## DAY 7 - 7.11.23 - Review Redux
continued to individually review redux

## DAY 8 - 7.12.23

## DAY 9 - 7.13.23

## DAY 10 - 7.14.23
Unit tests written for accounts

## DAY 11 - 7.17.23

## DAY idk - 7.19.23
Fixed the watchlist routers so they are assigned to a users ID value.

## DAY idk - 7.20.23
Worked on the watchlist button

## DAY idk - 7.24.23
Today I Included poster paths so that the images are displayed for both movies and TV shows in the Homepage. I did this by wrapping the images in a link that leads to their respective details page. I also learned how to use tailwindCSS by importing and implementing custom fonts in a CSS file. As a result I was able to customize some of the fonts we used in our page.

## DAY idk - 7.25.23
I completed the watchlist button today which handles deleting and adding both movies and TV shows to a watchlist. It was necessary to implement a watchlist button to the TV details and Movie details page.

## DAY idk - 7.26.23

Today I continued working on creating the watchlist page to feature both TV shows and Movies. I faced a challenge where I was able to add tv shows and movies to the watchlist, but the watchlist wouldn't render the items in it. This happened because both TV shows and Movies were associated with the same media id when adding them, but since the TMDB API we are using has different paths for poster by media type, we had to implement a solution by adding Tid and Mid to associate if the media was a movie or tv show so the posters could render properly. After making these changes, the watchlist page now shows both the TV shows and Movies that are added by a user to their respective watchlist page.
