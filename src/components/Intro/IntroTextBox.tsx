import { gradientTextStyle } from './IntroItem';

export const IntroTextBox = () => {
  return (
    <div className="m-12 flex flex-col items-center">
      <h1 className="mb-3 text-2xl font-bold lg:m-3 lg:text-4xl">
        <span className={`font-extrabold ${gradientTextStyle}`}>마무리</span>는 어떤 서비스인가요?
      </h1>
      <div className="flex flex-col items-center text-center lg:text-lg">
        <p>일상을 살다 보면 우리는 죽음에 대해서 잊고 지낼 때가 많아요.</p>
        <p>하지만 죽음은 우리 모두가 마주해야 하기 때문에, 이에 대한 대비가 꼭 필요해요.</p>
        <p>죽음을 어떻게 준비해야 하는지 막막한 분들을 위해 마무리가 준비했어요.</p>
      </div>
    </div>
  );
};
