import React from "react";
import { Link } from "react-router-dom";
import { useGetMovieDetailsQuery } from "./store/apiSlice";

const MovieDetails = ({ media_id }) => {
    const { data, isLoading } = useGetMovieDetailsQuery(media_id.substr(4));
    const movieId = media_id.substring(4);

    if (isLoading) return <span>Loading...</span>;

    return (
        <div className="w-60 mx-auto bg-gray-800 rounded-md p-9 text-center">
            <Link to={`/movie/${movieId}`}>
            <img
                className="shadow-md h-60 mx-auto rounded-md"
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.original_title}
            />
            <div className="font-bold text-gray-200 mt-3">
                {data.original_title}
            </div>
            </Link>
        </div>
    );
};

export default MovieDetails;
