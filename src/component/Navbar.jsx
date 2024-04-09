import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    // const handleSignOut = () => {
    //     logOut(result => {
    //         console.log(result.user)
    //     })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update'>Update Profile</NavLink></li>
        <li><NavLink to='/userprofile'>User Profile</NavLink></li>
        <li><NavLink to='/details'>Estate Details</NavLink></li>

    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className=" text-xl font-bold"><span className="text-4xl font-bold">SH</span> assets LTD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div>
                    {
                        user?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://i.ibb.co/V2JRhyS/mosque.jpg"} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button className="btn btn-primary">{user?.displayName || 'user name not found'}</button>
                                    </li>
                                    <li>
                                        <button onClick={logOut} className="btn btn-primary">Log Out</button>
                                    </li>
                                </ul>

                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-secondary">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;