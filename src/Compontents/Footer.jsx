import React from 'react';
import { Link } from 'react-router';

import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className=" text-base-content mt-10 bg-blue-100">
            <div className="footer p-10 max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-10 md:justify-between">
                <aside className="max-w-sm">
                    <h2 className="text-2xl font-bold mb-2">🏨 HotelX</h2>
                    <p className="text-sm">
                        Relax. Recharge. Repeat. <br />
                        Providing luxury since 2024.
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/rooms">Rooms</Link>
                    <Link className="link link-hover" to="/my-bookings">My Bookings</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover" to="/about">About Us</Link>
                    <Link className="link link-hover" to="/contact">Contact</Link>
                    <Link className="link link-hover" to="/terms">Terms & Conditions</Link>
                </nav>

                <nav>
                    <h6 className="footer-title  flex space-x-4 mt-4 text-lg">Follow Us</h6>
                    <div className=' flex space-x-4 mt-4 text-lg'>

                        <a href="https://www.facebook.com" className="hover:text-blue-400"><FaFacebook /></a>
                        <a href="https://twitter.com/" className="hover:text-blue-400"><FaSquareTwitter /></a>
                        <a href="https://www.linkedin.com" className="hover:text-blue-400"><FiLinkedin /></a>
                        <a href="https://www.instagram.com" className="hover:text-blue-400"><FaInstagramSquare /></a>
                    </div>

                </nav>
            </div>

            <div className="footer footer-center p-4  text-sm text-base-content">
                <p>© {new Date().getFullYear()} HotelX. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;