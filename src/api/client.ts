import axios from 'axios';
import { BASE_URL } from './endpoints';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Optional: Interceptors for logging or adding headers
axiosClient.interceptors.request.use(
  (config) => {
    // You can add headers or log requests here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosClient;
