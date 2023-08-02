import Link from 'next/link';

import { LoginButton } from '@/components/LoginButton';
import { GoogleIcon, NaverIcon } from '@/components/LoginButton/LoginIcons';
import { SquareLogo } from '@/components/SquareLogo';

const LOGIN_BUTTONS = [
  { platform: 'google', icon: <GoogleIcon /> },
  { platform: 'naver', icon: <NaverIcon /> },
];

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center px-6 py-20">
      <div className="flex h-full max-w-md flex-col justify-between">
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <SquareLogo size={100} />
          </Link>
          <h1 className="mt-6 text-2xl font-bold">마무리에 오신 것을 환영합니다.</h1>
          <p className="mt-2 text-sm text-stone-500">
            마무리는 죽음을 체계적으로 준비할 수 있는 플랫폼입니다.
          </p>
        </div>
        <div>
          {LOGIN_BUTTONS.map(({ platform, icon }) => {
            return (
              <LoginButton key={platform} platform={platform}>
                {icon}
              </LoginButton>
            );
          })}
        </div>
      </div>
    </main>
  );
}
