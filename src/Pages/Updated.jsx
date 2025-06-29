import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';




const Updated = ({ booking, onClose, isOpen }) => {





    const [selectedDate, setSelectedDate] = useState(
        booking?.date ? new Date(booking.date) : new Date()
    );



    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = 'hidden';  // prevent background scroll
        return () => { document.body.style.overflow = 'auto'; };
    }, []);

    const handleUpdate = async () => {
        if (!booking || !booking._id) {
            Swal.fire({
                title: '❌ Update Failed',
                text: 'Booking information is missing.',
                icon: 'error',
            });
            return;
        }

        try {
            await axios.patch(`https://hotel-booking-serversite.vercel.app/bookings/${booking._id}`, {
                date: selectedDate.toISOString(),
            });

            Swal.fire({
                title: '✅ Date Updated',
                text: 'Your booking date has been successfully updated.',
                icon: 'success',
            });

            navigate('/')
            onClose();
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: '❌ Update Failed',
                text: 'Please try again.',
                icon: 'error',
            });
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                    <h2 className="text-xl font-semibold mb-4 text-center">📆 Please Select a New Date</h2>

                    <label className="block font-medium mb-2">Date:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={setSelectedDate}
                        dateFormat="MMMM d, yyyy"
                        minDate={new Date()}
                        className="border p-2 w-full rounded"
                    />

                    <div className="flex justify-end mt-6 gap-2">
                        <button
                            onClick={onClose}
                            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Updated;
