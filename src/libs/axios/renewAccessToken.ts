import { API_PATH } from '@/constants/paths/apiPath';

import { axiosInstance } from './axiosInstance';

export const renewAccessToken = async () => {
  try {
    const { data } = await axiosInstance.post(API_PATH.token);
    return data;
  } catch (error) {
    console.error(error);
  }
};
