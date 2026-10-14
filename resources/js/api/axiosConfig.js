import axios from 'axios';

// Set up the axios instance with interceptors
const api = axios.create();

// Request interceptor to handle the loading state
api.interceptors.request.use(config => {
  console.log('Loading started');
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor to handle the loading state and errors
api.interceptors.response.use(async response => {
  console.log('Loading finished');

    return response;

}, error => {
  console.log('Loading finished');
  console.error('An error occurred:', error);
  return Promise.reject(error);
});

export default api;
