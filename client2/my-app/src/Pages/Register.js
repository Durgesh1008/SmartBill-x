import React, { useState } from 'react';
import { FaGoogle, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setUserData({
            ...userData,
            role: userData.role === name ? '' : name 
        });
    };

    const SendForm = async (e) => {
        e.preventDefault();

        if (userData.password.length < 6) {
            Toastify({
                text: "Password must be at least 6 characters long",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
            }).showToast();
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/register', userData);
            Toastify({
                text: "User registered successfully",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
            }).showToast();
            navigate('/login');
        } catch (error) {
            let errorMessage = 'An error occurred. Please try again.';
            if (error.response && error.response.data && error.response.data.error) {
                errorMessage = error.response.data.error;
            }
            Toastify({
                text: errorMessage,
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
            }).showToast();
        }
    };

    const handleLogin = () => {
        window.location.href = 'http://localhost:3001/google';
    };

    

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-8271d2b08d064eebaa88c2852048f9d2.jpg)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-lg bg-black bg-opacity-20 shadow shadow-zinc-400 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Register</h2>
                    <form className="space-y-4 h-full" onSubmit={SendForm}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" name="name" id="name" value={userData.name} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-black bg-opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" name="email" id="email" value={userData.email} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-black bg-opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                            <input type="password" name="password" id="password" value={userData.password} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-black bg-opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Who are you?</label>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" name="Admin" id="Admin" checked={userData.role === "Admin"} onChange={handleCheckboxChange} className="mr-2 h-4 w-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-500" />
                                    <label htmlFor="Admin" className="text-sm text-gray-300">Admin</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" name="Customer" id="Customer" checked={userData.role === "Customer"} onChange={handleCheckboxChange} className="mr-2 h-4 w-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-500" />
                                    <label htmlFor="Customer" className="text-sm text-gray-300">Customer</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500">Register</button>
                        </div>
                        <div className="text-center text-sm text-gray-300">
                            Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Click Here</Link>
                        </div>
                    </form>
                    <div className="mt-10 text-center">
                        <div className="text-black mb-3 mt-3">OR</div>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-500">
                                <FaEnvelope />
                            </button>
                            <button onClick={handleLogin} className="flex items-center justify-center bg-red-500 text-white p-3 rounded-full hover:bg-red-600 focus:ring-2 focus:ring-red-500">
                                <FaGoogle />
                            </button>
                            <button className="flex items-center justify-center bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 focus:ring-2 focus:ring-blue-400">
                                <FaTwitter />
                            </button>
                            <button className="flex items-center justify-center bg-green-500 text-white p-3 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-500">
                                <FaPhoneAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
