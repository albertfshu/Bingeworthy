import React from "react";
import { useGetTVDetailsQuery } from "./store/apiSlice";
import { Link } from "react-router-dom";
import TVCard from "./TVCard";

const RatingTVDetails = ({ media_id }) => {
    const { data, isLoading } = useGetTVDetailsQuery(media_id.substr(4));
    const tvId = media_id.substring(4);

    if (isLoading) return <span>Loading...</span>;
    return (
        <div className="w-full mx-auto bg-transparent border-b rounded-md p-0 text-center">

            <Link to={`/tv/${media_id.substr(4)}`}>
                <div className="grid grid-cols-[1fr,8fr,2fr]">
                    <img
                        className="ml-12 hover:shadow-md hover:shadow-white shadow-md h-20 mx-auto rounded-md inline"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={data.original_name}
                    />
                    <p className="ml-12 sans-serif text-xl my-auto inline">{data.original_name}</p>
                    <p className="ml-12 sans-serif text-md my-auto inline">TV: {data.number_of_seasons} Season{data.number_of_seasons > 1 && "s"}</p>
                </div>
            </Link>
        </div>
    );
};

export default RatingTVDetails;
