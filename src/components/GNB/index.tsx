'use client';

import classNames from 'classnames';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { UserData } from '@/libs/react-query/useUserData';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

import { DefaultMenus } from './DefaultMenus';
import { ToggleMenuIcon } from './Icons';
import { MainLogo } from './MainLogo';
import { MobileMenus } from './MobileMenus';
import { useChangeBgByScroll } from './useChangeBgByScroll';

export const GNB = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { GNBBackground } = useChangeBgByScroll();
  const isLoggedIn = useAtomValue(loginStateAtom) as boolean;
  const userData = useAtomValue(userDataAtom) as UserData;

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
        <DefaultMenus isLoggedIn={isLoggedIn} userData={userData} />
        <div className="flex items-center sm:hidden">
          <button onClick={() => setMenuToggle(!menuToggle)}>
            <ToggleMenuIcon isOpen={menuToggle} />
          </button>
        </div>
      </div>
      <div className={classNames('sm:hidden bg-[#67615ed4]', { hidden: !menuToggle })}>
        <MobileMenus onClose={closeMenu} isLoggedIn={isLoggedIn} userData={userData} />
      </div>
    </nav>
  );
};
