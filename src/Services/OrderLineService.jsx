import axios from "axios";

const BASE_URL = 'http://localhost:8222/api/v1/order-lines/order';

export const getOrderLineByID = async (id) => {
    try {
          const response = await axios.get(`${BASE_URL}/${id}`);
          return response.data;
      } catch (error) {
          throw error;
      }
  };