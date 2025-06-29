import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6">
            <img
                src="https://i.ibb.co/pj9XdfNZ/not-found.webp" // You can use JPG too if you want
                alt="404 Not Found"
                className="w-96 mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-error mb-4">404 - Page Not Found</h1>
            <p className="mb-6 text-lg text-gray-600">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/">
                <button className="btn btn-primary"> Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;