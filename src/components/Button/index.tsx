type ButtonProps = {
  handler?: () => void;
  backgroundColor?: string;
  textColor?: string;
  buttonText: string;
};

export const Button = ({ handler, backgroundColor, textColor, buttonText }: ButtonProps) => {
  return (
    <>
      <button
        className="truncate rounded-md bg-stone-400 p-2 drop-shadow-md"
        type="button"
        onClick={handler}
        style={{ backgroundColor, color: textColor }}
      >
        <div className="flex items-center justify-center">
          <span className="ml-1 text-sm font-light tracking-widest text-white">{buttonText}</span>
        </div>
      </button>
    </>
  );
};
