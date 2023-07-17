import { Link, NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "./store/accountSlice";

const Nav = () => {
    const { data: account } = useGetAccountQuery();
    const [logout] = useLogoutMutation();


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="underline navbar-brand">BingeWorthy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        </li> */}
                        {account && <li className="nav-item">
                            <NavLink to={'/search'} className={'nav-link'}>Search</NavLink>
                        </li>}
                        {!account && <li className="nav-item">
                            <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                        </li>}
                        {!account && <li className="nav-item">
                            <NavLink to={'/signup'} className={'nav-link'}>Sign Up</NavLink>
                        </li>}
                        {!account && <li className="nav-item">
                            <NavLink to={'/movielist'} className={'nav-link'}>Movie list</NavLink>
                        </li>}
                    </ul>
                    {account && (
                        <button className="btn btn-outline-danger" onClick={logout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Nav;
