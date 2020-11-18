import axios from 'axios';

const api = axios.create({
  baseURL: 'https://random.dog',
});

export default api;