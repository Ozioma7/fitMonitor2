// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/auth'; // Replace with your API URL

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
