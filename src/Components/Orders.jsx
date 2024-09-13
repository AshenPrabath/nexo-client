import React from 'react'

const Orders = () => {
  const orderStats = [
    { id: 1, label: 'Total Orders', value: '1,215', description: 'All time' },
    { id: 2, label: 'Pending Orders', value: '78', description: 'Awaiting fulfillment' },
    { id: 3, label: 'Completed Orders', value: '1,120', description: 'All time' },
    { id: 4, label: 'Refunded Orders', value: '17', description: 'All time' },
  ];

  // Example detailed order data for the table
  const ordersData = [
    { id: '#12345', customer: 'John Doe', status: 'Completed', total: '$150.00' },
    { id: '#12346', customer: 'Jane Smith', status: 'Pending', total: '$200.00' },
    { id: '#12347', customer: 'Mark Johnson', status: 'Completed', total: '$80.00' },
    { id: '#12348', customer: 'Anna Brown', status: 'Refunded', total: '$50.00' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Orders Dashboard</h2>

      {/* Order Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {orderStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
          >
            <h3 className="text-xl font-semibold">{stat.label}</h3>
            <p className="text-3xl font-bold my-4">{stat.value}</p>
            <p className="text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Detailed Orders Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Orders Overview</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {ordersData.map((order, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  order.status === 'Refunded' ? 'bg-red-100' : order.status === 'Pending' ? 'bg-yellow-100' : ''
                }`}
              >
                <td className="py-3 px-6">{order.id}</td>
                <td className="py-3 px-6">{order.customer}</td>
                <td className="py-3 px-6">{order.status}</td>
                <td className="py-3 px-6">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders
