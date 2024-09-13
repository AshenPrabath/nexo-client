import React, { useEffect, useState } from 'react';
import { getCustomers, updateCustomer, deleteCustomer } from '../Services/CustomerService';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // To toggle modal
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [currentCustomerId, setCurrentCustomerId] = useState(null); // Store the current customer ID
  const [newCustomer, setNewCustomer] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: {
      street: '',
    }
  });

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    getCustomers()
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const handleEditCustomer = (e) => {
    e.preventDefault();
    updateCustomer(currentCustomerId, newCustomer)
      .then(() => {
        setShowModal(false); // Close the modal
        loadCustomers(); // Refresh the customers list
      })
      .catch(error => {
        console.error('Error updating customer:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      // Update nested address fields
      const addressField = name.split('.')[1];
      setNewCustomer({
        ...newCustomer,
        address: {
          ...newCustomer.address,
          [addressField]: value
        }
      });
    } else {
      setNewCustomer({ ...newCustomer, [name]: value });
    }
  };

  const handleEdit = (customer) => {
    setIsEditing(true);
    setCurrentCustomerId(customer.id);
    setNewCustomer({
      firstname: customer.firstname,
      lastname: customer.lastname,
      email: customer.email,
      address: {
        street: customer.address?.street || '',
        houseNumber: customer.address?.houseNumber || '',
        zipCode: customer.address?.zipCode || ''
      }
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      deleteCustomer(id)
        .then(() => {
          loadCustomers(); // Refresh the customers list
        })
        .catch(error => {
          console.error('Error deleting customer:', error);
        });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Customers Dashboard</h2>

      {/* Customers Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Customers Overview</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Customer ID</th>
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Street</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{customer.id}</td>
                <td className="py-3 px-6">{customer.firstname}</td>
                <td className="py-3 px-6">{customer.lastname}</td>
                <td className="py-3 px-6">{customer.email}</td>
                <td className="py-3 px-6">{customer.address?.street || '-'}</td>
                <td className="py-3 px-6">
                  {/* Edit Button */}
                  <button
                    className="mr-2 py-1 px-3 bg-yellow-500 text-white rounded"
                    onClick={() => handleEdit(customer)}
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    className="py-1 px-3 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for editing customer */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
            <form onSubmit={handleEditCustomer}>
              <input
                type="text"
                name="firstname"
                value={newCustomer.firstname}
                onChange={handleInputChange}
                placeholder="First Name"
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastname"
                value={newCustomer.lastname}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={newCustomer.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="address.street"
                value={newCustomer.address.street}
                onChange={handleInputChange}
                placeholder="Street"
                className="block w-full mb-3 p-2 border rounded"
              />
            

              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 py-2 px-4 bg-gray-300 text-gray-700 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded"
                >
                  Update Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
