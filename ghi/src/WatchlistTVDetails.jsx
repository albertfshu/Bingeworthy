import React from "react";
import { useGetTVDetailsQuery } from "./store/apiSlice";
import { Link } from "react-router-dom";
import TVCard from "./TVCard";

const TVDetails = ({ media_id }) => {
    const { data, isLoading } = useGetTVDetailsQuery(media_id.substr(4));
    const tvId = media_id.substring(4);

    if (isLoading) return <span>Loading...</span>;
    return (
        <div className="w-full mx-auto bg-gray-800 rounded-md p-9 text-center">

            <Link to={`/tv/${media_id.substr(4)}`}>
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
