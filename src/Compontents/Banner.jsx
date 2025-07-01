import React from 'react';
import { Link } from 'react-router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Banner = () => {
    const position = [23.7508857, 90.3912915];

    return (
        // <div className='text-center py-10 bg-gradient-to-b from-white via-slate-50 to-white'>

        //     {/* Title Section */}
        //     <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800 leading-tight">
        //         Luxurious Stay Awaits
        //     </h1>
        //     <p className="mb-8 text-lg text-gray-600">
        //         Enjoy 5-star comfort with breathtaking views and world-class amenities.
        //     </p>



        //     <div className="carousel rounded-xl overflow-hidden shadow-lg max-w-6xl mx-auto">
        //         {[
        //             'https://i.ibb.co/1wH7McY/hotel-img3.jpg',
        //             'https://i.ibb.co/NgHcBw8g/hotel-img2.jpg',
        //             'https://i.ibb.co/dJg9kqyp/hotel-img1.jpg',
        //             'https://i.ibb.co/d0ttR8VR/hotel4.jpg'
        //         ].map((img, idx) => (
        //             <div key={idx} id={`slide${idx + 1}`} className="carousel-item relative w-full group">
        //                 <img
        //                     src={img}
        //                     className="w-full h-[75vh] object-cover transition-transform duration-500 group-hover:scale-105"
        //                     alt={`Slide ${idx + 1}`}
        //                 />

        //                 {/* Overlay content */}
        //                 <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center p-4">
        //                     <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxurious Stay Awaits</h2>
        //                     <p className="text-lg mb-6 max-w-xl">
        //                         Enjoy 5-star comfort with breathtaking views and world-class amenities.
        //                     </p>
        //                     <Link to="/rooms">
        //                         <button className="btn btn-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-lg">
        //                             Explore Rooms
        //                         </button>
        //                     </Link>
        //                 </div>

        //                 {/* Slide navigation */}
        //                 <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
        //                     <a href={`#slide${(idx - 1 + 4) % 4 + 1}`} className="btn btn-circle">❮</a>
        //                     <a href={`#slide${(idx + 1) % 4 + 1}`} className="btn btn-circle">❯</a>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>



        //     {/* Map Section */}
        //     <div className="mt-20 px-4 max-w-6xl mx-auto text-left">
        //         <h2 className="text-3xl font-bold mb-4 text-center">📍 Our Location</h2>
        //         <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
        //             <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        //                 <TileLayer
        //                     attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //                 />
        //                 <Marker position={position}>
        //                     <Popup>Hotel X Dhaka <br /> Welcome to your luxurious stay.</Popup>
        //                 </Marker>
        //             </MapContainer>
        //         </div>
        //     </div>

        //     {/* Featured Rooms */}
        //     <div className="mt-20 px-4 max-w-7xl mx-auto">
        //         <h2 className="text-3xl font-semibold mb-6 text-center">🏨 Featured Rooms</h2>
        //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        //             {[
        //                 {
        //                     id: 1,
        //                     name: "Deluxe King Suite",
        //                     desc: "Spacious luxury room with a king-sized bed, balcony & sea view.",
        //                     img: "https://i.ibb.co/tMQfwyZW/luxery1.jpg"
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "Ocean View Room",
        //                     desc: "Perfect for couples with breathtaking views of the ocean.",
        //                     img: "https://i.ibb.co/SD9HWkCQ/luxry3.jpg"
        //                 },
        //                 {
        //                     id: 3,
        //                     name: "Executive Suite",
        //                     desc: "Elegant setup with workspace and modern interior design.",
        //                     img: "https://i.ibb.co/h1DDbqs0/luxry5.jpg"
        //                 },
        //                 {
        //                     id: 4,
        //                     name: "Family Comfort Room",
        //                     desc: "Ideal for families, includes 2 queen beds and kitchenette.",
        //                     img: "https://i.ibb.co/kgWhyYbL/luxry4.jpg"
        //                 },
        //                 {
        //                     id: 5,
        //                     name: "Honeymoon Suite",
        //                     desc: "Romantic setup with private Jacuzzi & candlelight dining.",
        //                     img: "https://i.ibb.co/39Mhnd3w/luxry6.jpg"
        //                 },
        //                 {
        //                     id: 6,
        //                     name: "Budget Room",
        //                     desc: "Cozy, affordable and perfect for solo travelers or backpackers.",
        //                     img: "https://i.ibb.co/zTn5bVsL/luxry7.jpg"
        //                 },
        //             ]
        //                 .map(room => (
        //                     <div key={room.id} className="card bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-xl">
        //                         <figure>
        //                             <img src={room.img} alt={room.name} className="h-56 w-full object-cover" />
        //                         </figure>
        //                         <div className="card-body text-left">
        //                             <h3 className="card-title text-xl font-semibold">{room.name}</h3>
        //                             <p className="text-sm text-gray-600">{room.desc}</p>
        //                             <div className="card-actions justify-end mt-4">
        //                                 {/* <Link to={`/room/${room.id}`}>
        //                                     <button className="btn btn-sm btn-primary text-white">Book Now</button>
        //                                 </Link> */}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))}
        //         </div>
        //     </div>

        //     {/* Why Choose Us */}
        //     <div className="mt-20 px-4 max-w-6xl mx-auto">
        //         <h2 className="text-3xl font-bold mb-6 text-center">💎 Why Choose Us</h2>
        //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        //             {[
        //                 {
        //                     title: "Prime Location",
        //                     text: "Located in the heart of the city, close to tourist spots and business hubs."
        //                 },
        //                 {
        //                     title: "Luxury & Comfort",
        //                     text: "Enjoy lavish rooms, spa services, fine dining, and a rooftop pool."
        //                 },
        //                 {
        //                     title: "24/7 Support",
        //                     text: "Our multilingual staff is available 24/7 to assist you anytime."
        //                 }
        //             ].map((feature, index) => (
        //                 <div key={index} className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
        //                     <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        //                     <p className="text-gray-600">{feature.text}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        //     {/* Testimonials */}
        //     <div className="mt-20 px-4 max-w-6xl mx-auto mb-20">
        //         <h2 className="text-3xl font-bold mb-6 text-center">💬 What Our Guests Say</h2>
        //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        //             {[
        //                 {
        //                     name: "Sarah K.",
        //                     quote: "Absolutely amazing stay! The staff was incredibly helpful and the view was unforgettable."
        //                 },
        //                 {
        //                     name: "James T.",
        //                     quote: "One of the best hotel experiences. The food, the room, and the ambience were top-notch."
        //                 },
        //                 {
        //                     name: "Ayesha R.",
        //                     quote: "A romantic getaway to remember. Jacuzzi and candlelight dinner were perfect!"
        //                 }
        //             ].map((review, idx) => (
        //                 <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        //                     <p className="mb-2 italic text-gray-700">"{review.quote}"</p>
        //                     <h4 className="font-bold text-gray-800">— {review.name}</h4>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>



        <div className='bg-gradient-to-b from-white via-slate-50 to-white'>

            {/* Hero / Carousel Section */}
            <div className="carousel rounded-xl overflow-hidden shadow-lg max-w-7xl mx-auto h-[70vh]">
                {[
                    'https://i.ibb.co/1wH7McY/hotel-img3.jpg',
                    'https://i.ibb.co/NgHcBw8g/hotel-img2.jpg',
                    'https://i.ibb.co/dJg9kqyp/hotel-img1.jpg',
                    'https://i.ibb.co/d0ttR8VR/hotel4.jpg'
                ].map((img, idx) => (
                    <div key={idx} id={`slide${idx + 1}`} className="carousel-item relative w-full">
                        <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxurious Stay Awaits</h2>
                            <p className="text-lg mb-6 max-w-xl">
                                Enjoy 5-star comfort with breathtaking views and world-class amenities.
                            </p>
                            <Link to="/rooms">
                                <button className="btn btn-primary text-white">Explore Rooms</button>
                            </Link>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
                            <a href={`#slide${(idx - 1 + 4) % 4 + 1}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${(idx + 1) % 4 + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Rooms Section */}
            <div className="mt-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">🏨 Featured Rooms</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            id: 1,
                            name: "Deluxe King Suite",
                            desc: "Spacious luxury room with a king-sized bed, balcony & sea view.",
                            img: "https://i.ibb.co/tMQfwyZW/luxery1.jpg"
                        },
                        {
                            id: 2,
                            name: "Ocean View Room",
                            desc: "Perfect for couples with breathtaking views of the ocean.",
                            img: "https://i.ibb.co/SD9HWkCQ/luxry3.jpg"
                        },
                        {
                            id: 3,
                            name: "Executive Suite",
                            desc: "Elegant setup with workspace and modern interior design.",
                            img: "https://i.ibb.co/h1DDbqs0/luxry5.jpg"
                        },
                        {
                            id: 4,
                            name: "Family Comfort Room",
                            desc: "Ideal for families, includes 2 queen beds and kitchenette.",
                            img: "https://i.ibb.co/kgWhyYbL/luxry4.jpg"
                        },
                    ].map(room => (
                        <div key={room.id} className="card bg-white shadow-md hover:shadow-xl rounded-xl transition-all duration-300">
                            <figure>
                                <img src={room.img} alt={room.name} className="h-48 w-full object-cover rounded-t-xl" />
                            </figure>
                            <div className="card-body">
                                <h3 className="text-xl font-semibold">{room.name}</h3>
                                <p className="text-sm text-gray-600">{room.desc}</p>
                                <div className="card-actions justify-end mt-3">
                                    <Link to={`/room/${room.id}`}>
                                        <button className="btn btn-outline btn-sm">See More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">💎 Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Prime Location",
                            text: "Located in the heart of the city, close to tourist spots and business hubs."
                        },
                        {
                            title: "Luxury & Comfort",
                            text: "Enjoy lavish rooms, spa services, fine dining, and a rooftop pool."
                        },
                        {
                            title: "24/7 Support",
                            text: "Our multilingual staff is available 24/7 to assist you anytime."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg text-black">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">💬 Guest Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Sarah K.",
                            quote: "Absolutely amazing stay! The staff was incredibly helpful and the view was unforgettable."
                        },
                        {
                            name: "James T.",
                            quote: "One of the best hotel experiences. The food, the room, and the ambience were top-notch."
                        },
                        {
                            name: "Ayesha R.",
                            quote: "A romantic getaway to remember. Jacuzzi and candlelight dinner were perfect!"
                        }
                    ].map((review, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                            <p className="italic text-gray-700 mb-2">"{review.quote}"</p>
                            <h4 className="font-semibold text-gray-800">— {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">📍 Our Location</h2>
                <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
                    <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>Hotel X Dhaka<br />Welcome to your luxurious stay.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </div>

    );
};

export default Banner;

