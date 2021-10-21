import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.101.9:8000',
  headers: {
    'Content-type': 'application/json',
  },
})

export default api;