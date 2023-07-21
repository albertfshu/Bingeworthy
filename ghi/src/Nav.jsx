import { Link, NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation, useLoginMutation } from "./store/accountSlice";
import React from "react";
import { useState } from "react";

const Nav = () => {
    const { data: account } = useGetAccountQuery();
    const [logout] = useLogoutMutation();
    const [login] = useLoginMutation();
    const [searchQuery, setSearchQuery] = useState("");
    console.log(account)
    const handleLogout = () => {
        logout()
        window.location.href = '/login';
    }

    const handleLogin = () => {
        login()
        window.location.href = '/login';
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // window.location.href = `./search`;
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://i.imgur.com/u34lKkt.png"
                        className="h-12 w-200 mr-3"
                        alt="Bingeworthy Logo"
                    />
                </Link>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LnBuZw.png" alt="user photo"></img>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Favorites</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to={'/'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">N/A</NavLink>
                        </li>
                        <li className="relative flex items-center">
                            <form onSubmit={handleSearch} className="flex">
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="w-60 py-2 pl-2 pr-10 h-6 text-left py-1 px-1 text-black bg-white rounded border border-gray-300 text-sm justified-center"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="h-6 text-center py-1 px-1 text-white bg-cyan-700 rounded border border-gray-300 text-xs absolute right-0 top-0"
                                >
                                    Search
                                </button>
                            </form>
                        </li>
                        {account &&
                            <li>
                                <NavLink onClick={handleLogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Out</NavLink>
                            </li>}
                        {!account && <li>
                            <NavLink onClick={handleLogin} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign In</NavLink>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;






        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 {/* <li className="nav-item">
        //                     <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
        //                 </li> */}
        //                 {account && <li className="nav-item">
        //                     <NavLink to={'/search'} className={'nav-link'}>Search</NavLink>
        //                 </li>}
        //                 {!account && <li className="nav-item">
        //                     <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
        //                 </li>}
        //                 {!account && <li className="nav-item">
        //                     <NavLink
        //                     to={'/signup'}
        //                     className={'nav-link'}>Sign Up</NavLink>
        //                 </li>}
        //                 {!account && <li className="nav-item">
        //                     <NavLink to={'/movielist'} className={'nav-link'}>Movie list</NavLink>
        //                 </li>}
        //             </ul>
        //             {account && (
        //                 <button className="btn btn-outline-danger" onClick={logout}>
        //                     Logout
        //                 </button>
        //             )}
        //         </div>
        //     </div>
        // </nav>
