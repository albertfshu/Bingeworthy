import React from "react";
import { Link } from "react-router-dom";
import { useGetMovieDetailsQuery } from "./store/apiSlice";
import { useRemoveFromWatchlistMutation } from "./store/watchlistSlice";
import { useGetAccountQuery } from "./store/accountSlice";

const MovieDetails = (props) => {
    const { data, isLoading } = useGetMovieDetailsQuery(props.media_id.substr(4));
    const [deleteFromWatchlist] = useRemoveFromWatchlistMutation();
    const { data: account, isLoading: accountLoading } = useGetAccountQuery();

    const handleRemoveFromWatchlist = () => {
        deleteFromWatchlist({ account_id: account.account.username, watchlist_id: props.watchlist_id });

    };
    if (isLoading || accountLoading) return <span>Loading...</span>;
    return (

        <div className="w-full mx-auto bg-gray-800 rounded-md p-9 text-center">
            {props.account_id === account?.account.username && <button
                className="hover:bg-red-800 ml-auto bg-cyan-500 text-white active:bg-black-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-1 my-1 ease-linear transition-all duration-150"

                onClick={handleRemoveFromWatchlist}
            >
                Remove
            </button>}
            <Link to={`/movie/${props.media_id.substr(4)}`}>
                <div className="">
                    <img
                        className="shadow-md h-80 mx-auto rounded-md"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={data.original_title}
                    />
                    <p className="sans-serif text-2xl my-auto inline">{data.original_title}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieDetails;
