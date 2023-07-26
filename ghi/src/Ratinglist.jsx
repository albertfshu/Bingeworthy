import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserRatingQuery } from "./store/dataSlice";
import RatingTVDetails from "./RatingTVDetails";
import RatingMovieDetails from "./RatingMovieDetails"

const Ratinglist = () => {
    const { userId } = useParams();
    const { data, isLoading } = useGetUserRatingQuery(userId);
    const ratingItems = data;

    console.log(userId)
    console.log(data)
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="mt-8">
            <h1 className="text-center bold-font text-5xl"> {userId}'s Ratings</h1>
            <div className="w-1/2 min-w-fit mx-auto bg-gray-800 rounded-md p-4 text-center">
                {ratingItems.map((rating) => (
                    (rating.page_id.substr(0, 4) == "mID=") ?
                        <div key={rating.id} className="grid grid-cols-[20px,1fr]">
                            <p className="text-3xl font-bold my-auto">{rating.value}</p>
                            <RatingMovieDetails
                                title={rating.original_title}
                                media_id={rating.page_id}
                            />
                        </div>
                        : <div key={rating.id} className="grid grid-cols-[20px,1fr]">
                            <p className="text-3xl font-bold my-auto">{rating.value}</p>
                            <RatingTVDetails
                                title={rating.original_title}
                                media_id={rating.page_id}
                            />
                        </div>

                ))}
            </div>
        </div>
    );
};

export default Ratinglist;
