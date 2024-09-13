// src/Pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom'; // Use navigate to go to the checkout page
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id, description) => {
    removeFromCart(id, description);
  };

  const handleCheckout = () => {
    // Redirect to checkout page
    console.log(cartItems);

    navigate('/checkout');
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.description}`}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
              >
                <div className="flex items-center">
                  <img className="w-24 h-24 object-cover" src={item.image} alt={item.name} />
                  <div className="ml-4">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <p className="text-gray-600">Description: {item.description}</p>
                    <p className="text-gray-600">Price: $ {item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => handleRemove(item.id, item.description)}
                      className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
