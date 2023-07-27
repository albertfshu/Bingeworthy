import React from "react";
import { useGetUserWatchlistQuery, useRemoveFromWatchlistMutation } from "./store/watchlistSlice";
import TVDetails from "./WatchlistTVDetails";
import MovieDetails from "./WatchlistMovieDetails";
import { useParams } from "react-router-dom";

const Watchlist = () => {
  const { userId } = useParams();
  const { data: watchlistData, isLoading } = useGetUserWatchlistQuery(userId);
  const watchlistItems = watchlistData?.watchlist || [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-8">
      <h1 className="watchlist-heading bold-font">{userId}'s Watchlist</h1>
      {watchlistItems.length === 0 && (
        <p className="text-center bold-font">
          Oh no! Your watchlist is empty.
        </p>
      )}
      {watchlistItems.length > 0 && (
        <div className="overflow-x-auto whitespace-nowrap">
          {watchlistItems.map((watchlist) => (
            <div key={watchlist.id} className="inline-block mr-4">
              {watchlist.media_id.substr(0, 4) === "mID=" ? (
                <MovieDetails
                  title={watchlist.original_title}
                  media_id={watchlist.media_id}
                  account_id={userId}
                  watchlist_id={watchlist.id}
                />
              ) : (
                <TVDetails
                  title={watchlist.original_title}
                  media_id={watchlist.media_id}
                  account_id={userId}
                  watchlist_id={watchlist.id}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
