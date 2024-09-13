import React, { useState,useEffect } from 'react'
import ProductCard from './ProductCard';
import { getProducts } from '../Services/ProductService';

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const loadProducts = () =>{
      getProducts().then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
    }
    useEffect(() => {
      loadProducts();
    }, []);
    
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
    
      return (
        <section id="shop" className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0,6).map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  desc={product.description}
                />
              ))}
            </div>
          </div>
        </section>
      );
}

export default ProductSection
