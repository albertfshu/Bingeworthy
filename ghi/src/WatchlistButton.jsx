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
        console.log(watchlist)
    });
    const handleAddToWatchlist = () => {
        addToWatchlist({ account_id: props.account_id, media_id: props.media_id });
    };
    const handleRemoveFromWatchlist = () => {
        if (watchlist) {
            deleteFromWatchlist({ account_id: props.account_id, watchlist_id: watchlist.id });
        }
    };
    if (isLoading) return (<div>is loading...</div>);
    console.log(props)
    console.log(watchlistData)
    return (
        <>
            {!watchlist && (
                <button
                    className="inline bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-1 my-1 ease-linear transition-all duration-150"

                    onClick={handleAddToWatchlist}
                >
                    Add to watchlist
                </button>
            )}
            {watchlist && (
                <button
                    className="inline bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-1 my-1 ease-linear transition-all duration-150"

                    onClick={handleRemoveFromWatchlist}
                >
                    Remove from watchlist
                </button>
            )}
        </>
    );
};
export default WatchlistButton;
