import React, { use, useEffect, useState } from 'react';
import { AuthContex } from '../Compontents/Authprovider/Authcontext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Updated from './Updated';
import Review from './Review';
import RoomReview from './RoomReview';
import moment from 'moment';

const Mybookings = () => {

    const { user } = use(AuthContex);
    const accessToken = user?.accessToken;

    console.log('token in the context', user.accessToken)


    const [bookings, setBookings] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Separate states for review and view modals
    const [selectedRoomIdForReview, setSelectedRoomIdForReview] = useState(null);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    const [selectedRoomIdForView, setSelectedRoomIdForView] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://hotel-booking-serversite.vercel.app/bookings?email=${user.email}`, {

                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            })
                .then(res => {
                    setBookings(res.data);
                    SetLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching bookings:', err);
                    SetLoading(false);
                });
        }
    }, [user?.email, accessToken]);





    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel booking!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`https://hotel-booking-serversite.vercel.app/bookings/${id}`);
                    if (res.status === 200) {
                        Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
                        setBookings(prev => prev.filter(booking => booking._id !== id));
                    }
                } catch (error) {
                    Swal.fire("Error!", "Could not cancel booking.", "error");
                    console.error(error);
                }
            }
        });
    };


    if (loading) {
        return <div className="text-center py-10"> Loading your bookings...</div>;
    }

    return (



        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">🛌 My Bookings</h1>

            {bookings.length === 0 ? (
                <p className="text-center text-gray-500">You have no bookings yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full border">
                        <thead className="bg-gray-200">
                            <tr>
                                <th>Image</th>
                                <th>Room Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => {

                                const bookingDate = moment(booking.date, 'YYYY-MM-DD');
                                const today = moment();
                                const daysLeft = bookingDate.diff(today, 'days');

                                return (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td>
                                            <img src={booking.image} alt={booking.roomName} className="w-20 h-16 object-cover rounded" />
                                        </td>
                                        <td>{booking.roomName}</td>
                                        <td>${booking.price}</td>
                                        <td>{booking.date}</td>
                                        <td className={booking.isAvailable ? "text-green-600" : "text-red-600"}>
                                            {booking.isAvailable ? "Confirmed" : "Pending"}
                                        </td>
                                        <td>
                                            {daysLeft >= 1 ? (
                                                <button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-error mr-2">
                                                    <MdDelete /> Cancel
                                                </button>
                                            ) : (
                                                <button disabled className="btn btn-sm btn-error mr-2 opacity-50 cursor-not-allowed" title="Cancellation period expired">
                                                    <MdDelete /> Cancel
                                                </button>
                                            )}

                                            <button
                                                onClick={() => {
                                                    setSelectedRoomIdForView(booking.roomId);
                                                    setIsViewModalOpen(true);
                                                }}
                                                className="btn btn-sm btn-primary mr-2"
                                            >
                                                View Reviews
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setSelectedRoomIdForReview(booking.roomId);
                                                    setIsReviewModalOpen(true);
                                                }}
                                                className="btn btn-sm btn-info mr-2"
                                            >
                                                Give Review
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setSelectedBooking(booking);
                                                    setIsModalOpen(true);
                                                }}
                                                className="btn btn-sm btn-warning"
                                            >
                                                Update Date
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedBooking && (
                <Updated
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    booking={selectedBooking}
                    setBookings={setBookings}
                />
            )}

            <Review
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                roomId={selectedRoomIdForReview}
                user={user}
            />

            <RoomReview
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                roomId={selectedRoomIdForView}
            />
        </div>




    );
};
export default Mybookings;



