import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { API_PATH } from '@/constants/paths/apiPath';
import { getAuthRequest } from '@/libs/axios/authRequest';

import { QUERY_KEY } from './queryKey';

export type UserData = {
  userId: number;
  email: string;
  name: string;
  image: string;
};

export const useUserData = (): UseQueryResult<UserData> => {
  return useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: () => getAuthRequest(API_PATH.user),
  });
};
