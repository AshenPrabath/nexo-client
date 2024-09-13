import React from 'react'

const Products = () => {
  const productStats = [
    { id: 1, label: 'Total Products', value: '124', description: 'In stock' },
    { id: 2, label: 'Out of Stock', value: '15', description: 'Currently unavailable' },
    { id: 3, label: 'Best Seller', value: 'Nike Air Max', description: 'Top-selling product' },
    { id: 4, label: 'Low Stock', value: '12', description: 'Products with less than 5 units' },
  ];

  // Example detailed product data for the table
  const productsData = [
    { name: 'Nike Air Max', category: 'Shoes', stock: 23, price: '$120' },
    { name: 'Adidas Ultraboost', category: 'Shoes', stock: 12, price: '$140' },
    { name: 'Puma RS-X', category: 'Shoes', stock: 5, price: '$110' },
    { name: 'Reebok Classic', category: 'Shoes', stock: 0, price: '$90' }, // Out of stock example
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products Dashboard</h2>

      {/* Product Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {productStats.map((stat) => (
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

      {/* Detailed Products Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Products Overview</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {productsData.map((product, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  product.stock === 0 ? 'bg-red-100' : ''
                }`}
              >
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6">{product.category}</td>
                <td className="py-3 px-6">{product.stock === 0 ? 'Out of Stock' : product.stock}</td>
                <td className="py-3 px-6">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products
