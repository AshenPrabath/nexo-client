import axios from "axios";
import {productImages} from '../Data/dummy.js'
const BASE_URL = 'http://localhost:8222/api/v1/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        const products = response.data;
    
        // Attach images to products based on index
        const updatedProducts = products.map((product, index) => {
          const imageIndex = index % productImages.length; // Modulo to cycle through images
          return {
            ...product,
            image: productImages[imageIndex] // Attach the corresponding image
          };
        });
    
        return updatedProducts;
    } catch (error) {
        throw error;
    }
  };
  export const createProduct = async (productData) => {
    try {
          const response = await axios.post(BASE_URL, productData);
          return response.data;
      } catch (error) {
          throw error;
      }
  };
  