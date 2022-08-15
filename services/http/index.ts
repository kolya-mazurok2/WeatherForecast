import axios from 'axios';
import { BASE_URL, DEFAULT_HEADERS } from './constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS
});

export default axiosInstance;
