'use client';

import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { ProfileImage } from '@/components/ProfileImage';
import { UserData } from '@/libs/react-query/useUserData';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

export default function MyPage() {
  const isLoggedIn = useAtomValue(loginStateAtom) as boolean;
  const userData = useAtomValue(userDataAtom) as UserData | null;

  if (!isLoggedIn) {
    redirect('/login');
  }

  if (!userData) {
    alert('데이터를 불러오지 못했습니다. 다시 로그인 해 주세요.');
    redirect('/login');
  }

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
