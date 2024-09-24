import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../Store/StoreSlice';
import { Link } from 'react-router-dom'
// import  decode  from 'jwt-decode';

function LoginPage() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    async function logInUser(data) {
        try {

            const res = await axios.post('http://localhost:5000/api/user/login', data)
            if (res) {
                console.log("login res", res)
                localStorage.setItem('auth-data', res)
                // const decodedToken = decode(res.data.token);
                // console.log("decodeToken",decodedToken)
                dispatch(setAuthenticated())
            }

        } catch (error) {
            console.log("error in login", error)
        }

    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-6">
                    Facebook
                </h1>

                <div className="space-y-4">
                    <p className="text-gray-700 text-center text-sm sm:text-base">Log in to Facebook</p>

                    <form onSubmit={handleSubmit(logInUser)}>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email "
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            'Email address must be a valid address',
                                    },
                                })}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                {...register('password', {
                                    required: true,
                                })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="text-blue-600 text-center mt-4 text-sm sm:text-base cursor-pointer hover:underline">
                        Forgot account?
                    </p>

                    <div className="text-center mt-6">
                        <Link
                            to="/signup"
                            className="w-full bg-green-500 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300 block text-center"
                        >
                            Create New Account
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;
