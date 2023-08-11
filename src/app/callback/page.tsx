'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'Authorization';

export default function Callback() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const router = useRouter();

  useEffect(() => {
    const accessTokenInCookie = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenInCookie?.length) {
      setAccessToken(accessTokenInCookie);
      setLoginState(true);
      router.push('/my-page');
    } else {
      router.push('/login');
    }
  }, [setAccessToken, setLoginState, accessToken, router]);

  return <></>;
}
