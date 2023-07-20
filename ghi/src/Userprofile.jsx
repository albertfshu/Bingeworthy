import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AlertError from './AlertError';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetAccountQuery } from "./store/accountSlice";
import { useGetAccountDetailsQuery, useUpdateAccountDetailsMutation } from "./store/accountDetailsSlice";
import AlertError from "./AlertError";

const UserProfile = () => {
    // const [user, setUser] = useState('')
    // const [users, setUsers] = useState([])
    const dispatch = useDispatch()
    const { userId } = useParams();

    // const { data: accountData, isLoading: isAccountLoading, error: accountError } = useGetAccountQuery();
    const { data: accountDetailsData, isLoading: isAccountDetailsLoading, error: accountDetailsError } = useGetAccountDetailsQuery(userId);
    const [updateAccountDetails, isLoading: isUpdating, error: updateError] = useUpdateAccountDetailsMutation();
    const [bio, setBio] = usestate(accountDetailsData?.bio || "");
    const [profileImage, setProfileImage] = useState(accountDetailsData?.profileImage || "")
    // const {updateAccountDetails, { }}

    useEffect(() => {
        if (userId) {
            dispatch(useGetAccountDetailsQuery(userId));
        }
    }, [dispatch, accountData])

    const handleUpdateDetails = (e) => {
        e.preventDefault();
        const updatedDetails = {
            bio,
            profileImage,
        }
        updateAccountDetails({ id: accountData.id, ...updatedDetails })
    }

    if (isAccountLoading || isAccountDetailsLoading) {
        return <div> Account Loading... </div>
    }
    if (accountError || accountDetailsError) {
        return <AlertError message="Error getting user data" />
    }


    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <img
                    src={accountDetailsData?.profileImage || "default-profile-image.jpg"}
                    // Need to make one - default-profile-image
                    alt="Profile Image"
                    style={{ width: "125px", height: "125px" }}
                />
                <p>Member since: {new Date(accountData.date).toLocaleDateString()}</p>
            </div>

            <h2>Account Information</h2>
            <p>Username: {accountData.username}</p>

            {accountDetailsData && (
                <>
                    <h2>Account Details</h2>
                    <p>Bio: {accountDetailsData.bio}</p>
                </>
            )}

            <h2>Series Rated</h2>

            <ul>
                {accountDetailsData?.seriesRated?.map((series) => (
                    <li key={series.id}>{series.title}</li>
                ))}
            </ul>

            <h2>Visitor Messages</h2>

            <ul>
                {accountDetailsData?.visitorMessages?.map((message) => (
                    <li key={message.id}>{message.content}</li>
                ))}
            </ul>

            <h2>Links</h2>

            <ul>
                <li>
                    <Link to={`/comments/${userId}`}>Comments</Link>
                </li>
                <li>
                    <Link to={`/watchlist/${userId}`}>WatchList</Link>
                </li>
                <li>
                    <Link to={`/favorites/${userId}`}>Favorites</Link>
                </li>
                <li>
                    <Link to={`/reviews/${userId}`}>Reviews</Link>
                </li>
            </ul>

            <h2>Update Account Details</h2>

            <form onSubmit={handleUpdateDetails}>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <input type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="profileImage">Profile Image URL:</label>
                    <input type="text" id="profileImage" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />
                </div>
                <button type="submit" disabled={isUpdating}>
                    {isUpdating ? "Updating..." : "Update"}
                </button>
            </form>
        </div>
    );
};



// <h2>Update Account Details</h2>
// <form
// onSubmit={(e) => {
//     e.preventDefault();
//     const updatedDetails = {
//         bio: e.target.elements.bio.value,
//         profile_image: e.target.elements.profile_image.value,
//     };
//     handleUpdatedetails(updatedDetails);
// }}
// >
//     <div>
//         <label htmlFor="bio"> Bio:</label>
//         <input type="text" id="bio" defaultValue={accountDetailsData.bio}/>
//     </div>
//     <button type="submit" disabled={isUpdating}>
//         {isUpdating ? "Updating..." : "Update" }
//     </button>

//     </div>


export default UserProfile;
