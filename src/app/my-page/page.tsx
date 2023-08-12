'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { ProfileImage } from '@/components/ProfileImage';
import { API_PATH } from '@/constants/paths/apiPath';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { deleteAuthRequest } from '@/libs/axios/useAuthApi';
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
            <ProfileImage imageSrc={image || ''} alt="profile" size={100} />
            <p className="font-bold">{name}</p>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <button
          className="m-3 w-[80%] rounded-md bg-yellow-500 p-2 text-center text-sm hover:opacity-75 sm:max-w-[350px]"
          onClick={handleLogoutButtonClick}
        >
          Logout
        </button>
      </main>
      <Footer />
    </>
  );
}
