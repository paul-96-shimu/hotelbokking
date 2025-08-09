import React, { use, useState } from 'react';
import singinLottie from '../assets/loities/singin.json'
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { AuthContex } from '../Compontents/Authprovider/Authcontext';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const Login = () => {

    const { logIn } = use(AuthContex)

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        logIn(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'LogIn Successful 🎉',
                    showConfirmButton: false,
                    timer: 1500


                });

                setTimeout(() => {
                    navigate("/");

                }, 1500);


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });


    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center justify-center px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 w-full max-w-6xl mx-auto p-4">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2">
                    <Lottie animationData={singinLottie} loop={true} />
                </div>

                {/* Login Form */}
                <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Welcome Back!</h1>

                    <form onSubmit={handleLogIn} className="space-y-4">
                        <div>
                            <label className="label font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className='relative'>
                            <label className="label font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />

                            <span
                                className="absolute top-10 right-3 cursor-pointer text-lg text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <a className="link link-hover text-blue-500">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>

                    {/* Social Login */}
                    <SocialLogin></SocialLogin>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-blue-600 font-medium hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;