import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { Link } from 'react-router-dom';

function SignupPage() {
    const { register, handleSubmit } = useForm();

    async function signUpUser(data) {
        console.log("data",data)
        try {
            const res = await axios.post('http://localhost:5000/api/user/create', data)
            if(res){
                console.log("sign up res",res)
            }

        } catch (error) {
            console.log("error in creating user", error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-6">
                    Sign Up
                </h1>

                <form onSubmit={handleSubmit(signUpUser)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('firstName', { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('lastName', { required: true })}
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        {...register('email', { required: true })}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        {...register('password', { required: true })}
                    />

                    <div className="space-y-2">
                        <label className="block text-gray-700">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Male"
                                    className="mr-2"
                                    {...register('gender', { required: true })}
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Female"
                                    className="mr-2"
                                    {...register('gender', { required: true })}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('dateOfBirth', { required: true })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                 
                 <Link to='/login'>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                        Log In
                    </span>
                </p>
                </Link>
            </div>
        </div>
    );
}

export default SignupPage;
