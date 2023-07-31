import { useEffect, useState } from 'react';
import {
    useGetUserWatchlistQuery,
    useAddToWatchlistMutation,
    useRemoveFromWatchlistMutation,
} from "./store/watchlistSlice";


const WatchlistButton = (props) => {
    const [watchlist, setWatchlist] = useState(null);
    const [deleteFromWatchlist] = useRemoveFromWatchlistMutation();
    const [addToWatchlist] = useAddToWatchlistMutation();
    const { data: watchlistData, isLoading } = useGetUserWatchlistQuery(props.account_id);

    useEffect(() => {
        if (watchlistData) {
            setWatchlist(
                watchlistData.watchlist.find((media) => media.media_id === props.media_id) || null
            );
        }
    }, [watchlistData, props.media_id]);
    const handleAddToWatchlist = () => {
        addToWatchlist({ account_id: props.account_id, media_id: props.media_id });
    };
    const handleRemoveFromWatchlist = () => {
        if (watchlist) {
            deleteFromWatchlist({ account_id: props.account_id, watchlist_id: watchlist.id });
        }
    };

    if (isLoading) return (<div>is loading...</div>);

    return (
        <>
            {!watchlist && (
                <button
                    className="mt-3 ml-7 text-center h-10 w-30 inline bg-yellow-700 text-white hover:bg-red-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" style={{ lineHeight: ".9rem" }}

                    onClick={handleAddToWatchlist}
                >
                    Add to watchlist
                </button>
            )}
            {watchlist && (
                <button
                    className="mt-3 ml-2 text-center h-10 w-30 inline bg-red-700 text-white hover:bg-red-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" style={{ lineHeight: ".9rem" }}

                    onClick={handleRemoveFromWatchlist}
                >
                    Remove from watchlist
                </button>
            )}
        </>
    );
};
export default WatchlistButton;
