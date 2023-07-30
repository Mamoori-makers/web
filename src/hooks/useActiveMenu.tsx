'use client';

import { usePathname } from 'next/navigation';

export const useActiveMenu = () => {
  const pathname = usePathname();

  const isActiveMenu = (link: string) => {
    return pathname.includes(link) ? true : false;
  };

  const isActiveMenuExact = (link: string) => {
    return pathname === link;
  };

  return { isActiveMenu, isActiveMenuExact };
};
