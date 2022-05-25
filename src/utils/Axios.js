import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aryaglobal2.herokuapp.com',
  //  baseURL : 'http://localhost:5000'
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export const Axios = instance;
