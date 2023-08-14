'use client';

import Image from 'next/image';

import { CountBox } from '@/components/CountBox';
import { useGetChecklist } from '@/libs/react-query/useChecklist';
import { calculateDaysFromDateString } from '@/utils/date';

export default function MyChecklist() {
  const { data: checklistData, isSuccess } = useGetChecklist();

  if (!checklistData || !isSuccess) {
    return <></>;
  }

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
      <div className="flex flex-col items-center">
        <div className="grid w-fit grid-cols-2 gap-3 p-3">
          <CountBox
            title="마지막으로 체크리스트를 작성한 지"
            count={calculateDaysFromDateString(checklistData?.latestChecklistDate || '')}
            unit="일"
            backgroundColor="#CBAC5C"
          />
          <CountBox
            title="작성한 체크리스트"
            count={checklistData?.totalChecklistCount}
            unit="개"
            backgroundColor="#9E8888"
          />
        </div>
      </div>
    </>
  );
}
