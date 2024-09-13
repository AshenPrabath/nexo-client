import React from 'react'

const Overview = () => {
  const stats = [
    { id: 1, label: 'Total Sales', value: '$25,340', description: 'Last 30 days' },
    { id: 2, label: 'Total Orders', value: '1,215', description: 'All time' },
    { id: 3, label: 'Total Customers', value: '987', description: 'All time' },
    { id: 4, label: 'Total Products', value: '124', description: 'In stock' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview Dashboard</h2>

      {/* Stats Table */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
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

      {/* Detailed Stats Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Sales Overview</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Orders</th>
              <th className="py-3 px-6 text-left">Sales</th>
              <th className="py-3 px-6 text-left">Customers</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">September 12, 2024</td>
              <td className="py-3 px-6">34</td>
              <td className="py-3 px-6">$1,500</td>
              <td className="py-3 px-6">27</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">September 11, 2024</td>
              <td className="py-3 px-6">42</td>
              <td className="py-3 px-6">$1,890</td>
              <td className="py-3 px-6">38</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">September 10, 2024</td>
              <td className="py-3 px-6">31</td>
              <td className="py-3 px-6">$1,270</td>
              <td className="py-3 px-6">21</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Overview
