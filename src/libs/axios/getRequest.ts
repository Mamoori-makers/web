import axios from 'axios';

import { ApiPathType } from '@/constants/paths/apiPath';

import type { Options } from './authRequest';

const axiosInstance = axios.create({
  baseURL: 'https://api.mamoori.life',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const getRequest = async (apiPath: ApiPathType, options?: Options) => {
  try {
    const { data } = await axiosInstance.get(apiPath, { ...options });
    return data;
  } catch (err) {
    console.error(err);
  }
};
