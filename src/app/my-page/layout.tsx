import { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';

export default function MyPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GNB />
      {children}
      <Footer />
    </>
  );
}
