// src/Components/ProductCard.js
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';

const ProductCard = ({ id, name, price, image, desc }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // Ensure a unique product is passed
    const product = { id, name, price, image, description: desc };
    addToCart(product);
  };



  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h4 className="text-xl font-bold">{name}</h4>
        <h5 className="text-sm mt-4">{desc}</h5>
        <p className="mt-2 font-bold text-gray-600">$ {price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
