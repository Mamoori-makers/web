import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
