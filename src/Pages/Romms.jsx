import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoStar } from "react-icons/io5";
import axios from 'axios';

const Romms = () => {

    const [rooms, setRooms] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedRange, setSelectedRange] = useState('');
    const [isFiltered, setIsFiltered] = useState(false);
    const navigate = useNavigate();




    useEffect(() => {
        fetchAllRooms();
    }, []);



    const fetchAllRooms = async () => {
        try {
            const res = await axios.get('https://hotel-booking-serversite.vercel.app/hotel');
            setRooms(res.data);
            setIsFiltered(false);
            setSelectedRange('');
        } catch (err) {
            console.error('Error fetching all rooms:', err);
        }
    };

    //  Filter API call
    const fetchFilteredRooms = async (min, max) => {
        try {
            const res = await axios.get(`https://hotel-booking-serversite.vercel.app/hotel?min=${min}&max=${max}`);
            console.log('Filtered data:', res.data);

            if (Array.isArray(res.data)) {
                setRooms(res.data);
            } else {
                setRooms([]);
            }
        } catch (err) {
            console.error('Error fetching filtered rooms:', err);
        }
    };




    const handleDropdownFilter = (min, max) => {
        setShowDropdown(false);
        setSelectedRange(`৳${min} - ৳${max}`);
        fetchFilteredRooms(min, max);
        setIsFiltered(true);
    };

    const handleCardClick = (_id) => {
        navigate(`/roomdetails/${_id}`);
    };






    return (

        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-6">🛌 All Available Rooms</h2>


            <div className="relative inline-block text-left mb-10">
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-6 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    Filter by Price
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {showDropdown && (
                    <div className="origin-top-right absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            {[
                                [0, 999],
                                [1000, 1999],
                                [2000, 2999],
                                [3000, 3999],
                                [4000, 4999],
                                [5000, 10000],
                            ].map(([min, max]) => (
                                <button
                                    key={`${min}-${max}`}
                                    onClick={() => handleDropdownFilter(min, max)}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                    ৳{min} - ৳{max}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* No Room Message */}
            {isFiltered && rooms.length === 0 ? (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">
                        No rooms found in the selected range {selectedRange && `(${selectedRange})`}.
                    </h2>
                    <button
                        onClick={fetchAllRooms}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        🔁 Show All Rooms
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.length > 0 ? (
                        rooms
                            .filter(room => room.image && room.description && room.name)
                            .map(room => (
                                <div
                                    key={room._id}
                                    onClick={() => handleCardClick(room._id || room.roomId)}
                                    className="cursor-pointer bg-white border border-gray-100 shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
                                >
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-5 text-center">
                                        <h3 className="text-xl font-semibold mb-1 text-gray-800">{room.name}</h3>
                                        <p className="text-gray-500 text-sm mb-2">
                                            {room.description || 'No description available'}
                                        </p>
                                        <p className="text-lg font-bold mb-1 text-blue-700">৳{room.price} / night</p>
                                        <p
                                            className={`font-medium mb-2 ${room.isAvailable ? 'text-green-600' : 'text-red-600'
                                                }`}
                                        >
                                            {room.isAvailable ? 'Available' : 'Booked'}
                                        </p>
                                        <p className="text-yellow-600 font-medium flex items-center justify-center gap-1">
                                            <IoStar className="text-xl" />
                                            {room.reviews?.length || 0} Reviews
                                        </p>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 text-lg">
                            No rooms available right now.
                        </p>
                    )}
                </div>

            )}

        </div>
    );
};

export default Romms;

