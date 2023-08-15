import Image from 'next/image';
import { ReactNode } from 'react';

export default function MyPageChecklistLayout({ children }: { children: ReactNode }) {
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
      <div className="m-auto flex max-w-4xl flex-col py-5">{children}</div>
    </>
  );
}
