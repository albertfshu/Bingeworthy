import { useEffect, useState } from 'react';
import {
    useGetAllWatchlistQuery,
    useAddToWatchlistMutation,
    useRemoveFromWatchlistMutation,
} from "./store/watchlistSlice";

const WatchlistButton = ({ account_id, media_id }) => {
    const [watchlist, setWatchlist] = useState(null);
    const [deleteFromWatchlist] = useRemoveFromWatchlistMutation();
    const [addToWatchlist] = useAddToWatchlistMutation();
    const { data: watchlistData, isLoading } = useGetAllWatchlistQuery();

    useEffect(() => {
        console.log("watchlistData:", watchlistData);
        if (watchlistData) {
            setWatchlist(
                watchlistData.find((media) => media.media_id === media_id) || null
            );
        }
    }, [media_id]);

    const handleAddToWatchlist = () => {
        addToWatchlist({ account_id: account_id, media_id: media_id });
    };

    const handleRemoveFromWatchlist = () => {
        if (watchlist) {
            deleteFromWatchlist({ account_id: account_id, watchlist_id: watchlist.watchlist_id });
        } 
    };

    if (isLoading) { return <div>Loading...</div> }


    return (
        <>
            {!watchlist && (
                <button
                    className="btn btn-success"
                    onClick={handleAddToWatchlist}
                >
                    Add to watchlist
                </button>
            )}
            {watchlist && (
                <button
                    className="btn btn-danger"
                    onClick={handleRemoveFromWatchlist}
                >
                    Remove from watchlist
                </button>
            )}
        </>
    );
};

export default WatchlistButton;
