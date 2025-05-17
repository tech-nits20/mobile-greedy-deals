import axios from 'axios';
import { BASE_URL } from './endpoints';
export const MAX_RANGE = 5;

export const HeadersV2 = {
  'X-api-version': 2,
};

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'X-API-Key': 'HWn6V3sgzpMhPwW5aT9fkE19nwDzdgRV',
    'Content-Type': 'application/json',
  },
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
