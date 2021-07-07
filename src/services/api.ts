/* eslint-disable no-param-reassign */
import axios from 'axios';

import localStorage from '~/services/localStorage';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default api;
