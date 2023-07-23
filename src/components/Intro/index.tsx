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

const gradientTextStyle =
  'bg-gradient-to-r from-yellow-800 to-yellow-600 bg-clip-text text-transparent';

export const IntroItem = ({ data }: IntroItemProps) => {
  const { mainText, gradientText, subText, imageName, id, hasBackground } = data;

  return (
    <div
      className="flex w-full flex-col items-center gap-5 py-12"
      style={{ backgroundColor: hasBackground ? '#934e0324' : '' }}
    >
      <h3 className="text-3xl font-bold">
        {mainText}
        <span className={`font-extrabold ${gradientTextStyle}`}>{gradientText}</span>
      </h3>
      <Image
        src={`/assets/intro/${imageName}`}
        alt={id}
        width={460}
        height={300}
        className="rounded-xl"
      />
      <p className="max-w-lg text-lg">{subText}</p>
    </div>
  );
};

export const IntroTextBox = () => {
  return (
    <div className="m-12 flex flex-col items-center">
      <h1 className="m-3 text-4xl font-bold">
        <span className={`font-extrabold ${gradientTextStyle}`}>마무리</span>는 어떤 서비스인가요?
      </h1>
      <div className="flex flex-col items-center text-lg">
        <p>일상을 살다 보면 우리는 죽음에 대해서 잊고 지낼 때가 많아요.</p>
        <p>하지만 죽음은 우리 모두가 마주해야 하기 때문에, 이에 대한 대비가 꼭 필요해요.</p>
        <p>죽음을 어떻게 준비해야 하는지 막막한 분들을 위해 마무리가 준비했어요.</p>
      </div>
    </div>
  );
};
