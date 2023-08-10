'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { ProfileImage } from '@/components/ProfileImage';
import { useUserData } from '@/libs/react-query/useUserData';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

export default function MyPage() {
  const isLogin = useAtomValue(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);

  if (!isLogin) {
    redirect('/login');
  }

  const { data: userData, isSuccess } = useUserData();

  if (!isSuccess) {
    alert('로그인에 실패했습니다. 다시 시도해주세요.');
    redirect('/login');
  }

  setUserData(userData);

  return (
    <>
      <GNB />
      <main className="flex flex-col items-center">
        <div className="relative flex h-[400px] w-full justify-center bg-brown-200">
          <Image
            src="/assets/banner/my.jpeg"
            fill
            priority
            alt="background"
            style={{ objectFit: 'cover' }}
          />
          <div className="flex flex-col items-center justify-center" style={{ zIndex: 1 }}>
            <ProfileImage imageSrc={userData.image} alt="profile" size={100} />
            <p className="my-3 text-white">{userData.email}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
