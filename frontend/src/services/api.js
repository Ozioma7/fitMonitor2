import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Register a new user
export const register = (userData) => axios.post(`${API_URL}/register`, userData);

// Login a user
export const login = (userData) => axios.post(`${API_URL}/login`, userData);

// Get activities for a user
export const getActivities = (token) => {
  return axios.get(`${API_URL}/activities`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
