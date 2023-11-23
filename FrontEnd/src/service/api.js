import axios from 'axios';

const apiAdmin = axios.create({
  baseURL: 'http://localhost:5555',
});

export default apiAdmin;
