import Image from 'next/image';

type IntroItemProps = {
  data: {
    mainText: string;
    gradientText: string;
    subText: string;
    imageName: string;
    id: string;
    hasBackground: boolean;
  };
};

export const gradientTextStyle =
  'bg-gradient-to-r from-yellow-800 to-yellow-600 bg-clip-text text-transparent';

export const IntroItem = ({ data }: IntroItemProps) => {
  const { mainText, gradientText, subText, imageName, id, hasBackground } = data;

  return (
    <div
      className="flex w-full flex-col items-center gap-5 px-8 py-12"
      style={{ backgroundColor: hasBackground ? '#934e0324' : '' }}
    >
      <h3 className="text-2xl font-bold sm:text-3xl">
        {mainText}
        <span className={`block font-extrabold sm:inline ${gradientTextStyle}`}>
          {gradientText}
        </span>
      </h3>
      <Image
        src={`/assets/intro/${imageName}`}
        alt={id}
        width={460}
        height={300}
        className="rounded-xl"
      />
      <p className="max-w-lg text-base md:text-lg">{subText}</p>
    </div>
  );
};
