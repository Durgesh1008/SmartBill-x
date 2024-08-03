import React, { useState } from 'react';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const Navigate = useNavigate();
    const [userData, setUserData] = useState({
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

    const handleRoleChange = (e) => {
        const { value } = e.target;
        setUserData({
            ...userData,
            role: value
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
            const response = await axios.post('http://localhost:3001/login', userData);
            Toastify({
                text: "Login successful",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
            }).showToast();
            Navigate('/')
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

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-8271d2b08d064eebaa88c2852048f9d2.jpg)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md bg-black bg-opacity-40 shadow shadow-zinc-400 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
                    <form className="space-y-4" onSubmit={SendForm}>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300">Login As</label>
                            <select name="role" id="role" value={userData.role} onChange={handleRoleChange} className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-black bg-opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Customer">Customer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" name="email" id="email" value={userData.email} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-black bg-opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                            <input type="password" name="password" id="password" value={userData.password} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-600 rounded-md bg-black bg-opacity-50 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="text-center text-sm text-gray-300">
                            <Link to="/forgot-password" className="text-blue-400 hover:underline">Forgot Password?</Link>
                        </div>
                        <div className="text-center text-sm text-gray-300 mt-4">
                            Don’t have an account? <Link to="/register" className="text-blue-400 hover:underline">Create an Account</Link>
                        </div>
                        <div>
                            <Link to='/dashbord'><button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500">Login</button></Link>
                        </div>
                    </form>
                    <div className="mt-10 text-center">
                        <div className="text-black mb-3 mt-3">OR</div>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-500">
                                <FaEnvelope />
                            </button>
                            <button className="flex items-center justify-center bg-red-500 text-white p-3 rounded-full hover:bg-red-600 focus:ring-2 focus:ring-red-500">
                                <FaGoogle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
