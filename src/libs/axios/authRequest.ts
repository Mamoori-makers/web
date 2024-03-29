import axios, { RawAxiosRequestHeaders, AxiosHeaders } from 'axios';

import { ApiPathType } from '@/constants/paths/apiPath';
import { getCookie } from '@/utils/cookie';

import { axiosInstance } from './axiosInstance';

const ACCESS_TOKEN_COOKIE_KEY = 'Authorization';

export type Options = {
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
};

const isDevMode = process.env.NODE_ENV === 'development';

export const getAuthRequest = async (apiPath: ApiPathType | string, options?: Options) => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);
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
    throw error;
  }
};

export const postAuthRequest = async <T>(apiPath: ApiPathType | string, payload: T) => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);

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
    throw error;
  }
};

export const putAuthRequest = async <T>(apiPath: ApiPathType | string, payload: T) => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);
  try {
    if (isDevMode) {
      const { data } = await axios.put(apiPath, payload);
      return data;
    }

    const { data } = await axiosInstance.put(apiPath, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteAuthRequest = async (apiPath: ApiPathType | string) => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);
  try {
    if (isDevMode) {
      await axios.delete(apiPath);
      return true;
    }

    await axiosInstance.delete(apiPath, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
