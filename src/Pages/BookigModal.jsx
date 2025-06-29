import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../Compontents/hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


const BookigModal = ({ isOpen, onClose, roomDetails, selectedDate, setSelectedDate, }) => {



    const { id: roomId } = useParams();

    const { user } = useAuth()

    console.log(roomId, user)

    const navigate = useNavigate()



    const handleConfirmBooking = async () => {
        const bookingData = {
            roomId: roomDetails._id,
            roomName: roomDetails.name,
            price: roomDetails.price,
            date: selectedDate.toISOString(),
            userEmail: user?.email,
            status: 'pending',
            image: roomDetails.image,
        };

        axios.post('https://hotel-booking-serversite.vercel.app/bookings', bookingData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Booking Successful 🎉',
                        showConfirmButton: false,
                        timer: 1500


                    });

                    setTimeout(() => {
                        navigate("/mybookings");
                    }, 1500);
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Room Booking Summary
                </h2>

                <p><strong>Name:</strong> {roomDetails.name}</p>
                <p><strong>Description:</strong> {roomDetails.description}</p>
                <p><strong>Price:</strong> ${roomDetails.price} / night</p>

                <div className="my-4">
                    <label className="block font-medium mb-1">Select Date:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MMMM d, yyyy"
                        minDate={new Date()}
                    />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={onClose} className="px-4 py-2 border rounded hover:bg-gray-100">
                        Cancel
                    </button>
                    <button onClick={handleConfirmBooking} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookigModal;

