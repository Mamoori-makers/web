'use client';

import { useSetAtom } from 'jotai';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import { useUserData } from '@/libs/react-query/useUserData';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

export default function Callback() {
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const { data: userData, isSuccess } = useUserData();

  useEffect(() => {
    if (isSuccess) {
      setUserData(userData);
      setLoginState(true);
      redirect('/my-page');
    }
  }, [isSuccess, userData, setLoginState, setUserData]);

  return <></>;
}
