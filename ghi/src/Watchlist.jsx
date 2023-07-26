import React from "react";
import { useGetUserWatchlistQuery } from "./store/watchlistSlice";
import TVDetails from "./WatchlistTVcard";


const Watchlist = () => {
  const { data: watchlistData, isLoading } = useGetUserWatchlistQuery();
  const watchlistItems = watchlistData?.watchlist || [];


  if (isLoading) return <div>Loading...</div>;
  return (
        <div className="mt-3">
      <h1 className="text-center">Watchlist</h1>
      {watchlistItems.length === 0 && <p>Oh no! Your watchlist is empty.</p>}
      {watchlistItems.length > 0 && (
            <div className="w-60 mx-auto bg-gray-800 rounded-md p-4 text-center">
          {watchlistItems.map((watchlist) => (
            <div key={watchlist.id}>
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
