'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { ProfileImage } from '@/components/ProfileImage';
import { API_PATH } from '@/constants/paths/apiPath';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { RightArrowIcon } from '@/icons/RightArrowIcon';
import { deleteAuthRequest } from '@/libs/axios/authRequest';
import { UserData } from '@/libs/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

export default function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginStateAtom);
  const [userData, setUserData] = useAtom(userDataAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  if (!isLoggedIn) {
    redirect(ROUTE_PATH.login);
  }

  if (!userData) {
    alert('데이터를 불러오지 못했습니다. 다시 로그인 해 주세요.');
    redirect(ROUTE_PATH.login);
  }

  const { image, name, email } = userData as UserData;

  const handleLogoutButtonClick = async () => {
    if (!window.confirm('정말 로그아웃 하시겠습니까?')) {
      return;
    }

    await deleteAuthRequest(API_PATH.token, accessToken);
    setIsLoggedIn(false);
    setUserData(null);
    setAccessToken('');
    redirect(ROUTE_PATH.home);
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
            <ProfileImage imageSrc={image || ''} alt="profile" size={100} />
            <p className="font-bold">{name}</p>
            <p className="text-sm">{email}</p>
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
