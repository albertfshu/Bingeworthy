import React from "react";
import { Link } from "react-router-dom";
import { useGetMovieDetailsQuery } from "./store/apiSlice";

const RatingMovieDetails = ({ media_id }) => {
    const { data, isLoading } = useGetMovieDetailsQuery(media_id.substr(4));


    if (isLoading) return <span>Loading...</span>;
    console.log(data)
    return (

        <div className="border-b w-full mx-auto bg-transparent rounded-md p-0 text-center">
            <Link to={`/movie/${media_id.substr(4)}`}>
                <div className="grid grid-cols-[1fr,8fr,2fr]">
                    <img
                        className="ml-12 hover:shadow-md hover:shadow-white shadow-md h-20 mx-auto rounded-md"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={data.original_title}
                    />
                    <p className="ml-12 sans-serif text-xl my-auto inline">{data.original_title}</p>
                    <p className="ml-12 sans-serif text-md my-auto inline">Movie: {data.runtime}min</p>
                </div>
            </Link>
        </div>
    );
};

export default RatingMovieDetails;
