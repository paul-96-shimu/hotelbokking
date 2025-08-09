import React, { useContext } from 'react';
import { Link } from 'react-router'; 
import { AuthContex } from './Authprovider/Authcontext';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'LogOut Successful 🎉',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sticky top-0 z-50 bg-primary text-white shadow-md">
            <div className="navbar container mx-auto px-4 py-3">

                {/* Left Side Logo */}
                <div className="navbar-start">
                    <Link to="/" className="text-xl font-bold">🏨 HotelX</Link>
                </div>

                {/* Center Menu (Desktop) */}
                <div className="navbar-center hidden lg:flex gap-4">
                    <Link to="/" className="btn btn-ghost text-white btn-sm">Home</Link>
                    <Link to="/about" className="btn btn-ghost text-white btn-sm">About</Link>
                    <Link to="/contact" className="btn btn-ghost text-white btn-sm">Contact</Link>

                    {user ? (
                        <>
                            <Link to="/rooms" className="btn btn-ghost text-white btn-sm">Rooms</Link>
                           
                        </>
                    ) : (
                        <>
                            {/* <Link to="/rooms" className="btn btn-ghost text-white btn-sm">Rooms</Link> */}
                        </>
                    )}
                </div>

                {/* Right Side Menu (Desktop) */}
                <div className="navbar-end hidden lg:flex gap-4">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL || "https://i.ibb.co/2FsfXqM/user.png"} alt="User" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-white">
                               <li><Link to="/mybookings">My Bookings</Link></li>
                         
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-sm btn-secondary">Login</Link>
                            <Link to="/register" className="btn btn-sm btn-secondary">Register</Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="navbar-center lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-white">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {user ? (
                                <>
                                    <li><Link to="/rooms">Rooms</Link></li>
                                    <li><Link to="/mybookings">My Bookings</Link></li>
                                 
                                
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/rooms">Rooms</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
