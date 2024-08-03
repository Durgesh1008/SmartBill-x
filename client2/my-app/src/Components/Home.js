import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-8271d2b08d064eebaa88c2852048f9d2.jpg)' }}
    >
      <nav className={`sticky top-0 flex justify-between items-center p-4  transition ${scrolled ? 'bg-black' : ''}`}>
        <div className="flex items-center">
          <span className="text-2xl mr-2">🛒</span>
          <h1 className="text-xl font-bold">FastCart</h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500 transition">
            <Link to='/login'>Login</Link>
          </button>
          <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500 transition">
            <Link to='/register'>Register</Link>
          </button>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-900 bg-opacity-75">
        <h1 className="text-4xl font-bold mb-4">Welcome to FastCart</h1>
        <p className="text-lg mb-8">Smart Billing Made Simple and Efficient</p>
        <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-500 transition">
          <Link to='/register'>Get Started</Link>
        </button>
      </section>

      <section className="py-20 bg-gray-800  bg-opacity-65">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/The_Importance_of_User_Authentication_Methods_in_Cyber_Security.jpg" alt="User Authentication" className=" w-full h-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-white">User Authentication</h3>
                <p className="text-gray-300">Secure login and registration with email/password and social login options.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <img src="https://media.istockphoto.com/id/1490447299/photo/big-data-analytics-diagrams-and-graphs-on-virtual-screen-business-intelligence-analysis.webp?b=1&s=170667a&w=0&k=20&c=cn6_SzCtD0CDdl5e1GFUYeP-ZizKr7SviOpE6-fEA7A=" alt="Dashboard" className=" w-full h-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-white">Dashboard</h3>
                <p className="text-gray-300">Overview of transactions, invoices, and financial summaries.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <img src="https://plus.unsplash.com/premium_photo-1679784204535-e623926075cb?w=500&auto=format&cover=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW52b2ljZSUyME1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" alt="Invoice Management" className=" w-full h-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-white">Invoice Management</h3>
                <p className="text-gray-300">Create, send, and manage invoices with customization options.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <img src="https://plus.unsplash.com/premium_photo-1682177060525-2ebe35aa1337?w=500&auto=format&cover=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGF5bWVudCUyMEludGVncmF0aW9ufGVufDB8fDB8fHww" alt="Payment Integration" className=" w-full h-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-white">Payment Integration</h3>
                <p className="text-gray-300">Integrate with popular payment gateways for online payments.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <img src="https://img.freepik.com/free-vector/businessmen-shaking-hands-through-display-video-call-smart-phone-internet-business-concept-cartoon-character-vector-illustration_1150-56245.jpg" alt="Customer Management" className=" w-full h-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-white">Customer Management</h3>
                <p className="text-gray-300">Manage customer information and billing history.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <img src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&cover=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVwb3J0aW5nJTIwYW5kJTIwQW5hbHl0aWNzfGVufDB8fDB8fHww" alt="Reporting and Analytics" className=" w-full h-full mx-auto mb-4 object-cover" />
                <h3 className="text-2xl font-bold mb-2 text-white">Reporting and Analytics</h3>
                <p className="text-gray-300">Generate detailed financial reports and insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="py-20 bg-gray-900 bg-opacity-75">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">User Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 bg-opacity-75 rounded-lg">
              <p className="mb-4">"FastCart has revolutionized the way we handle billing. It's fast and easy to use!"</p>
              <h3 className="text-xl font-bold">- One</h3>
            </div>
            <div className="text-center p-6 bg-gray-800 bg-opacity-75 rounded-lg">
              <p className="mb-4">"The best billing software we've ever used. Highly recommend!"</p>
              <h3 className="text-xl font-bold">-  Two</h3>
            </div>
            <div className="text-center p-6 bg-gray-800 bg-opacity-75 rounded-lg">
              <p className="mb-4">"Excellent customer service and great functionality."</p>
              <h3 className="text-xl font-bold">-  Three</h3>
            </div>
            <div className="text-center p-6 bg-gray-800 bg-opacity-75 rounded-lg">
              <p className="mb-4">"A game-changer for our business. Easy to use and reliable."</p>
              <h3 className="text-xl font-bold">-  Four</h3>
            </div>
            <div className="text-center p-6 bg-gray-800 bg-opacity-75 rounded-lg">
              <p className="mb-4">"FastCart simplifies our billing process like never before."</p>
              <h3 className="text-xl font-bold">-  Five</h3>
            </div>
            <div className="text-center p-6 bg-gray-800 bg-opacity-75 rounded-lg">
              <p className="mb-4">"Highly intuitive and efficient. Love using it!"</p>
              <h3 className="text-xl font-bold">-  Six</h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-800 bg-opacity-75">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 FastCart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
