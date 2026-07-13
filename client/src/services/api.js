import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('fju_admin_token') || localStorage.getItem('fju_volunteer_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
