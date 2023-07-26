import React from "react";
import { useGetTVDetailsQuery } from "./store/apiSlice";
import { Link } from "react-router-dom";
import TVCard from "./TVCard";

const RatingTVDetails = ({ media_id }) => {
    const { data, isLoading } = useGetTVDetailsQuery(media_id.substr(4));
    const tvId = media_id.substring(4);

    if (isLoading) return <span>Loading...</span>;
    return (
        <div className="w-full mx-auto bg-gray-800 rounded-md p-9 text-center">

            <Link to={`/tv/${media_id.substr(4)}`}>
                <div className="grid grid-cols-[1fr,8fr,2fr,2fr]">
                    <img
                        className="shadow-md h-20 mx-auto rounded-md inline"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={data.original_name}
                    />
                    <p className="sans-serif text-2xl my-auto inline">{data.original_name}</p>
                    <p className="sans-serif text-2xl my-auto inline">TV: {data.number_of_seasons} Season{data.number_of_seasons > 1 && "s"}</p>
                    <p className="sans-serif text-2xl my-auto ml-auto inline">{data.first_air_date.slice(0, 4)}</p>
                </div>
            </Link>
        </div>
    );
};

export default RatingTVDetails;
