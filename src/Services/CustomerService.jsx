import axios from "axios";

const BASE_URL = 'http://localhost:8222/api/v1/customers';

export const getCustomers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
  };
  export const createCustomer = async (customerData) => {
    try {
          const response = await axios.post(BASE_URL, customerData);
          return response.data;
      } catch (error) {
          throw error;
      }
  };
  export const updateCustomer = async (id, updatedCustomerData) => {
    try {
          const response = await axios.put(`${BASE_URL}/${id}`, updatedCustomerData);
          return response.data;
      } catch (error) {
          throw error;
      }
  };
  
  // Delete a product by ID
  export const deleteCustomer = async (id) => {
    try {
          const response = await axios.delete(`${BASE_URL}/${id}`);
          return response.data;
      } catch (error) {
          throw error;
      }
  };
  