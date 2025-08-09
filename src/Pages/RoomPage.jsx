
import { useParams, useNavigate, Link } from 'react-router';
import { IoStar } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

// Dummy data
const dummyRooms = [
    {
        id: '1',
        name: 'Luxury Suite',
        description: 'A beautiful and spacious suite with sea view.',
        image: 'https://i.ibb.co/HTjxGFvv/hotelroom2.jpg',
        price: 150,
        isAvailable: true,
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Amazing experience!' },
            { user: 'Bob', rating: 4, comment: 'Very comfortable stay.' },
        ],
    },
    {
        id: '2',
        name: 'Cozy Standard Room',
        description: 'A cozy room perfect for couples and solo travelers.',
        image: 'https://i.ibb.co/27k2HPWv/hoteroom1.jpg',
        price: 80,
        isAvailable: false,
        reviews: [
            { user: 'Charlie', rating: 3, comment: 'Good for short stays.' },
        ],
    },
    {
        id: '3',
        name: 'Family Deluxe',
        description: 'Spacious room with multiple beds, ideal for families.',
        image: 'https://i.ibb.co/S4xBYtfJ/hotelromm3.jpg',
        price: 120,
        isAvailable: true,
        reviews: [
            { user: 'David', rating: 5, comment: 'Perfect for our family vacation!' },
            { user: 'Eva', rating: 4, comment: 'Very comfortable and clean.' },
        ],
    },
    {
        id: '4',
        name: 'Economy Single Room',
        description: 'Affordable and compact room for solo travelers.',
        image: 'https://i.ibb.co/7tJFTnhS/hotelroom4.jpg',
        price: 50,
        isAvailable: true,
        reviews: [
            { user: 'Frank', rating: 3, comment: 'Good value for the price.' },
        ],
    },
];

const RoomPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const handleBookNow = () => {
        navigate('/rooms');
    };

    const roomDetails = dummyRooms.find(room => room.id === id);

    if (!roomDetails) {
        return (
            <div className="text-center p-10">
                <p>Room details not found.</p>
                <Link to="/" className="text-blue-600 underline">Go back Home</Link>
            </div>
        );
    }


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


        </div>
    );
};

export default RoomPage;
