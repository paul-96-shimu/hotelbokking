import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { IoStar } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import Swal from 'sweetalert2';
import BookigModal from './BookigModal';
import { AuthContex } from '../Compontents/Authprovider/Authcontext';

const RoomDetails = () => {
    const roomDetails = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);
     const [selectedDate, setSelectedDate] = useState(null); 
    const { user } = useContext(AuthContex);
    const navigate = useNavigate();

    if (!roomDetails) {
        return (
            <div className="text-center p-10">
                <p>Room details not found.</p>
            </div>
        );
    }

    const handleConfirmBooking = () => {
        Swal.fire({
            icon: 'success',
            title: 'Booking Successful 🎉',
            showConfirmButton: false,
            timer: 1500
        });
        setIsModalOpen(false);
    };

    const handleBookNow = () => {
        if (!user) {
            navigate('/login');
            return;
        }

        if (!roomDetails.isAvailable) {
            Swal.fire({
                icon: 'error',
                title: 'Already Booked!',
                text: 'This room is no longer available.',
            });
            return;
        }

        setIsModalOpen(true);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-2xl w-full">
                <img
                    src={roomDetails.image}
                    alt={roomDetails.name}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2 text-center">{roomDetails.name}</h1>
                    <p className="text-gray-700 mb-3 text-center">{roomDetails.description}</p>

                    <div className="flex justify-around text-lg font-medium mb-4">
                        <p className="flex justify-center items-center gap-1">
                            <FaSackDollar /> ${roomDetails.price} / night
                        </p>
                        <p className={roomDetails.isAvailable ? "text-green-600" : "text-red-600"}>
                            {roomDetails.isAvailable ? "Available" : "Booked"}
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3">
                        Reviews ({roomDetails.reviews?.length || 0})
                    </h2>

                    {roomDetails.reviews?.length > 0 ? (
                        <ul className="space-y-3">
                            {roomDetails.reviews.map((review, index) => (
                                <li key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                    <div className="flex justify-between items-center mb-1">
                                        <strong>{review.user}</strong>
                                        <span className="flex items-center text-yellow-500 font-semibold">
                                            {review.rating} <IoStar className="ml-1" />
                                        </span>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No reviews available.</p>
                    )}

                    <div className="text-center mt-4">
                        <button
                            className="btn btn-warning px-6 py-2 rounded-md hover:bg-yellow-600"
                            onClick={handleBookNow}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            <BookigModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                roomDetails={roomDetails}

                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onConfirm={handleConfirmBooking}
            />
        </div>
    );
};

export default RoomDetails;
