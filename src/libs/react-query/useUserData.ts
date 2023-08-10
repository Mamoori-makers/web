import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { API_PATH } from '@/constants/apiPath';
import { getAuthRequest } from '@/libs/axios/useAuthApi';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';

import { QUERY_KEY } from './queryKey';

export const useUserData = () => {
  const accessToken = useAtomValue(accessTokenAtom);

  return useQuery({
    queryKey: [QUERY_KEY.user, accessToken],
    queryFn: () => getAuthRequest(API_PATH.user, accessToken),
    enabled: !!accessToken.length,
  });
};
