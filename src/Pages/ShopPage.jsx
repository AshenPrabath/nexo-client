import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import { getProducts } from '../Services/ProductService';
import Footer from '../Components/Footer';

const ShopPage = () => {
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
    console.log(products);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            desc={product.description}
          />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ShopPage
