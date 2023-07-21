import React from "react";
import { useGetAllWatchlistQuery } from "./store/watchlistSlice";

const Watchlist = () => {
    const { data, isLoading } = useGetAllWatchlistQuery();

    if (isLoading) return <div>Loading...</div>
    return (
        <div className="row mt-3">
            {data.map(movie => <MovieCard key={movie.id} title={movie.original_title} movie_id={movie.id} />)}
        </div>
    )
}

export default Watchlist;
