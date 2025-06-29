import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RoomReview = ({ isOpen, onClose, roomId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get(`https://hotel-booking-serversite.vercel.app/reviews?roomId=${roomId}`);
                setReviews(res.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        if (isOpen) {
            fetchReviews();
        }
    }, [roomId, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
                <h2 className="text-2xl font-bold mb-4">Room Reviews</h2>

                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review._id} className="border p-4 rounded mb-3 shadow-sm">
                            <p className="font-semibold">{review.username || 'Anonymous'}</p>
                            <p>⭐ Rating: {review.rating} / 5</p>
                            <p className="italic">{review.comment}</p>
                            <p className="text-sm text-gray-500">{new Date(review.timestamp).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No reviews yet for this room.</p>
                )}

                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
export default RoomReview;