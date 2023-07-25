'use client';

import { usePathname } from 'next/navigation';

export const useActiveMenu = (exact = false) => {
  const pathname = usePathname();

  const isActiveMenu = (link: string) => {
    if (exact) {
      return pathname === link;
    }
    return pathname.includes(link) ? true : false;
  };

  return { isActiveMenu };
};
