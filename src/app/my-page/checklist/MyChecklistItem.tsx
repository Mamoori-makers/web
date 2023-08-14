import Link from 'next/link';

import { ProgressBar } from '@/components/ProgressBar';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { formatDateToKorean } from '@/utils/date';

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
      <ProgressBar percent={progress} />
      <div className="mx-1 mt-1 flex justify-between text-xs text-brown-100">
        <span>{progress}%</span>
        <span>
          {checkedTaskCount} / {totalTaskCount}
        </span>
      </div>
    </Link>
  );
};
