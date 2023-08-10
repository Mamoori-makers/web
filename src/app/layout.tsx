import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import Providers from '@/libs/react-query/providers';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const MAMOORI_METADATA = {
  name: 'Mamoori',
  description: '삶의 마무리를 체계적으로 도와주는 서비스, Mamoori.',
  mainImage: '/assets/open-graph-image.jpg',
  author: 'Mamoori Makers',
  url: 'https://mamoori.life',
};

export const metadata: Metadata = {
  title: MAMOORI_METADATA.name,
  applicationName: MAMOORI_METADATA.name,
  description: MAMOORI_METADATA.description,
  authors: [{ name: MAMOORI_METADATA.author }],
  openGraph: {
    title: MAMOORI_METADATA.name,
    description: MAMOORI_METADATA.description,
    images: [MAMOORI_METADATA.mainImage],
    url: MAMOORI_METADATA.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaTrackingId = process.env.GA_TRACKING_ID;

  return (
    <html lang="en">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${gaTrackingId});
        `}
      </Script>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
