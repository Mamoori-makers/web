import Image from 'next/image';

type IntroItemProps = {
  data: {
    mainText: string;
    subText: string;
    imageUrl: string;
    id: string;
    hasBackground: boolean;
  };
};

export const IntroItem = ({ data }: IntroItemProps) => {
  const { mainText, subText, imageUrl, id, hasBackground } = data;

  return (
    <div
      className="flex w-full flex-col items-center gap-3 py-12"
      style={{ backgroundColor: hasBackground ? '#934e0324' : '' }}
    >
      <h3 className="text-3xl font-bold">{mainText}</h3>
      <Image src={imageUrl} alt={id} width={460} height={300} className="rounded-xl" />
      <p className="px-12 text-lg">{subText}</p>
    </div>
  );
};

export const IntroTextBox = () => {
  return (
    <div className="m-12 flex flex-col items-center">
      <h1 className="m-3 text-4xl font-bold">
        <span className="bg-gradient-to-r from-yellow-800 to-yellow-600 bg-clip-text font-extrabold text-transparent">
          마무리
        </span>
        는 어떤 서비스인가요?
      </h1>
      <div className="flex flex-col items-center text-lg">
        <p>일상을 살다 보면 우리는 죽음에 대해서 잊고 지낼 때가 많습니다.</p>
        <p>하지만 죽음은 우리 모두가 당면하는 일이며, 이에 대한 대비가 필요합니다.</p>
      </div>
    </div>
  );
};
