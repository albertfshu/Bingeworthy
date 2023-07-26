import React from "react";
import { Link } from "react-router-dom";
import { useGetMovieDetailsQuery } from "./store/apiSlice";

const MovieDetails = ({ media_id }) => {
    const { data, isLoading } = useGetMovieDetailsQuery(media_id.substr(4));


    if (isLoading) return <span>Loading...</span>;
    console.log(data)
    return (

        <div className="w-full mx-auto bg-gray-800 rounded-md p-9 text-center">
            <Link to={`/movie/${media_id.substr(4)}`}>
                <div className="">
                    <img
                        className="shadow-md h-80 mx-auto rounded-md"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={data.original_title}
                    />
                    <p className="sans-serif text-2xl my-auto inline">{data.original_title}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieDetails;
