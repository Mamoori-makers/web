import axios, { RawAxiosRequestHeaders, AxiosHeaders } from 'axios';

import { ApiPathType } from '@/constants/apiPath';

type Options = {
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
};

const isDevMode = process.env.NODE_ENV === 'development';

const axiosInstance = axios.create({
  baseURL: process.env.ENDPOINT,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const getAuthRequest = async (
  apiPath: ApiPathType,
  accessToken: string,
  options?: Options
) => {
  try {
    if (isDevMode) {
      const { data } = await axios.get(apiPath, { ...options });
      return data;
    }

    const { data } = await axiosInstance.get(apiPath, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      ...options,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postAuthRequest = async <T>(apiPath: string, payload: T, accessToken: string) => {
  try {
    if (isDevMode) {
      const { data } = await axios.post(apiPath, payload);
      return data;
    }

    const { data } = await axiosInstance.post(apiPath, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
