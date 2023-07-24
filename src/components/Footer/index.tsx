import Link from 'next/link';

import { SquareLogo } from '@/components/SquareLogo';

export const Footer = () => {
  return (
    <div className="flex flex-col gap-3 bg-gradient-to-r from-brown-200 to-brown-100 p-7 text-white md:px-14  md:py-6 lg:px-28 lg:py-12">
      <Link href="/">
        <SquareLogo />
      </Link>
      <p className="my-2 text-base lg:my-4 lg:text-lg">
        Embrace life&apos;s end with grace - our site helps you prepare.
      </p>
      <div className="text-sm text-gray-300 lg:text-base">
        <p>Mamoori Makers</p>
        <p>mamoori.info@gmail.com</p>
      </div>
      <p className="text-sm text-gray-300">© 2022 Mamoori. All rights reserved.</p>
    </div>
  );
};
