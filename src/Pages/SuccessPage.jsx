// src/Pages/SuccessPage.js
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Order Successful</h1>
        <p className="text-center text-gray-700">Thank you for your purchase! Your order has been placed successfully.</p>
        <div className="mt-6 text-center">
            <Link to="/" className="text-blue-600 hover:underline">
              Back to Home
            </Link>
          </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
