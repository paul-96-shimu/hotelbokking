import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import SpecialOfferModal from './SpecialOfferModal';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get('https://hotel-booking-serversite.vercel.app/reviews/home?sort=desc&limit=5');
                setReviews(res.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='container mx-auto px-4'>
            <SpecialOfferModal></SpecialOfferModal>
            <Banner />

            <h2 className="text-2xl font-bold my-6 text-center">User Reviews</h2>

            {reviews.length > 0 ? (
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review._id} className="p-6 bg-gray-100 rounded shadow-md mx-4">
                            <p className="font-semibold mb-2">{review.username || 'Anonymous'}</p>
                            <p className="mb-2">Rating: {review.rating} / 5</p>
                            <p className="italic text-gray-700 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(review.timestamp).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p className="text-center text-gray-500">No reviews available</p>
            )}

            <Footer />
        </div>
    );

};

export default Home;
