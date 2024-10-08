import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Overview from '../Components/Overview';
import Products from '../Components/Products';
import Orders from '../Components/Orders';
import Customers from '../Components/Customers';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const navigate = useNavigate(); // Initialize useNavigate

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'Products':
        return <Products />;
      case 'Orders':
        return <Orders />;
      case 'Customers':
        return <Customers />;
      default:
        return <Overview />;
    }
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing tokens, etc.)
    navigate('/'); // Redirect to /home after logout
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Nexo Admin</div>
        <ul className="space-y-2 p-4 flex-grow">
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition ${
                activeTab === 'Overview' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveTab('Overview')}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition ${
                activeTab === 'Products' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveTab('Products')}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition ${
                activeTab === 'Orders' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveTab('Orders')}
            >
              Orders
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition ${
                activeTab === 'Customers' ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveTab('Customers')}
            >
              Customers
            </button>
          </li>
        </ul>
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 mb-8  text-red-600 py-2 rounded-lg hover:bg-gray-700 transition mt-auto"
        >
          Logout
        </button>
      </nav>

      {/* Main content area */}
      <div className="flex-grow bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">{activeTab}</h1>
        {renderContent()}
      </div>
    </div>
  );
}

export default DashboardPage;
