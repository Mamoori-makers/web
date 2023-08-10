'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useUserData } from '@/libs/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'Authorization';

export default function Callback() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const router = useRouter();
  const { data: userData, isSuccess } = useUserData(accessToken);

  useEffect(() => {
    const accessTokenInCookie = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenInCookie?.length) {
      setAccessToken(accessTokenInCookie);
      setLoginState(true);
    }

    if (isSuccess) {
      setUserData(userData);
      router.push('/my-page');
      return;
    }

    if (!userData) {
      router.push('/login');
    }
  }, [isSuccess, setAccessToken, userData, setUserData, setLoginState, accessToken, router]);

  return <></>;
}
