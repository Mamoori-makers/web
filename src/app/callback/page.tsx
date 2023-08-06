'use client';

import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'Authorization';

export default function Callback() {
  const setLoginState = useSetAtom(loginStateAtom);
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessToken?.length) {
      setLoginState(true);
      router.push('/my-page');
    } else {
      router.push('/');
    }
  }, []);

  return <div>Loading...</div>;
}
