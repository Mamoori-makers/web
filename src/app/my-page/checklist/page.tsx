'use client';

import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { useEffect } from 'react';

import { useGetChecklist } from '@/libs/react-query/useChecklist';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';

export default function MyChecklist() {
  const accessToken = useAtomValue(accessTokenAtom);
  const { data: checklist, isSuccess } = useGetChecklist(accessToken);

  useEffect(() => {
    if (isSuccess) {
      console.log(checklist);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="relative h-[150px]">
        <Image
          src="/assets/banner/my.jpeg"
          fill
          priority
          alt="background"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute left-[50%] top-[40%] flex -translate-x-1/2 items-center rounded-xl p-3">
          <Image src="/assets/roadmap/checklist.png" alt="checklist" width={30} height={30} />
          <p
            className="ml-1 text-xl font-semibold text-white"
            style={{ textShadow: '3px 3px 13px #413c3a' }}
          >
            My Checklist
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
}
