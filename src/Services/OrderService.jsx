import axios from 'axios';

const BASE_URL = 'http://localhost:8222/api/v1/orders';

// Get all products
export const getOrders = async () => {
  try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const createOrder = async (orderData) => {
    try {
          const response = await axios.post(BASE_URL, orderData);
          return response.data;
      } catch (error) {
          throw error;
      }
  };