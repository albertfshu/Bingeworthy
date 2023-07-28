## Day 1 - 06/26/23
Completed Authentication for back-end with the entire group. We hit an obstacle when attempting to log in, where we would encounter an "unauthorized" error. We successfully resolved this issue by including an object with the hashed__password as a property name as the return data.

## Day 2 - 06/27/23
The authentication was completed so we decided to review content in preparation for completing CRUD

## Day 3 - 06/28/23
Completed three end-points for the router with authentication, which includes the following endpoints:
*listing the watchlist
*creating a new watchlist
*deleting a watchlist.

## Day 4 - 06/29/23
Completed three end-points for the router with authentication for the comments, which includes the following endpoints:
* create a comment
* delete a comment
* update a comment

Also began working on accountDetails back-end

## Day 5 - 06/30/23
Succesfully implemented Redux into our front-end! yay! Still going to have to go back and play around with TailwindCSS but I am excited to experiment with new features


## DAY 6 - 7.10.23 - Review Redux
We all individually reviewed redux lectures and explorations on learn, as we struggled to understand it given that it was the first time we were introduced to it and we wanted to start off the project strong

## DAY 7 - 7.11.23 - Review Redux
continued to individually review redux as the day before. We also installed tailwind css but we are unsure if we did it correctly due to not being able to test it out yet.. we need to get a front end page set up so we can try out what tailwind features we can use

## DAY 8 - 7.12.23
After reviewing redux lectures we were ready to take on (or at least try) to implement redux into our project.

## DAY 9 - 7.13.23
We officially got done with redux and were able to begin front-end work. I worked on adding a sign-up page to show on the front end, but still ran into roadblocks of implementing tailwindCSS so we stuck with React and css features to build out a good base before focusing on enhancing the UI.

## DAY 10 - 7.14.23
Rewatched the lecture and supplemented exploration on learn for unit tests and was able to complete the unit tests for the rating. Also, began working on the search functionality that we intend to use on the homepage.

## DAY 11 - 7.17.23
Began working on the Nav bar. Tried to follow a tailwind css template but the drop down user button wouldn't work. Had to go back in and add a generic drop-down menu. I had to adjust the navbar so that it wasnt available to a user who is not signed in, so I added logic for that.

## DAY 12 - 7.18.23
Fixed the Nav bar drop down menu and added links to their respective pages. We spent an embarrassing amount of time to fix tailwind but we realized it was just because it was only accepting .js pages, so we had to add .jsx extension. Began working on the watchlist and figuring out how to implement it correctly. Might have to fix the routers.

## DAY 13 - 7.19.23
Fixed the watchlist routers so they are assigned to a users ID value. They were directing to a generic watchlist page but we needed them to go to a specific users profile. Started working on the watchlist tv details/ watchlist movie details pages

## DAY 14 - 7.20.23
Worked on the watchlistSlice and watchlist button which will be implemented on both the TV details and Movie details page. Ran into a couple roadblocks with how the Movies and TV will both be rendered on the same page as their poster paths and names (original title for movie and original name for tv show) are different. I also implemented a direct link from sign in and sign up so users can navigate between them.

## DAY 15 - 7.24.23
Today I Included poster paths so that the images are displayed for both movies and TV shows in the Homepage. I did this by wrapping the images in a link that leads to their respective details page. I also learned how to use tailwindCSS by importing and implementing custom fonts in a CSS file. As a result I was able to customize some of the fonts we used in our page. I also worked on the overall layout for the movie and tv details page.

## DAY 16- 7.25.23
I completed the watchlist button today which handles deleting and adding both movies and TV shows to a watchlist. It was necessary to implement a watchlist button to the TV details and Movie details page.

## DAY 17 - 7.26.23

Today I continued working on creating the watchlist page to feature both TV shows and Movies. I faced a challenge where I was able to add tv shows and movies to the watchlist, but the watchlist wouldn't render the items in it. This happened because both TV shows and Movies were associated with the same media id when adding them, but since the TMDB API we are using has different paths for poster by media type, we had to implement a solution by adding Tid and Mid to associate if the media was a movie or tv show so the posters could render properly. After making these changes, the watchlist page now shows both the TV shows and Movies that are added by a user to their respective watchlist page.

## DAY 18 - 7.27.23
Started doing end-to-end testing with Tai. This was helpful to do because we realized the ratings average was not being calculated correctly. We also were able to catch a few things, such as add to watchlist button, that were available while not being logged in to an account. This can get confusing to a user so we went ahead and restricted off a couple features for only logged in users. We also noticed that you could create multiple accounts with the same username. I have been trying to figure out a way for that to be handled, but having trouble implementing anything that would fix this issue. Hopefully we can address it by tomorrow before the project is due.

## DAY 19 - 7.29.23 Last Day!!!
Ran through end-to-end testing one last time and also ran into an issue with CORS. Our back-end wasnt allowing us to make requests through the front-end, so we had to adjust the back-end for account queries. The front-end was expecting a username when making the account, while our back-end was expecting an _id which is what was causing the issues. By adjusting the account queries, and every instance of account ID into username, we were able to fix our problem so that we can sign up and sign in properly without encountering the CORS error.
