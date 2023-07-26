import React from "react";
import { useGetTVDetailsQuery, useGetMovieDetailsQuery } from "./store/apiSlice";

const TVDetails = ({ media_id }) => {
    const { data, isLoading } = useGetTVDetailsQuery(media_id.substr(4));

    if (isLoading) return <span>Loading...</span>;

    return (
        <div className="w-60 mx-auto bg-gray-800 rounded-md p-9 text-center">
            <img
                className="shadow-md h-60 mx-auto rounded-md"
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.original_name}
            />
            <div className="sans-serif">{data.original_name}</div>
        </div>
    );
};

export default TVDetails;
