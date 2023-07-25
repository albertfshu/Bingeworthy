import React from "react";
import { useGetUserWatchlistQuery } from "./store/watchlistSlice";
import MovieCard from "./Moviecard";
import { useParams } from "react-router-dom";
const Watchlist = () => {
    const { account_id } = useParams
    const { data, isLoading } = useGetUserWatchlistQuery(account_id);

    if (isLoading) return <div>Loading...</div>

    console.log(data)
    return (
        <div className="pt-3">
            {data.watchlist.map(movie => <MovieCard key={movie.id} title={"placeholder"} movie_id={"placeholder"} />)}
        </div>
    )
}

export default Watchlist;
