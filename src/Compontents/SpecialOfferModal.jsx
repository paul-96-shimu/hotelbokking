import React, { useEffect, useState } from 'react';


const SpecialOfferModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        setIsOpen(true);
    }, []);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
            <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative">
                {/* Close button */}
                <button
                    className="absolute top-2 right-2 text-xl font-bold"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                >
                    ×
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center">Special Offers & Promotions</h2>

                <img
                    src="https://i.ibb.co/9mNj8d1Q/special.jpg"
                    alt="Special Offer"
                    className="w-full mb-4 rounded"
                />

                <p className="text-center text-lg font-semibold text-amber-700">
                    Get 30% discount on all bookings this month! Don't miss out.
                </p>
            </div>
        </div>
    );
};

export default SpecialOfferModal;