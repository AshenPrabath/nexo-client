import React from 'react'
import ProductCard from '../Components/ProductCard';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: 'Nike Air Max',
      price: '$120.00',
      image: 'https://example.com/nike-air-max.jpg'
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      price: '$140.00',
      image: 'https://example.com/adidas-ultraboost.jpg'
    },
    {
      id: 3,
      name: 'Puma RS-X',
      price: '$110.00',
      image: 'https://example.com/puma-rsx.jpg'
    },
    {
      id: 4,
      name: 'Reebok Classic',
      price: '$90.00',
      image: 'https://example.com/reebok-classic.jpg'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage
