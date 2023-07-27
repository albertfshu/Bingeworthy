import { Link, NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation, useLoginMutation } from "./store/accountSlice";
import React, { useState } from "react";
import AccountNavModule from "./AccountNavModule";

const Nav = () => {
    const { data: account, isLoading } = useGetAccountQuery();
    const [logout] = useLogoutMutation();
    const [login] = useLoginMutation();
    const [searchQuery, setSearchQuery] = useState("");


    const handleLogout = () => {
        logout()
        window.location.href = '/login';
    }

    const goBackToHomePage = () => {
        window.location.href = '/';
    }
    const handleLogin = () => {
        login()
        window.location.href = '/login';
    }

    const handleSearch = (e) => {
        e.preventDefault();
        window.location.href = `/search/${searchQuery}`;
    }

    if (isLoading) return <div>Loading...</div>;

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://i.imgur.com/u34lKkt.png"
                        className="h-12 w-200 mr-3"
                        alt="Bingeworthy Logo"
                        onClick={goBackToHomePage}
                    />
                </Link>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="relative flex items-center">
                            <form onSubmit={handleSearch} className="flex pt-1">
                                <input
                                    type="text"
                                    placeholder="search..."
                                    className="w-60 py-2 pl-2 pr-10 h-6 text-left px-1 text-black bg-white rounded border border-gray-300 text-sm justified-center"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="h-6 text-center py-1 px-1 text-white bg-cyan-700 rounded border border-gray-300 text-xs absolute right-0 top1.5"
                                >
                                    Search
                                </button>
                            </form>
                        </li>
                        {account ? (
                            <AccountNavModule account_id={account.account.id} />
                        ) : (
                            <li>
                                <NavLink
                                    onClick={handleLogin}
                                    className="block py-2 pl-3 pr-4 text-black h-6 mt-1 rounded hover:bg-cyan-700 ml-auto flex items-center justify-center hover:shadow-sm hover:shadow-white"
                                >
                                    Sign In
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
