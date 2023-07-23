'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { UserProfileImage } from '../UserProfileImage';

import { useChangeBgByScroll } from './useChangeBgByScroll';

const GNB_MENU = [
  { name: 'About us', link: '/about-us' },
  { name: 'Roadmap', link: '/roadmap' },
  { name: 'Community', link: '/community' },
];

export const GNB = () => {
  const pathname = usePathname();
  const { GNBBackground } = useChangeBgByScroll();

  const isActiveMenu = (link: string) => {
    return pathname.includes(link) ? true : false;
  };

  return (
    <div
      className="fixed z-10 flex h-16 w-full items-center justify-between px-28"
      style={{
        background: GNBBackground,
      }}
    >
      <Link href="/">
        <Image src="/assets/mamoori-logo.png" alt="logo" width={200} height={50} />
      </Link>
      <div className="flex items-center">
        {GNB_MENU.map(({ name, link }) => {
          const activeStyle = isActiveMenu(link)
            ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
            : '';

          return (
            <Link
              key={name}
              href={link}
              className={`mr-5 text-sm text-[#eaeaea] ${activeStyle} hover:text-white`}
              style={{ textShadow: '2px 2px 10px #413c3a' }}
            >
              {name}
            </Link>
          );
        })}
        <Link href="/my-page">
          <UserProfileImage />
        </Link>
      </div>
    </div>
  );
};
