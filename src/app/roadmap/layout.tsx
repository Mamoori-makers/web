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
  const isRoadmapPage = isActiveMenu('/roadmap');
  const roadmapIconColor = isRoadmapPage ? '#fff' : '#000';

  return (
    <div className="mx-auto flex w-full justify-center bg-stone-300 px-3 py-2 text-stone-500">
      <div className="flex w-full max-w-3xl items-center justify-evenly">
        <Link
          href="/roadmap"
          className="rounded-lg p-1"
          style={{
            backgroundColor: isRoadmapPage ? '#67615e' : '',
          }}
        >
          <RoadmapIcon color={roadmapIconColor} />
        </Link>
        {ROADMAP_MENU.map(({ name, link }) => {
          const activeStyle = isActiveMenu(link) ? 'font-semibold bg-[#67615e] text-white' : '';

          return (
            <Link
              key={name}
              href={link}
              className={`${activeStyle} min-w-[60px] rounded-lg p-2 text-center`}
            >
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
        <div className="m-6 w-full max-w-4xl lg:m-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}
