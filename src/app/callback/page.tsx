'use client';

import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

const getCookie = (name: string) => {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
};

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
