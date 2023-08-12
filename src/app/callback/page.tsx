'use client';

import { useAtom, useSetAtom } from 'jotai';
import { redirect } from 'next/navigation';
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
  const { data: userData, isSuccess } = useUserData(accessToken);

  useEffect(() => {
    const accessTokenInCookie = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenInCookie?.length) {
      setAccessToken(accessTokenInCookie);
    }
    if (isSuccess) {
      setUserData(userData);
      setLoginState(true);
      redirect('/my-page');
    } else {
      alert('로그인에 실패했습니다. 다시 시도해 주세요.');
      redirect('/login');
    }
  }, [isSuccess, userData, accessToken, setAccessToken, setLoginState, setUserData]);

  return <></>;
}
