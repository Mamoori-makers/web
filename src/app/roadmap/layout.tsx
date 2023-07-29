'use client';

import Link from 'next/link';
import React from 'react';

import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { BANNER_DATA } from '@/constants/bannerData';
import { useActiveMenu } from '@/hooks/useActiveMenu';

import { RoadmapIcon } from './RoadmapIcon';

const ROADMAP_MENU = [
  { name: 'Handbook', link: '/roadmap/handbook' },
  { name: 'Will', link: '/roadmap/will' },
  { name: 'Checklist', link: '/roadmap/checklist' },
];

const RoadmapMenu = () => {
  const { isActiveMenu } = useActiveMenu(true);

  return (
    <div className="mx-auto flex w-full justify-center bg-stone-300 px-3 py-2 text-stone-500">
      <div className="flex w-full max-w-3xl items-center justify-evenly">
        <Link
          href="/roadmap"
          className="rounded-lg p-1"
          style={{
            backgroundColor: isActiveMenu('/roadmap') ? 'rgb(150 102 1 / 50%)' : '',
          }}
        >
          <RoadmapIcon />
        </Link>
        {ROADMAP_MENU.map(({ name, link }) => {
          const activeStyle = isActiveMenu(link)
            ? 'underline decoration-wavy decoration-yellow-700 underline-offset-4 decoration-2 text-stone-800 font-bold'
            : '';

          return (
            <Link key={name} href={link} className={`${activeStyle} min-w-[60px] p-1 text-center`}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GNB />
      <main className="flex flex-col items-center">
        <Banner bannerData={BANNER_DATA.roadmap} />
        <RoadmapMenu />
        <div className="m-6 max-w-4xl lg:m-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}
