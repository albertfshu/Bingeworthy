import { Link, NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "./store/accountSlice";
import React from "react";

const Nav = () => {
    const { data: account } = useGetAccountQuery();
    const [logout] = useLogoutMutation();

const handleLogout = () => {
    logout()
}

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to= "/" className="flex items-center">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Eo_circle_teal_letter-b.svg"
                class="h-8 mr-3"
                alt="Bingeworthy Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Bingeworthy
                </span>
            </Link>
            <div className="flex items-center md:order-2">
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LnBuZw.png" alt="user photo"></img>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                 <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Favorites</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/movielist'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Movie List</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} onClick={handleLogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Out</NavLink>
                        </li>
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
