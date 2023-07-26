import React from "react";
import {  useGetMovieDetailsQuery } from "./store/apiSlice";

const MovieDetails = ({ media_id }) => {
    const { data, isLoading } = useGetMovieDetailsQuery(media_id);

    if (isLoading) return <span>Loading...</span>;

    return (
        <div className="w-60 mx-auto bg-gray-800 rounded-md p-9 text-center">
            <img
                className="shadow-md h-60 mx-auto rounded-md"
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.original_title}
            />
            <div className="sans-serif">{data.original_title}</div>
        </div>
    );
};

export default MovieDetails;
