'use client';

import Link from 'next/link';
import React from 'react';

import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants/bannerData';
import { useActiveMenu } from '@/hooks/useActiveMenu';

const ROADMAP_MENU = [
  { name: 'Roadmap Home', link: '/roadmap' },
  { name: 'Handbook', link: '/roadmap/handbook' },
  { name: 'Will', link: '/roadmap/will' },
  { name: 'Checklist', link: '/roadmap/checklist' },
];

const RoadmapMenu = () => {
  const { isActiveMenu } = useActiveMenu(true);

  return (
    <div className="mx-auto flex w-full justify-center bg-stone-300 p-3 text-stone-500">
      <div className="flex w-full max-w-3xl justify-around">
        {ROADMAP_MENU.map(({ name, link }) => {
          const activeStyle = isActiveMenu(link)
            ? 'underline decoration-wavy decoration-yellow-700 underline-offset-4 decoration-2 text-stone-800 font-bold'
            : '';

          return (
            <Link key={name} href={link} className={`${activeStyle}`}>
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
    <main className="flex flex-col items-center">
      <Banner bannerData={BANNER_DATA.roadmap} />
      <RoadmapMenu />
      <div className="m-3 max-w-4xl">{children}</div>
    </main>
  );
}
