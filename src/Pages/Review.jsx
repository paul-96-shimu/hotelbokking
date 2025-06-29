import React, { useState } from 'react';
import Swal from 'sweetalert2';



const Review = ({ isOpen, onClose, roomId, user }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');


    const getUsername = () => {
        if (!user) return "Unknown User";
        return user.name || user.displayName || user.email || "Unknown User";
    };

    const handleSubmit = async () => {
        if (rating < 1 || rating > 5) {
            Swal.fire('Error', 'Please provide a rating between 1 and 5', 'error');
            return;
        }
        if (!comment.trim()) {
            Swal.fire('Error', 'Please write a comment', 'error');
            return;
        }

        try {
            await fetch('https://hotel-booking-serversite.vercel.app/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    roomId,
                    userId: user?._id,
                    username: getUsername(),
                    rating,
                    comment,
                    timestamp: new Date()
                }),
            });
            Swal.fire('Success', 'Review submitted', 'success');
            onClose();
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Failed to submit review', 'error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Review for Room</h2>

                <label className="block mb-1 font-medium">Username</label>
                <input
                    type="text"
                    value={getUsername()}
                    readOnly
                    className="w-full p-2 border rounded mb-4"
                />

                <label className="block mb-1 font-medium">Rating</label>
                <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => setRating(star)}
                            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                            ★
                        </button>
                    ))}
                </div>

                <label className="block mb-1 font-medium">Comment</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Review;


