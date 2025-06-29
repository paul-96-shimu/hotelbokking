import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import registerLottie from '../assets/loities/register.json';
import SocialLogin from './SocialLogin';
import { AuthContex } from '../Compontents/Authprovider/Authcontext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser } = use(AuthContex)
    const [showPassword, setPassword] = useState(false)
    const naviget = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;



        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters long and include both uppercase and lowercase letters.");
            return;
        }

        console.log({ name, email, password, photo });

        createUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successful 🎉',
                    showConfirmButton: false,
                    timer: 1500


                });

                setTimeout(() => {
                    naviget("/rooms");
                }, 1500);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


                console.log(errorCode, errorMessage, " errorMessage")

            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10 max-w-6xl w-full shadow-2xl rounded-2xl bg-white p-6">

                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2">
                    <Lottie animationData={registerLottie} loop={true} />
                </div>

                {/* Register Form */}
                <div className="w-full lg:w-1/2 px-4">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="https://your-photo-url.jpg"
                                className="input input-bordered w-full"
                            />
                        </div>


                        <div className='relative'>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="********"
                                className="input input-bordered w-full"
                                required
                            />

                            <span
                                className="absolute top-10 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>


                        <button type="submit" className="btn btn-primary w-full mt-2">Register</button>

                        <SocialLogin></SocialLogin>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

