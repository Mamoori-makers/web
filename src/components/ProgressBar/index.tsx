type ProgressBarProps = {
  percent: number;
};

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="h-4 rounded-md bg-stone-200">
      <div className="h-4 rounded-md bg-brown-100" style={{ width: `${percent}%` }} />
    </div>
  );
};
