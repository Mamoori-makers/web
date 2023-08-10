'use client';

import { useAtomValue, useSetAtom, useAtom } from 'jotai';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { ProfileImage } from '@/components/ProfileImage';
import { useUserData } from '@/libs/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

export default function MyPage() {
  const [isLogin, setIsLogin] = useAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const accessToken = useAtomValue(accessTokenAtom);

  if (!isLogin) {
    redirect('/login');
  }

  const { data: userData, isSuccess } = useUserData(accessToken);

  if (isSuccess) {
    setUserData(userData);
    setIsLogin(true);
    console.log(userData);
  } else {
    console.log('Error');
  }

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
            <ProfileImage imageSrc={userData?.image} alt="profile" size={100} />
            <p className="my-3 text-white">{userData?.email}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
