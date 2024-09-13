import React from 'react'

const ProductCard = ({ name, price, image, desc }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <div className="p-4">
          <h4 className="text-xl font-bold">{name}</h4>
          <h5 className="text-sm mt-4">{desc}</h5>
          <p className="mt-2 font-bold text-gray-600">{price}</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500">
            Buy
          </button>
        </div>
      </div>
    );
  };

export default ProductCard
