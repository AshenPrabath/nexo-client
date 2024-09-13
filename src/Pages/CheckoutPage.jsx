// src/Pages/CheckoutPage.js
import React, { useState } from 'react';
import { createCustomer } from '../Services/CustomerService';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CheckoutPage = () => {
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: {
      street: '',
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'street') {
      setCustomer((prev) => ({ ...prev, address: { ...prev.address, street: value } }));
    } else {
      setCustomer((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Create customer and get the response with customerId
      const customerResponse = await createCustomer(customer);
      setLoading(false);
      console.log(customerResponse);
      // Redirect to the confirmation page with the customer ID
      navigate(`/confirmation/${customerResponse}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Checkout</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstname"
              value={customer.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={customer.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="street"
              value={customer.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Submit Order'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
