import React from "react";
import { useGetUserWatchlistQuery, useRemoveFromWatchlistMutation } from "./store/watchlistSlice";
import TVDetails from "./WatchlistTVDetails";
import MovieDetails from "./WatchlistMovieDetails"
import { useParams } from "react-router-dom"

const Watchlist = () => {
  const { userId } = useParams();
  const [deleteFromWatchlist] = useRemoveFromWatchlistMutation();
  const { data: watchlistData, isLoading } = useGetUserWatchlistQuery(userId);
  const watchlistItems = watchlistData?.watchlist || [];

  console.log(userId)
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="mt-8">
      <h1 className="bold-font text-5xl text-center">{userId}'s Watchlist</h1>
      {watchlistItems.length === 0 &&
        <p className="text-center">
          Oh no! Your watchlist is empty.
        </p>}
      {watchlistItems.length > 0 && (
        <div className="w-1/2 min-w-fit mx-auto bg-gray-800 rounded-md p-4 text-center">

          {watchlistItems.map((watchlist) => (
            (watchlist.media_id.substr(0, 4) == "mID=") ?
              <div
                key={watchlist.id}
              >
                <MovieDetails
                  title={watchlist.original_title}
                  media_id={watchlist.media_id}
                />
              </div>
              : <div key={watchlist.id}>
                <TVDetails
                  title={watchlist.original_title}
                  media_id={watchlist.media_id}
                />
              </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
