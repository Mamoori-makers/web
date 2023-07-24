import './globals.css';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mamoori',
  description: '삶의 마무리를 체계적으로 도와주는 서비스, Mamoori.',
  openGraph: {
    title: 'Mamoori',
    description: '삶의 마무리를 체계적으로 도와주는 서비스, Mamoori.',
    images: ['/assets/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GNB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
