import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>

        <NavLink to='/' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>Home</NavLink>
        <NavLink to='/update' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>Update Profile</NavLink>
        {
            user && <NavLink to='/contact' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>Contact Us</NavLink>
        }

    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="pr-2" src={'https://i.ibb.co/R3MGnQq/logo2.png'} alt="" />
                    <span className=" text-xl font-bold text-blue-800">assets LTD</span></div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div className="flex justify-around items-center">
                                    <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img title={user?.displayName || 'user name not found'} src={user?.photoURL || "https://i.ibb.co/V2JRhyS/mosque.jpg"} />
                                        </div>
                                    </label>

                                    <button onClick={logOut} className="btn bg-green-500 text-white font-semibold">Log Out</button>
                                </div>

                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn bg-green-500 text-white font-semibold">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;