// src/Contexts/CartContext.js
import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product already exists in the cart by unique id (or name)
      const existingProduct = prevItems.find(
        item => item.id === product.id && item.description === product.description
      );
      if (existingProduct) {
        // Increase the quantity of the existing product
        return prevItems.map(item =>
          item.id === product.id && item.description === product.description
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add the product as a new entry in the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id, description) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id || item.description !== description));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
