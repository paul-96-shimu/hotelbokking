
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContex } from './Authprovider/Authcontext';
import Swal from 'sweetalert2';


const Header = () => {

    const { user, logOut } = use(AuthContex)


    const handleLogOut = () => {
        logOut()
            .then(() => {

                Swal.fire({
                    icon: 'success',
                    title: 'LogOut Successful 🎉',
                    showConfirmButton: false,
                    timer: 1500


                });

                setTimeout(() => {

                }, 1500);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        // <div className="navbar bg-base-100 shadow-md px-4  mt-6">
        //     {/* Left side: Logo */}
        //     <div className="navbar-start">
        //         <Link to="/" className="text-xl font-bold">🏨 HotelX</Link>
        //     </div>

        //     {/* Mobile Menu Button */}
        //     <div className="navbar-center lg:hidden">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost btn-circle">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-5 w-5"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                 >
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        //                 </svg>
        //             </label>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        //             >

        //                 <li><Link to="/">Home</Link></li>
        //                 <li><Link to="/rooms">Rooms</Link></li>
        //                 <li><Link to="/mybookings">My Bookings</Link></li>


        //                 {
        //                     user ? <button onClick={handleLogOut} className='btn'>LogOut</button> :
        //                         <>

        //                             <Link to="/login" className="btn btn-primary btn-sm">Login</Link>

        //                             <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
        //                         </>
        //                 }

        //             </ul>
        //         </div>
        //     </div>

        //     {/* Desktop Menu */}
        //     <div className="navbar-end hidden lg:flex gap-4">

        //         <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
        //         <Link to="/rooms" className="btn btn-ghost btn-sm">Rooms</Link>

        //         <Link to="/mybookings" className="btn btn-ghost btn-sm">My Bookings</Link>


        //         {
        //             user ? <button onClick={handleLogOut} className='btn'>LogOut</button> :
        //                 <>

        //                     <Link to="/login" className="btn btn-primary btn-sm">Login</Link>

        //                     <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
        //                 </>
        //         }

        //     </div>
        // </div>




        <div className="sticky top-0 z-50 bg-primary text-white shadow-md">
            <div className="navbar container mx-auto px-4 py-3">
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/" className="text-xl font-bold">🏨 HotelX</Link>
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
                            <li><Link to="/rooms">Rooms</Link></li>
                            <li><Link to="/mybookings">My Bookings</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">AboutUs</Link></li>
                            {
                                user ?
                                    <li><button onClick={handleLogOut} className='btn btn-sm'>LogOut</button></li>
                                    :
                                    <>
                                        <li><Link to="/login" className="btn btn-sm">Login</Link></li>
                                        <li><Link to="/register" className="btn btn-sm">Register</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex gap-4">
                    <Link to="/" className="btn btn-ghost text-white btn-sm">Home</Link>
                    <Link to="/rooms" className="btn btn-ghost text-white btn-sm">Rooms</Link>
                    <Link to="/mybookings" className="btn btn-ghost text-white btn-sm">My Bookings</Link>
                    <Link to="/contact" className="btn btn-ghost text-white btn-sm">Contact</Link>
                    <Link to="/about" className="btn btn-ghost text-white btn-sm">About</Link>
                    {
                        user ?
                            <button onClick={handleLogOut} className='btn btn-outline btn-sm'>LogOut</button>
                            :
                            <>
                                <Link to="/login" className="btn btn-sm btn-secondary">Login</Link>
                                <Link to="/register" className="btn btn-sm btn-secondary">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;

