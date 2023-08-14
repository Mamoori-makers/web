import Link from 'next/link';

import { ROUTE_PATH } from '@/constants/paths/routePath';
import { formatDateToKorean } from '@/utils/date';

import { ChecklistProgressBar } from './ChecklistProgressBar';

type MyChecklistItemProps = {
  id: number;
  createdAt: string;
  progress: number;
  totalTaskCount: number;
  checkedTaskCount: number;
};

export const MyChecklistItem = ({
  id,
  createdAt,
  progress,
  totalTaskCount,
  checkedTaskCount,
}: MyChecklistItemProps) => {
  return (
    <Link href={`${ROUTE_PATH.myPage.checklist}/${id}`} className="rounded-md border-[1px] p-4">
      <h3 className="mb-2 font-semibold">{formatDateToKorean(createdAt)}의 체크리스트</h3>
      <ChecklistProgressBar
        progress={progress}
        checkedTaskCount={checkedTaskCount}
        totalTaskCount={totalTaskCount}
      />
    </Link>
  );
};
