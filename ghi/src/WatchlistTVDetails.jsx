import React from "react";
import { useGetTVDetailsQuery } from "./store/apiSlice";
import { Link } from "react-router-dom";
import TVCard from "./TVCard";

const TVDetails = ({ media_id }) => {
    const { data, isLoading } = useGetTVDetailsQuery(media_id.substr(4));
    const tvId = media_id.substring(4);

    if (isLoading) return <span>Loading...</span>;

    return (
        <div className="w-60 mx-auto bg-gray-800 rounded-md p-9 text-center">
            <Link to={`/tv/${tvId}`}>
            <img
                className="shadow-md h-60 mx-auto rounded-md"
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.original_name}
            />
            <div className="font-bold text-gray-200 mt-3">
            {data.original_name}
            </div>
            </Link>
        </div>
    );
};

export default TVDetails;
