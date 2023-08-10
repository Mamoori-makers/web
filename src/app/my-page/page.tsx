'use client';

import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { ProfileImage } from '@/components/ProfileImage';
import { useUserData } from '@/libs/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';

export default function MyPage() {
  const accessToken = useAtomValue(accessTokenAtom);

  if (!accessToken) {
    redirect('/login');
  }

  const { data: userData, isSuccess } = useUserData();

  if (isSuccess) {
    console.log(userData);
  }

  return (
    <>
      <GNB />
      <main className="flex flex-col items-center">
        <div className="relative flex h-[400px] w-full justify-center">
          <Image
            src="/assets/banner/my.jpeg"
            fill
            priority
            alt="background"
            style={{ objectFit: 'cover' }}
          />
          <div className="flex flex-col items-center justify-center" style={{ zIndex: 1 }}>
            <ProfileImage imageSrc="/assets/mamoori_profile.png" alt="profile" size={100} />
            <p className="my-3 text-white">Email</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
