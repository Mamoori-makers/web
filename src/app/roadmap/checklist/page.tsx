'use client';

import * as Checkbox from '@radix-ui/react-checkbox';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { IconTitle } from '@/components/IconTitle';
import { ROUTE_PATH } from '@/constants/paths/routePath';
import { ROADMAP_STEPS } from '@/constants/textData/roadmapData';
import { CheckIcon } from '@/icons/CheckIcon';
import {
  AddChecklistPayloadType,
  useAddChecklist,
  useChecklistTask,
  useGetTodayChecklist,
} from '@/libs/react-query/useChecklist';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

import { ChecklistSkeleton } from './ChecklistSkeleton';

type CheckItemProps = {
  content: string;
  setCheckCount: Dispatch<SetStateAction<number>>;
  setChecklistState: Dispatch<SetStateAction<AddChecklistPayloadType[]>>;
  id: string;
};

const CheckItem = ({ content, setCheckCount, setChecklistState, id }: CheckItemProps) => {
  const handleCheck = (isChecked: boolean) => {
    if (isChecked) {
      setCheckCount((prev) => prev + 1);
      setChecklistState((prev) => [...prev, { id: Number(id), isChecked }]);
    } else {
      setCheckCount((prev) => prev - 1);
      setChecklistState((prev) => {
        const filtered = prev.filter((v) => v.id !== Number(id));
        return filtered;
      });
    }
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
  const { data: todayChecklist, isSuccess: isTodaySuccess } = useGetTodayChecklist();
  const [checkCount, setCheckCount] = useState(0);
  const [checklistState, setChecklistState] = useState<AddChecklistPayloadType[]>([]);
  const router = useRouter();
  const { data: checklistTasks, isSuccess: isTaskSuccess } = useChecklistTask();
  const { mutate: addChecklist, isSuccess: isAddSuccess, isError: isAddError } = useAddChecklist();
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
  const isLoggedIn = useAtomValue(loginStateAtom);

  const handleSubmitChecklist = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLoggedIn) {
      router.push(ROUTE_PATH.login);
      return;
    }
    if (checklistState && checklistState.length) {
      addChecklist(checklistState);
    }
  };

  useEffect(() => {
    if (isTodaySuccess) {
      if (todayChecklist.isTodayChecklistCreated) {
        setIsSaveButtonDisabled(true);
      } else {
        setIsSaveButtonDisabled(false);
      }
    }

    if (isAddSuccess) {
      toast(`체크리스트 결과를 저장했어요!
        마이페이지에서 확인할 수 있어요.`);
      setIsSaveButtonDisabled(true);
      return;
    }

    if (isAddError) {
      toast(`체크리스트를 저장하지 못했어요.`);
      return;
    }
  }, [isAddSuccess, isAddError, isTodaySuccess, todayChecklist]);

  return (
    <>
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
        <form onSubmit={handleSubmitChecklist}>
          {isTaskSuccess && checklistTasks ? (
            <>
              <div className="p-3 text-end text-sm text-brown-200">{`${checkCount} / ${checklistTasks.length}`}</div>
              <div className="mb-5">
                {checklistTasks.map(({ id, task }) => {
                  return (
                    <CheckItem
                      key={id}
                      content={task}
                      setCheckCount={setCheckCount}
                      setChecklistState={setChecklistState}
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
            <span className="text-sm text-brown-100">
              *체크리스트는 최대 하루에 한 번 저장할 수 있어요.
            </span>
            <button
              className="my-1 w-full rounded-lg bg-brown-100 p-2 text-white shadow-md shadow-stone-500/50 sm:w-96"
              disabled={checkCount === 0 || isSaveButtonDisabled}
              style={{ opacity: checkCount === 0 || isSaveButtonDisabled ? '0.5' : 1 }}
            >
              체크리스트 저장하기
            </button>
          </div>
        </form>
      </div>
      <Toaster
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          style: {
            background: 'rgb(214 211 209)',
          },
        }}
      />
    </>
  );
}
