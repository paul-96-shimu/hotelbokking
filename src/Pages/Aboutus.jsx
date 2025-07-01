import React from 'react';

const Aboutus = () => {
    return (
        <div className="bg-base-100 min-h-screen px-4 py-10">
            <div className="container mx-auto max-w-5xl bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
                    🏨 Welcome to HotelX
                </h2>

                <p className="text-black text-lg leading-relaxed mb-6 text-justify">
                    At <span className="font-bold text-secondary">HotelX</span>, we believe your stay should be more than just accommodation —
                    it should be an unforgettable experience. Nestled in the heart of the city yet surrounded by peace and serenity,
                    HotelX offers you the perfect blend of luxury, comfort, and personalized service.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <img
                        src="https://i.ibb.co/1wH7McY/hotel-img3.jpg"
                        alt="Hotel Interior"
                        className="rounded-xl shadow-md w-full"
                    />
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-secondary">Why Choose Us?</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Luxurious Rooms with Scenic Views</li>
                            <li>High-Speed Wi-Fi and 24/7 Room Service</li>
                            <li>Free Breakfast with Local and International Options</li>
                            <li>Friendly and Professional Staff</li>
                            <li>Walking Distance to Major Tourist Attractions</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-base-200 p-6 rounded-xl shadow-inner">
                    <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
                    <p className="text-gray-700 text-justify">
                        Our mission is to create a warm and welcoming environment where guests feel at home.
                        Whether you're traveling for business or leisure, we aim to deliver excellence in every
                        aspect of your stay. From our well-appointed rooms to our dedicated staff, your comfort is our priority.
                    </p>
                </div>

                <div className="text-center mt-10">
                    <h3 className="text-xl font-semibold mb-2 text-black">Book Your Stay Today!</h3>
                    <p className="mb-4 text-gray-600">Ready to relax and rejuvenate? Experience HotelX — where comfort meets elegance.</p>
                    <a href="/rooms" className="btn btn-primary btn-wide">Explore Rooms & Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;