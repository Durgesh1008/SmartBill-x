import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import jsPDF from 'jspdf';
import 'tailwindcss/tailwind.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState({ id: '', date: '', price: '', quantity: '' });
    const [products, setProducts] = useState([]);

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const barData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const transactions = [
        { id: 1, date: '2024-07-20', amount: '$120.00', status: 'Completed' },
        { id: 2, date: '2024-07-21', amount: '$75.00', status: 'Pending' },
        { id: 3, date: '2024-07-22', amount: '$300.00', status: 'Completed' },
        { id: 4, date: '2024-07-23', amount: '$200.00', status: 'Failed' },
        { id: 1, date: '2024-07-06', amount: '$120.00', status: 'Completed' },
        { id: 2, date: '2024-07-04', amount: '$75.00', status: 'Pending' },
        { id: 3, date: '2024-07-02', amount: '$300.00', status: 'Completed' },
        { id: 4, date: '2024-07-01', amount: '$200.00', status: 'Failed' },
    ];

    const handlePayment = (e) => {
        e.preventDefault();
        const doc = new jsPDF();
        doc.text('Invoice', 20, 20);
        doc.text(`Amount: ${amount}`, 20, 30);
        doc.text(`Payment Method: ${paymentMethod}`, 20, 40);
        doc.save('invoice.pdf');
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        setProducts([...products, newProduct]);
        setNewProduct({ id: '', date: '', price: '', quantity: '' });
        setShowAddForm(false);
    };

    return (
        <div className="flex h-screen overflow-hidden font-sans bg-gray-100">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 p-4 shadow-md">
                <h2 className="text-white text-2xl mb-4">FastCart</h2>
                <ul>
                    <li className="text-white py-2 hover:bg-gray-700 rounded-md px-2"><a href="#">Dashboard</a></li>
                    <li className="text-white py-2 hover:bg-gray-700 rounded-md px-2"><a href="#">Product</a></li>
                    <li className="text-white py-2 hover:bg-gray-700 rounded-md px-2"><a href="#">Payments</a></li>
                    <li className="text-white py-2 hover:bg-gray-700 rounded-md px-2"><a href="#">Invoice</a></li>
                    <li className="text-white py-2 hover:bg-gray-700 rounded-md px-2"><a href="#">Settings</a></li>
                    <li className="text-white py-2 hover:bg-gray-700 rounded-md px-2"><a href="#">Profile</a></li>
                </ul>
            </div>

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ml-64">
                {/* Header */}
                <header className="bg-white shadow-md py-4 px-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                </header>

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {/* Dashboard actions */}
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                            <div className="mb-4 sm:mb-0">
                                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Dashboard</h1>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                                <button
                                    className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 px-4"
                                    onClick={() => setShowAddForm(!showAddForm)}
                                >
                                    Add Product
                                </button>
                                <input type="date" className="form-input text-gray-800 rounded-md border-gray-300" />
                                
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-12 gap-6">
                            {/* Line chart */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="bg-white p-4 shadow-md rounded-lg">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">Line Chart</h2>
                                    <Line data={lineData} />
                                </div>
                            </div>

                            {/* Bar chart */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="bg-white p-4 shadow-md rounded-lg">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">Bar Chart</h2>
                                    <Bar data={barData} />
                                </div>
                            </div>

                            {/* Doughnut chart */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="bg-white p-4 shadow-md rounded-lg">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">Doughnut Chart</h2>
                                    <Doughnut data={doughnutData} />
                                </div>
                            </div>

                            {/* Recent Transactions */}
                            <div className="col-span-12">
                                <div className="bg-white p-4 shadow-md rounded-lg">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-300">
                                            <thead>
                                                <tr className="w-full bg-gray-100 border-b border-gray-300">
                                                    <th className="py-2 px-4">Date</th>
                                                    <th className="py-2 px-4">Amount</th>
                                                    <th className="py-2 px-4">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactions.map((transaction) => (
                                                    <tr key={transaction.id} className="border-b border-gray-200">
                                                        <td className="py-2 px-4">{transaction.date}</td>
                                                        <td className="py-2 px-4">{transaction.amount}</td>
                                                        <td className="py-2 px-4">{transaction.status}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-span-12">
                                <div className="bg-white p-4 shadow-md rounded-lg">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4">Make a Payment</h2>
                                    <form className="space-y-4" onSubmit={handlePayment}>
                                        <div>
                                            <label className="block text-gray-700">Amount</label>
                                            <input
                                                type="text"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                                placeholder="Enter amount"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Payment Method</label>
                                            <select
                                                value={paymentMethod}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                            >
                                                <option>Credit Card</option>
                                                <option>PayPal</option>
                                                <option>Bank Transfer</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 px-4"
                                            >
                                                Pay Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            
                            {showAddForm && (
                                <div className="col-span-12">
                                    <div className="bg-white p-4 shadow-md rounded-lg">
                                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Product</h2>
                                        <form className="space-y-4" onSubmit={handleAddProduct}>
                                            <div>
                                                <label className="block text-gray-700">Product ID</label>
                                                <input
                                                    type="text"
                                                    value={newProduct.id}
                                                    onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                                                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                                    placeholder="Enter Product ID"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700">Date</label>
                                                <input
                                                    type="date"
                                                    value={newProduct.date}
                                                    onChange={(e) => setNewProduct({ ...newProduct, date: e.target.value })}
                                                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700">Price</label>
                                                <input
                                                    type="text"
                                                    value={newProduct.price}
                                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                                    placeholder="Enter Price"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700">Quantity</label>
                                                <input
                                                    type="number"
                                                    value={newProduct.quantity}
                                                    onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                                                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                                    placeholder="Enter Quantity"
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md py-2 px-4"
                                                >
                                                    Add Product
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            
                            {products.length > 0 && (
                                <div className="col-span-12 mt-8">
                                    <div className="bg-white p-4 shadow-md rounded-lg">
                                        <h2 className="text-xl font-bold text-gray-800 mb-4">Added Products</h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-300">
                                                <thead>
                                                    <tr className="w-full bg-gray-100 border-b border-gray-300">
                                                        <th className="py-2 px-4">Product ID</th>
                                                        <th className="py-2 px-4">Date</th>
                                                        <th className="py-2 px-4">Price</th>
                                                        <th className="py-2 px-4">Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((product, index) => (
                                                        <tr key={index} className="border-b border-gray-200">
                                                            <td className="py-2 px-4">{product.id}</td>
                                                            <td className="py-2 px-4">{product.date}</td>
                                                            <td className="py-2 px-4">{product.price}</td>
                                                            <td className="py-2 px-4">{product.quantity}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
