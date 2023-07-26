import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import { useGetAccountQuery } from "./store/accountSlice";
import { useGetAccountDetailsQuery, useUpdateAccountDetailsMutation } from "./store/accountDetailsSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import UserprofileRatings from "./UserprofileRatings";
import AlertError from "./AlertError";
import Reviews from "./Reviews";

const UserProfile = () => {
    // const dispatch = useDispatch()
    const { userId } = useParams();
    const { data: account, isLoading: accountLoading } = useGetAccountQuery();
    const { data: accountDetailsData, isLoading: isAccountDetailsLoading } = useGetAccountDetailsQuery(userId);
    const [updateAccountDetails, isLoading: isUpdating] = useUpdateAccountDetailsMutation();
    const [bio, setBio] = useState(accountDetailsData?.bio || "");
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(accountDetailsData?.profile_image || "")
    // const { data: accountData, isLoading: isAccountLoading, error: accountError } = useGetAccountQuery();
    // const {updateAccountDetails, { }}


    const handleUpdateDetails = () => {
        // e.preventDefault();
        const updatedDetails = {
            "bio": bio,
            "profile_image": profileImage,
        };
        updateAccountDetails({ id: userId, ...updatedDetails });
    };

    if (isAccountDetailsLoading) {
        return <div> Account Loading... </div>
    }
    if (accountDetailsData?.error) {
        return <AlertError message="Error getting user data" />
    }

    return (
        <div className="w-3/4 mx-auto">
            <div className="grid grid-cols-[200px,1fr] mx-8 py-8">
                <div>
                    <div>
                        <img
                            src={accountDetailsData?.profile_image || "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"}
                            // Need to make one - default-profile-image
                            alt="Profile"
                            style={{ width: "125px", height: "125px" }}
                        />
                    </div>

                    <p className="text-3xl font-bold mt-3">{userId}'s Profile</p>
                    <p>Member since: {new Date(accountDetailsData?.date).toLocaleDateString()}</p>
                    <ul>
                        {accountDetailsData?.seriesRated?.map((series) => (
                            <li key={series.id}>{series.title}</li>
                        ))}
                    </ul>
                    <ul className="my-8">
                        <li>
                            <Link className="text-3xl hover:text-sky-400 font-bold" to={`/profile/${userId}/ratings`}>Ratings</Link>
                        </li>
                        <li>
                            <Link className="text-3xl hover:text-sky-400 font-bold" to={`/profile/${userId}/watchlist`}>Watchlist</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <UserprofileRatings page_id={userId} />
                    <div>
                        {accountDetailsData && (
                            <>

                                <div className="grid grid-cols-[1fr,300px] border-b">
                                    <p className="text-3xl mt-4 inline">About Me</p>
                                    {
                                        account &&
                                        <button
                                            className=" ml-8 inline bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                setShowModal(true);
                                            }}
                                        >
                                            Update Account Details
                                        </button>
                                    }
                                </div>
                                <p>{accountDetailsData.bio}</p>
                            </>
                        )}

                    </div>
                    <Reviews page_id={userId} />
                    {
                        showModal ? (
                            <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-1/2 my-6 mx-auto min-w-6xl">

                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none">

                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">Update Account Details</h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>

                                            <form onSubmit={handleUpdateDetails}>
                                                <div className="relative p-6 flex-auto">
                                                    <label htmlFor="bio">About Me</label>
                                                    <textarea className="w-full p-2 border border-cyan-700 rounded text-black h-60" type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                                                    <label htmlFor="profileImage">Profile Image URL  </label>
                                                    <input type="text-black" id="profileImage" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />
                                                </div>

                                                <div className="text-black flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit"
                                                        onClick={() => {
                                                            setShowModal(false);
                                                            handleUpdateDetails();
                                                        }}
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div >
                                </div >
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
