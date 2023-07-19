import { useParams, Link } from "react-router-dom";
import {
    useGetTVDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import TVSourceProviders from "./TVSourceProviders";

const TVDetail = () => {
    const { tv_id } = useParams();
    const { data: account } = useGetAccountQuery();
    const { data, isLoading } = useGetTVDetailsQuery(tv_id);

    if (isLoading) return <div> Loading... </div>;
    console.log(data)

    //   implement watchlist function
    return (
        <div className="w-full p-8">
            <div className="grid grid-cols-[200px,1fr] gap-8 object-center">
                <div id="col1" className="max-w-xs">
                    <div>
                        <div >
                            <img
                                className="w-200"
                                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                            ></img>
                        </div>
                        <button>Add to Watchlist</button>
                        <TVSourceProviders />
                    </div>
                </div>
                <div id="col2" className="w-full">
                    <h2 className="text-4xl">{data.original_name}</h2>
                    <div className="my-3">
                        <h5 className="inline">{data.first_air_date}</h5>
                        <h5 className="inline pl-6">{data.number_of_seasons} seasons</h5>
                        <h5 className="inline pl-6">{data.number_of_episodes} episodes</h5>
                    </div>
                    {/* <h5>rating</h5> */}
                    <div>{data.overview}</div>
                </div>
            </div>
            <div>
                <h1 className="mt-8"> Reviews </h1>
                {account && <h3> Add Review</h3>}
            </div>
            <div>
            </div>
        </div>
    );
};

export default TVDetail;
