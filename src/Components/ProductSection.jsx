import React from 'react'
import ProductCard from './ProductCard';

const ProductSection = () => {
    const products = [
        { name: 'Nike Air Max', price: '$120', image: 'https://via.placeholder.com/300' },
        { name: 'Adidas Superstar', price: '$90', image: 'https://via.placeholder.com/300' },
        { name: 'Puma Suede', price: '$70', image: 'https://via.placeholder.com/300' },
        { name: 'Puma Suede', price: '$70', image: 'https://via.placeholder.com/300' },
        { name: 'Puma Suede', price: '$70', image: 'https://via.placeholder.com/300' }
      ];
    
      return (
        <section id="shop" className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </section>
      );
}

export default ProductSection
