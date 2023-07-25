import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetAccountQuery } from "./store/accountSlice";
import { useGetRatingQuery, useUpdateRatingMutation, useCreateRatingMutation } from "./store/dataSlice";

const Rating = () => {
    const { media_id } = useParams();
    const { data: ratings, isLoading: isRatingsLoading } = useGetRatingQuery(media_id);
    const [updateRating] = useUpdateRatingMutation();
    const [postRating] = useCreateRatingMutation();
    let { data: account } = useGetAccountQuery();
    const [userRating, setUserRating] = useState(1);

    useEffect(() => {
        if (ratings) {
            setUserRating(ratings.find((rating) => rating.user_id = account.id) || 1)
        }
    }, [])


    if (isRatingsLoading) return (<p>is Loading..</p>)
    console.log(ratings)

    return (
        <div>
            <p>REVIEWS</p>
            <input type="range" min="1" max="5" step="1" value={userRating} onChange={(e) => setUserRating(e.target.value)} />
        </div>
    )

}
export default Rating;
