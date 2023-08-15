'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { useDeleteChecklist, useGetChecklistById } from '@/libs/react-query/useChecklist';
import { formatDateToKorean } from '@/utils/date';

import { CheckItem } from '../_components/CheckItem';
import { ChecklistProgressBar } from '../_components/ChecklistProgressBar';

export default function ChecklistItemDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: checklist } = useGetChecklistById(id);
  const { mutate: deleteChecklist } = useDeleteChecklist(id);
  const router = useRouter();
  const goMyChecklist = () => router.push(ROUTE_PATH.myPage.checklist);

  if (!checklist) {
    return <></>;
  }

  const createdAt = dayjs(checklist?.createdAt, 'YYYY.MM.DD HH:mm:ss').toString();

  const handleDeleteChecklist = () => {
    if (!confirm('체크리스트를 삭제하시겠습니까?')) {
      return;
    }
    deleteChecklist();
    goMyChecklist();
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <h1 className="text-lg font-bold">
          {formatDateToKorean(checklist?.createdAt)}의 체크리스트
        </h1>
        <span className="text-sm text-brown-100">{createdAt}</span>
        <div className="w-full bg-[#d0b263ed] p-3">
          <p className="mb-2 text-center font-semibold text-stone-100">나의 마무리 준비 정도</p>
          <ChecklistProgressBar
            progress={checklist?.progress}
            checkedTaskCount={checklist?.checkedTaskCount}
            totalTaskCount={checklist?.totalTaskCount}
          />
        </div>
        <div className="p-3">
          {checklist?.checklist.map(({ id, task, isChecked }) => {
            return <CheckItem key={id} task={task} id={id.toString()} isChecked={isChecked} />;
          })}
        </div>
        <div className="flex w-full justify-between px-5">
          <Button handler={goMyChecklist} buttonText="리스트 보기" />
          <Button handler={handleDeleteChecklist} buttonText="삭제하기" />
        </div>
      </div>
    </>
  );
}
