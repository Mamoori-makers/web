import { ApiPathType } from '@/constants/paths/apiPath';

import { axiosInstance } from './axiosInstance';

import type { Options } from './authRequest';

export const getRequest = async (apiPath: ApiPathType, options?: Options) => {
  try {
    const { data } = await axiosInstance.get(apiPath, { ...options });
    return data;
  } catch (err) {
    console.error(err);
  }
};
