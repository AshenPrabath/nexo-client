import React, { useEffect, useState } from "react";
import { getProducts, createProduct } from "../Services/ProductService";

// Category data
const categories = [
  { id: 1, name: "Sneakers" },
  { id: 51, name: "Boots" },
  { id: 101, name: "Loafers" },
  { id: 151, name: "Sandals" },
  { id: 201, name: "Heels" },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // To toggle modal
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    availableQuantity: "",
    price: "",
    categoryId: "",
    image: null,
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    createProduct(newProduct)
      .then(() => {
        setShowModal(false); // Close the modal
        loadProducts(); // Refresh the products list
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const calculateStats = () => {
    const lowStockItems = products.filter((p) => p.availableQuantity <= 300);
    const totalProducts = products.length;
    const outOfStockItems = products.filter(
      (p) => p.availableQuantity === 0
    ).length;
    const totalValue = products.reduce(
      (acc, p) => acc + p.price * p.availableQuantity,
      0
    );

    return { lowStockItems, totalProducts, outOfStockItems, totalValue };
  };

  const { lowStockItems, totalProducts, outOfStockItems, totalValue } =
    calculateStats();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products Dashboard</h2>

      {/* Statistics Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-6">
        <h3 className="text-xl font-bold mb-4">Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Total Products</h4>
            <p className="text-xl">{totalProducts}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Low Stock Items</h4>
            <p className="text-xl">{lowStockItems.length}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Out of Stock Items</h4>
            <p className="text-xl">{outOfStockItems}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Total Stock Value</h4>
            <p className="text-xl">${totalValue.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Add Product Button */}
      <button
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Add New Product
      </button>

      {/* Detailed Products Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Products Overview</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product ID</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Available Quantity</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Category</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {products.map((product) => (
              <tr
                key={product.id}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  product.availableQuantity === 0 ? "bg-red-100" : ""
                }`}
              >
                <td className="py-3 px-6">{product.id}</td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6">{product.description}</td>
                <td className="py-3 px-6">
                  {product.availableQuantity === 0
                    ? "Out of Stock"
                    : product.availableQuantity}
                </td>
                <td className="py-3 px-6">${product.price.toFixed(2)}</td>
                <td className="py-3 px-6">{product.categoryName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new product */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.files[0] })
                }
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                placeholder="Product Description"
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="number"
                name="availableQuantity"
                value={newProduct.availableQuantity}
                onChange={handleInputChange}
                placeholder="Available Quantity"
                className="block w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="block w-full mb-3 p-2 border rounded"
                required
              />

              {/* Category Dropdown */}
              <select
                name="categoryId"
                value={newProduct.categoryId}
                onChange={handleInputChange}
                className="block w-full mb-3 p-2 border rounded"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
