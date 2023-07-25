import { useGetAccountDetailsQuery } from "./store/accountDetailsSlice";
import { useLogoutMutation } from "./store/accountSlice";
import React, { useState, useEffect } from "react";

const AccountNavModule = (props) => {

    const { data, isLoading } = useGetAccountDetailsQuery(props.account_id);
    const [logout] = useLogoutMutation();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleLogout = () => {
        logout()
        window.location.href = '/login';
    }


    if (isLoading) return <div>Loading...</div>
    return (
        <li className="relative flex items-center text-white">
            <img
                src={(data)
                    ? data.profile_image
                    : "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                }
                alt="Profile"
                className="cursor-pointer block h-8 w-8 rounded-full hover:bg-gray-100"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
                <ul className="absolute top-8 right-0 z-10 bg-white border border-gray-100 rounded shadow-md dark:bg-gray-800">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Watchlist
                        </a>
                    </li>
                    <li>
                        <a
                            href="/login"
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Sign Out
                        </a>
                    </li>
                </ul>
            )}
        </li>
    )
}

export default AccountNavModule;
