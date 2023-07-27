import { useParams } from "react-router-dom";
import {
    useGetTVDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import TVSourceProviders from "./TVSourceProviders";
import Reviews from "./Reviews";
import WatchlistButton from "./WatchlistButton";
import Rating from "./Rating";

const TVDetail = () => {
    const { tv_id } = useParams();
    const { data: account } = useGetAccountQuery();
    const { data, isLoading } = useGetTVDetailsQuery(tv_id);

    if (isLoading) return <div> Loading... </div>;

    return (
        <div className="w-full p-8 mx-auto">
            <div className="grid grid-cols-[200px,1fr] gap-8 object-center">
                <div id="col1" className="max-w-xs">
                    <div>
                        <div className="w-50">
                            <img
                                className="w-200"
                                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                            ></img>
                        </div>
                        {account && <WatchlistButton account_id={account?.account.id} media_id={"tID=" + tv_id} />}
                        <TVSourceProviders />
                    </div>
                </div>
                <div id="col2" className="ml-10 w-full">
                    <div className="grid grid-cols-[1fr,300px]">
                        <div>
                            <h2 className="text-4xl text-bold">{data.original_name}</h2>
                            <div className="my-3 border-b mr-5">
                                <h5 className="inline">{data.first_air_date}</h5>
                                <h5 className="inline pl-6">{data.number_of_seasons} seasons</h5>
                                <h5 className="inline pl-6">{data.number_of_episodes} episodes</h5>
                            </div>
                        </div>
                        <div>
                            <Rating page_id={"tID=" + tv_id} />
                        </div>
                    </div>
                    <div className="mr-28">{data.overview}</div>
                </div>
            </div>
            <div className="w-auto md:w-4/5 mx-auto">
                <Reviews page_id={"tID=" + tv_id} />
            </div>
        </div>
    );
};

export default TVDetail;
