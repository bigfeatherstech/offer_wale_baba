import axios from 'axios';

// Make sure this points to your actual backend port (8081)
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8081/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    console.log('Request params:', config.params);
    console.log('Request data:', config.data);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status);
    return response;
  },
  (error) => {
    console.log('API Error Details:', {
      message: error.message,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

console.log('Base URL configured:', baseURL);

export default axiosInstance;