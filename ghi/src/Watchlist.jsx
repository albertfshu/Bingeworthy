import React from "react";
import { useGetUserWatchlistQuery } from "./store/watchlistSlice";
import TVDetails from "./WatchlistTVDetails";
import MovieDetails from "./WatchlistMovieDetails"

const Watchlist = () => {
  const { data: watchlistData, isLoading } = useGetUserWatchlistQuery();
  const watchlistItems = watchlistData?.watchlist || [];

  console.log(watchlistData)
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="mt-3">
      <h1 className="bold-font text-5xl text-center">Watchlist</h1>
      {watchlistItems.length === 0 &&
      <p className="text-center">
        Oh no! Your watchlist is empty.
        </p>}
      {watchlistItems.length > 0 && (
        <div className="flex flex-wrap justify-center">
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
