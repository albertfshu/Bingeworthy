import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetUserRatingQuery } from "./store/dataSlice";
import RatingTVDetails from "./RatingTVDetails";
import RatingMovieDetails from "./RatingMovieDetails";

const Ratinglist = () => {
    const { userId } = useParams();
    const { data, isLoading } = useGetUserRatingQuery(userId);
    const [ratingItems, setRatingItems] = useState(data);
    const [sortOrder, setSortOrder] = useState("desc"); // Initial sorting order (descending)

    console.log(userId);
    console.log(data);
    if (isLoading) return <div>Loading...</div>;

    // Calculate the remaining available height for the table body
    const tableBodyMaxHeight = `calc(100vh - 350px)`; // Adjust the height based on your needs

    // Function to handle sorting by rating
    // const handleSortByRating = () => {
    //     if (sortOrder === "asc") {
    //         // Sort in ascending order
    //         setRatingItems([...ratingItems].sort((a, b) => a.value - b.value));
    //         setSortOrder("desc"); // Toggle the sorting order to descending
    //     } else {
    //         // Sort in descending order
    //         setRatingItems([...ratingItems].sort((a, b) => b.value - a.value));
    //         setSortOrder("asc"); // Toggle the sorting order to ascending
    //     }
    // };

    if (isLoading) return (<div>is Loading...</div>);

    return (
        <div>
            <h1 className="pt-6 bg-cyan-700 shadow-md shadow-white p-3 text-center bold-font text-5xl mb-5">
                {userId}'s Ratings
            </h1>
            <div
                className="pt-6 w-1/2 min-w-auto mx-auto bg-gray-800 rounded-md p-4 text-center"
                style={{ overflow: "hidden" }}
            >
                <div className="mt-7 w-auto bg-gray-800 rounded-md mt-2" style={{ maxHeight: tableBodyMaxHeight, overflow: "auto" }}>
                    <table className="w-full">
                        <thead className="mt-2 sticky top-0 bg-cyan-700">
                            <tr className="grid grid-cols-[1fr,9fr,2fr]">
                                <th className="p-2 text-xl font-bold flex items-center justify-center">
                                    Rating
                                    {/* <span className="ml-5 cursor-pointer" onClick={handleSortByRating}>
                                        {sortOrder === "asc" ? " ▲" : " ▼"}
                                    </span> */}
                                </th>
                                <th className="p-2 text-xl font-bold flex items-center justify-center">
                                    Title
                                </th>
                                <th className="p-2 text-xl font-bold flex items-center justify-center">
                                    Runtime
                                </th>
                            </tr>
                        </thead>
                        <tbody className="ml-5 border border-cyan-700 rounded-md">
                            {data.map((rating) => (
                                <tr key={rating.id} className="grid grid-cols-[20px,1fr] my-2">
                                    <td className="mt-5 ml-4 p-2 text-3xl font-bold">{rating.value}</td>
                                    <td className="p-2">
                                        {rating.page_id.substr(0, 4) === "mID=" ? (
                                            <RatingMovieDetails
                                                title={rating.original_title}
                                                media_id={rating.page_id}
                                            />
                                        ) : (
                                            <RatingTVDetails
                                                title={rating.original_title}
                                                media_id={rating.page_id}
                                            />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Ratinglist;
