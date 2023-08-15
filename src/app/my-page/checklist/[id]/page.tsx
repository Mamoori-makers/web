'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { PrevIcon, NextIcon } from '@/icons/NextPrevIcons';
import { useDeleteChecklist, useGetChecklistById } from '@/libs/react-query/useChecklist';
import { formatDateTime, formatDateToKorean } from '@/utils/date';

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

  const handleDeleteChecklist = () => {
    if (!confirm('체크리스트를 삭제하시겠습니까?')) {
      return;
    }
    deleteChecklist();
    goMyChecklist();
  };

  const handlePrevButtonClick = () => {
    if (checklist?.prevId) {
      router.push(`${ROUTE_PATH.myPage.checklist}/${checklist.prevId}`);
    }
  };

  const handleNextButtonClick = () => {
    if (checklist?.nextId) {
      router.push(`${ROUTE_PATH.myPage.checklist}/${checklist.nextId}`);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full items-center justify-between px-5">
          <button onClick={handlePrevButtonClick} disabled={!checklist?.prevId}>
            <PrevIcon enabled={Boolean(checklist?.prevId)} />
          </button>
          <h1 className="text-lg font-bold">
            {formatDateToKorean(checklist?.createdAt)}의 체크리스트
          </h1>
          <button onClick={handleNextButtonClick} disabled={!checklist?.nextId}>
            <NextIcon enabled={Boolean(checklist?.nextId)} />
          </button>
        </div>
        <span className="text-sm text-brown-100">{formatDateTime(checklist?.createdAt)}</span>
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
