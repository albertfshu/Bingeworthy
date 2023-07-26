import { useParams, Link } from "react-router-dom";
import {
    useGetTVDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import TVSourceProviders from "./TVSourceProviders";
import Reviews from "./Reviews";
import WatchlistButton from "./WatchlistButton";
import { useState, useEffect } from "react";


const TVDetail = () => {
    const { tv_id } = useParams();
    const { data: account } = useGetAccountQuery();
    const { data, isLoading } = useGetTVDetailsQuery(tv_id);

    if (isLoading) return <div> Loading... </div>;

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
                        <WatchlistButton account_id={account.account.id} media_id={tv_id}/>
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
            <div className="w-4/5 mx-auto">
                <Reviews />
            </div>
        </div>
    );
};

export default TVDetail;
