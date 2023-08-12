'use client';

import * as Checkbox from '@radix-ui/react-checkbox';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';

import { IconTitle } from '@/components/IconTitle';
import { ROADMAP_STEPS } from '@/constants/textData/roadmapData';
import { useChecklistTask } from '@/libs/react-query/useChecklist';

import { CheckIcon } from './checkIcon';
import { ChecklistSkeleton } from './ChecklistSkeleton';

type CheckItemProps = {
  content: string;
  setCheckCount: Dispatch<SetStateAction<number>>;
  id: string;
};

const CheckItem = ({ content, setCheckCount, id }: CheckItemProps) => {
  const handleCheck = (isChecked: boolean) => {
    isChecked ? setCheckCount((prev) => prev + 1) : setCheckCount((prev) => prev - 1);
  };

  return (
    <div className="flex p-2">
      <Checkbox.Root
        id={id}
        className="flex h-5 w-5 min-w-[20px] items-center justify-center rounded-md bg-stone-300 shadow-md shadow-stone-500/50 hover:bg-stone-400"
        onCheckedChange={handleCheck}
      >
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-3" htmlFor={id}>
        {content}
      </label>
    </div>
  );
};

export default function Checklist() {
  const [checkCount, setCheckCount] = useState(0);
  const router = useRouter();
  const { data: checklistTasks, isSuccess } = useChecklistTask();

  // TODO: implement checklist save feature
  const handleSaveResultClick = () => {
    router.push('/login');
  };

  return (
    <div className="roadmap-container">
      <IconTitle data={ROADMAP_STEPS.step3} />
      <div className="mt-6 rounded-lg bg-slate-500 p-3 text-white">
        <p className="mb-3 font-semibold">나의 죽음 준비는 어느 정도일까요?</p>
        <p className="mb-2 text-sm text-gray-200">
          ✓ 마무리가 준비한 체크리스트를 통해 구체적으로 무엇이 준비되었고 무엇이 그렇지 않은지
          확인할 수 있어요.
        </p>
        <p className="text-sm text-gray-200">
          ✓ 지금의 마무리 준비 정도를 저장하고, 아직 부족한 부분이 있다면 더 준비한 후 다시 돌아와
          체크할 수도 있어요.
        </p>
      </div>
      {isSuccess && checklistTasks ? (
        <>
          <div className="p-3 text-end text-sm text-brown-200">{`${checkCount} / ${checklistTasks.length}`}</div>
          <div className="mb-5">
            {checklistTasks.map(({ id, task }) => {
              return (
                <CheckItem
                  key={id}
                  content={task}
                  setCheckCount={setCheckCount}
                  id={id.toString()}
                />
              );
            })}
          </div>
        </>
      ) : (
        <ChecklistSkeleton />
      )}
      <div className="flex flex-col items-center">
        <button
          className="my-1 w-full rounded-lg bg-brown-100 p-2 text-white shadow-md shadow-stone-500/50 sm:w-96"
          onClick={handleSaveResultClick}
        >
          결과 저장하기
        </button>
      </div>
    </div>
  );
}
