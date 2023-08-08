'use client';

import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'Authorization';

export default function Callback() {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessToken?.length) {
      setAccessToken(accessToken);
      setLoginState(true);
      router.push('/my-page');
    } else {
      router.push('/');
      alert('로그인에 실패하였습니다. 다시 시도해 주세요.');
    }
  }, []);

  return <></>;
}
