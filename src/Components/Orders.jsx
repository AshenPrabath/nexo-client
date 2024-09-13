import React, { useEffect, useState } from 'react'
import { getOrders } from '../Services/OrderService';
import { getOrderLineByID, orderLineByID } from '../Services/OrderLineService';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderLine, setOrderLine] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getOrders()
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };
  const loadOrderLine = (id) => {
    getOrderLineByID(id)
      .then(data => {
        setOrderLine(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    loadOrderLine(order.id);
    setShowDetailsModal(true);
  };

  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Orders Dashboard</h2>

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Orders Overview</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Reference</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Payment Method</th>
              <th className="py-3 px-6 text-left">Customer ID</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{order.id}</td>
                <td className="py-3 px-6">{order.reference}</td>
                <td className="py-3 px-6">${order.amount.toFixed(2)}</td>
                <td className="py-3 px-6">{order.paymentMethod}</td>
                <td className="py-3 px-6">{order.customerId}</td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleViewDetails(order)}
                    className="bg-blue-500 text-white py-1 px-4 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Reference:</strong> {selectedOrder.reference}</p>
            <p><strong>Amount:</strong> ${selectedOrder.amount.toFixed(2)}</p>
            <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p>
            <p><strong>Customer ID:</strong> {selectedOrder.customerId}</p>
            <div>
              {orderLine.map((item)=>(
                <p>{item.id} {console.log(item)}</p>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="py-2 px-4 bg-gray-300 text-gray-700 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders
