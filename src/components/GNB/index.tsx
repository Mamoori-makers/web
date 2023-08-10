'use client';

import classNames from 'classnames';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ProfileImage } from '@/components/ProfileImage';
import { useActiveMenu } from '@/hooks/useActiveMenu';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

import { ToggleMenuIcon } from './Icons';
import { MainLogo } from './MainLogo';
import { useChangeBgByScroll } from './useChangeBgByScroll';

const GNB_MENU = [
  { name: 'About us', link: '/about-us' },
  { name: 'Roadmap', link: '/roadmap' },
  { name: 'Community', link: '/community' },
];

const SAMPLE_USER_DATA = {
  userName: 'Mamoori',
  imageUrl: '/assets/mamoori-default-profile.png',
};

const DefaultMenus = ({ isLogin }: { isLogin: boolean }) => {
  const { isActiveMenu } = useActiveMenu();

  return (
    <div className="hidden items-center sm:flex">
      {GNB_MENU.map(({ name, link }) => {
        const activeStyle = isActiveMenu(link)
          ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
          : '';

        return (
          <Link
            key={name}
            href={link}
            className={`mr-5 text-sm text-[#eaeaea] lg:text-base ${activeStyle} hover:text-white`}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
          >
            {name}
          </Link>
        );
      })}
      {isLogin ? (
        <Link href="/my-page">
          <ProfileImage imageSrc={SAMPLE_USER_DATA.imageUrl} alt={SAMPLE_USER_DATA.userName} />
        </Link>
      ) : (
        <Link
          href="/login"
          className="rounded-md border-[1px] border-stone-200 px-2 py-1 text-sm text-white hover:opacity-75 lg:text-base"
        >
          Login
        </Link>
      )}
    </div>
  );
};

const MobileMenus = ({ onClose, isLogin }: { onClose: () => void; isLogin: boolean }) => {
  const { isActiveMenu } = useActiveMenu();

  return (
    <div className="flex flex-col items-center px-3 pb-3">
      {GNB_MENU.map(({ name, link }) => {
        const activeStyle = isActiveMenu(link)
          ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
          : '';

        return (
          <Link
            key={name}
            href={link}
            className={`p-3 text-sm text-[#eaeaea] ${activeStyle} w-full hover:bg-brown-200 hover:text-white`}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
            onClick={onClose}
          >
            {name}
          </Link>
        );
      })}
      {isLogin ? (
        <Link href="/my-page" onClick={onClose}>
          <ProfileImage imageSrc={SAMPLE_USER_DATA.imageUrl} alt={SAMPLE_USER_DATA.userName} />
        </Link>
      ) : (
        <Link
          href="/login"
          className="m-3 w-[95%] rounded-md bg-yellow-500 p-2 text-center text-sm hover:opacity-75"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export const GNB = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { GNBBackground } = useChangeBgByScroll();
  const isLogin = useAtomValue(loginStateAtom);

  const closeMenu = () => {
    setMenuToggle(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    const nav = (event.target as HTMLElement).closest('nav');
    if (nav === null) {
      closeMenu();
    }
  };

  return (
    <nav
      className="fixed z-10 w-full"
      style={{
        background: GNBBackground,
      }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:py-3"
        style={{ background: menuToggle ? '#67615ed4' : '' }}
      >
        <MainLogo onClose={closeMenu} />
        <DefaultMenus isLogin={isLogin} />
        <div className="flex items-center sm:hidden">
          <button onClick={() => setMenuToggle(!menuToggle)}>
            <ToggleMenuIcon isOpen={menuToggle} />
          </button>
        </div>
      </div>
      <div className={classNames('sm:hidden bg-[#67615ed4]', { hidden: !menuToggle })}>
        <MobileMenus onClose={closeMenu} isLogin={isLogin} />
      </div>
    </nav>
  );
};
