import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { API_PATH } from '@/constants/apiPath';
import { getAuthRequest } from '@/libs/axios/useAuthApi';

import { QUERY_KEY } from './queryKey';

export type UserData = {
  userId: number;
  email: string;
  name: string;
  image: string;
};

export const useUserData = (accessToken: string): UseQueryResult<UserData> => {
  return useQuery({
    queryKey: [QUERY_KEY.user, accessToken],
    queryFn: () => getAuthRequest(API_PATH.user, accessToken),
    enabled: !!accessToken.length,
  });
};
