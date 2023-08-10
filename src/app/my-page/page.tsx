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
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const accessToken = useAtomValue(accessTokenAtom);

  if (!isLoggedIn) {
    redirect('/login');
  }

  const { data: userData, isSuccess } = useUserData(accessToken);

  if (isSuccess && userData) {
    setUserData(userData);
    setIsLoggedIn(true);

    const { image, name, email } = userData;

    return (
      <>
        <GNB />
        <main className="flex flex-col items-center">
          <div className="relative flex h-[400px] w-full items-center justify-center bg-brown-200">
            <Image
              src="/assets/banner/my.jpeg"
              fill
              priority
              alt="background"
              style={{ objectFit: 'cover' }}
            />
            <div
              className="flex h-fit w-[300px] flex-col items-center justify-center gap-2 rounded-lg bg-[#473d3d5c] p-5 text-white"
              style={{ zIndex: 1 }}
            >
              <ProfileImage imageSrc={image} alt="profile" size={100} />
              <p className="font-bold">{name}</p>
              <p className="text-sm">{email}</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
