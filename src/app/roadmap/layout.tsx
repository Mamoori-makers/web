import React from 'react';

import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { RoadmapMenu } from '@/components/RoadmapMenu';
import { BANNER_DATA } from '@/constants/bannerData';

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
