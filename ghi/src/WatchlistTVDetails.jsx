import React from "react";
import { useGetTVDetailsQuery } from "./store/apiSlice";
import { Link } from "react-router-dom";
import { useRemoveFromWatchlistMutation } from "./store/watchlistSlice";
import { useGetAccountQuery } from "./store/accountSlice";

const TVDetails = (props) => {
    const { data, isLoading } = useGetTVDetailsQuery(props.media_id.substr(4));
    const [deleteFromWatchlist] = useRemoveFromWatchlistMutation();
    const { data: account, isLoading: accountLoading } = useGetAccountQuery();

    const handleRemoveFromWatchlist = () => {
        console.log("attempt to delete")
        deleteFromWatchlist({ account_id: account.account.id, watchlist_id: props.watchlist_id });

    };

    if (isLoading) return <span>Loading...</span>;
    return (
        <div className="w-full mx-auto bg-gray-800 rounded-md p-9 text-center">
            {props.account_id == account?.account.id && <button
                className="ml-auto hover:bg-red-600 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-1 my-1 ease-linear transition-all duration-150"

                onClick={handleRemoveFromWatchlist}
            >
                Remove
            </button>}
            <Link to={`/tv/${props.media_id.substr(4)}`}>
                <div className="">
                    <img
                        className="shadow-md h-80 mx-auto rounded-md"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={data.original_name}
                    />
                    <p className="sans-serif text-2xl my-auto inline">{data.original_name}</p>
                </div>
            </Link>
        </div>
    );
};

export default TVDetails;
