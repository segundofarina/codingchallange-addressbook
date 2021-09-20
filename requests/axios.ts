import axios from 'axios';

const apiURL = 'https://randomuser.me/api';


const axiosInstance = axios.create({
  baseURL: apiURL,
  responseType: 'json',
  headers: {
    get: { 'Content-Type': 'application/json' },
  },
});


export default axiosInstance;
