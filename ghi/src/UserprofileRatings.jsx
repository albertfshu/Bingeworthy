import { useGetUserRatingQuery } from "./store/dataSlice";
import { useEffect, useState } from "react";

const UserprofileRatings = (props) => {
    const { data, isLoading } = useGetUserRatingQuery(props.page_id);

    console.log(data)
    if (isLoading) return (<p>is loading...</p>)

    return (
        <div className="grid grid-cols-[1fr,1fr] mb-8">
            <div className="mx-auto">
                <p className="text-1xl font-medimum border-b px-3">Avg. Rating</p>
                <p className="text-2xl font-bold">{Math.round((data.map(({ value }) => value).reduce((a, b) => a + b, 0) / data.length) * 100) / 100}</p>
            </div>
            <div className="mx-auto">
                <p className="text-1xl font-medimum border-b px-3">Total Ratings</p>
                <p className="text-2xl font-bold mx-auto">{data.length}</p>
            </div>
        </div>
    )
}

export default UserprofileRatings;
