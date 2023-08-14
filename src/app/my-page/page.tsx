'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ProfileImage } from '@/components/ProfileImage';
import { API_PATH } from '@/constants/paths/apiPath';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { RightArrowIcon } from '@/icons/RightArrowIcon';
import { deleteAuthRequest } from '@/libs/axios/authRequest';
import { UserData } from '@/libs/react-query/useUserData';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

export default function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginStateAtom);
  const [userData, setUserData] = useAtom(userDataAtom);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(ROUTE_PATH.login);
    }

    if (!userData) {
      alert('데이터를 불러오지 못했습니다. 다시 로그인 해 주세요.');
      router.push(ROUTE_PATH.login);
    }
  }, [isLoggedIn, userData, router]);

  const handleLogoutButtonClick = async () => {
    if (!window.confirm('정말 로그아웃 하시겠습니까?')) {
      return;
    }

    router.push(ROUTE_PATH.home);
    await deleteAuthRequest(API_PATH.token);
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <>
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
            <ProfileImage imageSrc={(userData as UserData)?.image || ''} alt="profile" size={100} />
            <p className="font-bold">{(userData as UserData)?.name}</p>
            <p className="text-sm">{(userData as UserData)?.email}</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center bg-gray-200 p-5">
          <Link
            href={ROUTE_PATH.myPage.checklist}
            className="flex w-[90%] max-w-[400px] items-center justify-between rounded-lg bg-white p-2"
          >
            <div className="flex items-center">
              <Image src="/assets/roadmap/checklist.png" alt="checklist" width={30} height={30} />
              <p className="ml-1 font-semibold">My Checklist</p>
            </div>
            <RightArrowIcon />
          </Link>
        </div>
        <button
          className="m-3 w-[80%] max-w-[300px] rounded-md bg-yellow-500 p-2 text-center text-sm hover:opacity-75 sm:max-w-[350px]"
          onClick={handleLogoutButtonClick}
        >
          Logout
        </button>
      </main>
    </>
  );
}
