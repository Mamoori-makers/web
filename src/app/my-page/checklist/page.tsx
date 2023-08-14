'use client';

import { CountBox } from '@/components/CountBox';
import { useGetChecklist } from '@/libs/react-query/useChecklist';
import { calculateDaysFromDateString } from '@/utils/date';

import { MyChecklistItem } from './MyChecklistItem';

export default function MyChecklist() {
  const { data: checklistData, isSuccess } = useGetChecklist();

  if (!checklistData || !isSuccess) {
    return <></>;
  }

  return (
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

      <div className="flex w-full flex-col gap-3 p-3">
        {checklistData?.checklists.map(
          ({ id, progress, createdAt, totalTaskCount, checkedTaskCount }) => {
            return (
              <MyChecklistItem
                key={id}
                id={id}
                progress={progress}
                createdAt={createdAt}
                totalTaskCount={totalTaskCount}
                checkedTaskCount={checkedTaskCount}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
