import { useState, useEffect } from "react";
import { useGetAccountQuery } from "./store/accountSlice";
import { useGetRatingQuery, useUpdateRatingMutation, useCreateRatingMutation } from "./store/dataSlice";

const Rating = (props) => {
    const { data: ratings, isLoading: isRatingsLoading } = useGetRatingQuery(props.page_id);
    const [updateRating] = useUpdateRatingMutation();
    const [postRating] = useCreateRatingMutation();
    let { data: account } = useGetAccountQuery();
    let userRating = 1;
    const [displayUserRating, setDisplayUserRating] = useState(1)
    const [avgRating, setAvgRating] = useState(0)


    useEffect(() => {
        if (ratings?.length !== 0 && ratings !== undefined) {
            let tempRatings = ratings.map(({ value }) => value);
            setAvgRating(tempRatings.reduce((a, b) => a + b / tempRatings.length));
        }
    }, [setAvgRating, ratings])

    const handleUserRatingChange = (e) => {
        userRating = e;
        setDisplayUserRating(userRating)
        if (ratings.find((rating) => rating.user_id === account.account.username)) {
            let query = {
                page_id: props.page_id,
                body: {
                    "value": userRating,
                    "user_id": account.account.username
                }
            };
            updateRating(query);
        }
        else {
            let query = {
                page_id: props.page_id,
                body: {
                    "value": userRating,
                    "user_id": account.account.username
                }
            };
            postRating(query);
        }
    }


    if (isRatingsLoading) return (<p>is Loading..</p>)

    return (
        <div className="rounded bg-cyan-700 mr-8 mb-5 ml-7 pl-2 border">
            <p className="text-gray-200 font-bold underline text-lg ">Ratings</p>
            <p className="inline text-black">Average Rating :</p>
            {(avgRating === 0)
                ? <p className="inline ml-3 text-xs">No Ratings Yet</p>
                : <p className="inline ml-3">{avgRating}</p>}
            {account ? (
                <>
                    <div>
                        <p className="inline text-black">Rate:</p>
                        <select className="text-black inline ml-3 rounded mb-2" id="userRating" value={displayUserRating} onChange={(e) => { handleUserRatingChange(e.target.value); }}>
                            <option className="text-black" value="1">1</option>
                            <option className="text-black" value="2">2</option>
                            <option className="text-black" value="3">3</option>
                            <option className="text-black" value="4">4</option>
                            <option className="text-black" value="5">5</option>
                        </select>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )

}
export default Rating;
