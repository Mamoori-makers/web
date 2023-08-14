import { ProgressBar } from '@/components/ProgressBar';

type ChecklistProgressBarProps = {
  progress: number;
  checkedTaskCount: number;
  totalTaskCount: number;
};

export const ChecklistProgressBar = ({
  progress,
  checkedTaskCount,
  totalTaskCount,
}: ChecklistProgressBarProps) => {
  return (
    <div className="w-full">
      <ProgressBar percent={progress} />
      <div className="mx-1 mt-1 flex justify-between text-xs text-brown-100">
        <span>{progress}%</span>
        <span>
          {checkedTaskCount} / {totalTaskCount}
        </span>
      </div>
    </div>
  );
};
