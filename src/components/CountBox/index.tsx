type CountBoxProps = {
  title: string;
  count: number | string;
  unit?: string;
  backgroundColor: string;
  textColor?: string;
};

export const CountBox = ({
  title,
  count,
  unit,
  backgroundColor,
  textColor = 'white',
}: CountBoxProps) => {
  return (
    <div
      className="flex min-h-[120px] max-w-[160px] flex-col justify-between rounded-md p-3 text-center drop-shadow-lg"
      style={{ backgroundColor, color: textColor }}
    >
      <p className="text-sm">{title}</p>
      <p className="text-4xl">
        {count}
        {unit}
      </p>
    </div>
  );
};
