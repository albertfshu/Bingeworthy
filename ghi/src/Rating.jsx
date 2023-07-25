import { useState, useEffect } from "react";
import { useGetAccountQuery } from "./store/accountSlice";
import { useGetRatingQuery, useUpdateRatingMutation, useCreateRatingMutation } from "./store/dataSlice";

const Rating = (props) => {
    const { data: ratings, isLoading: isRatingsLoading } = useGetRatingQuery(props.page_id);
    const [updateRating] = useUpdateRatingMutation();
    const [postRating] = useCreateRatingMutation();
    let { data: account } = useGetAccountQuery();
    // const [userRating, setUserRating] = useState(1);
    let userRating = 1;
    const [displayUserRating, setDisplayUserRating] = useState(1)
    const [avgRating, setAvgRating] = useState(0)


    useEffect(() => {
        if (ratings?.length != 0 && ratings != undefined) {
            let tempRatings = ratings.map(({ value }) => value);
            setAvgRating(tempRatings.reduce((a, b) => a + b / tempRatings.length));
            console.log(avgRating)
            userRating = (ratings.find((rating) => rating.user_id == account?.account.id) || 5)
        }
        console.log(ratings)
    })

    const handleUserRatingChange = (e) => {
        console.log(e)
        userRating = e;
        setDisplayUserRating(userRating)
        console.log("ratingchanging")
        if (ratings.find((rating) => rating.user_id == account.account.id)) {
            console.log("existing")
            let query = {
                page_id: props.page_id,
                body: {
                    "value": userRating,
                    "user_id": account.account.id
                }
            };
            updateRating(query);
        }
        else {
            console.log("newrating")
            let query = {
                page_id: props.page_id,
                body: {
                    "value": userRating,
                    "user_id": account.account.id
                }
            };
            postRating(query);
        }
    }


    if (isRatingsLoading) return (<p>is Loading..</p>)

    return (
        <div>
            <p>Ratings</p>
            <p className="inline">Average Rating:</p>
            {(avgRating == 0)
                ? <p className="inline ml-3">No Ratings Submitted Yet!</p>
                : <p className="inline ml-3">{avgRating}</p>}
            {/* <input type="range" min="1" max="5" step="1" value={userRating} onChange={(e) => setUserRating(e.target.value)} /> */}
            {account ? (
                <>
                    <div>
                        <p className="inline">Rate:</p>
                        <select className="text-black inline ml-3" id="userRating" value={displayUserRating} onChange={(e) => { handleUserRatingChange(e.target.value); }}>
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
