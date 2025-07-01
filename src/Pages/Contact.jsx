import React from 'react';
import { FaFacebookF, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="container mx-auto max-w-5xl bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">📞 Contact Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Subject (optional)"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows="5"
                            placeholder="Your Message..."
                            required
                        ></textarea>
                        <button className="btn btn-primary w-full">Send Message</button>
                    </form>

                    {/* Contact Info and Social Links */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-secondary">Direct Contact</h3>
                            <p className="flex items-center gap-2 text-black"><FaPhoneAlt /> +8801724549872</p>
                            <p className="flex items-center gap-2 text-black"><FaEnvelope /> hotelxjson@gmail.com</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-secondary">Follow Us</h3>
                            <div className="flex gap-4 text-2xl">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                                    <FaFacebookF />
                                </a>
                                <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-800">
                                    <FaWhatsapp />
                                </a>
                                <a href="mailto:hotelx@example.com" className="text-red-600 hover:text-red-800">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-secondary">Need to Book a Room?</h3>
                            <p className='text-black'>Just send us a message or call us directly to book your stay. We are available 24/7!</p>
                            <a href="tel:+8801XXXXXXXXX" className="btn btn-outline btn-accent mt-3">Call to Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;