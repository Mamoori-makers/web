import { gradientTextStyle } from '@/constants/classNames/gradientTextStyle';

import { IntroBox, IntroTitle, IntroContents } from './IntroTextBox';

export const HomeIntro = () => {
  return (
    <IntroBox>
      <IntroTitle>
        <span className={`font-extrabold ${gradientTextStyle}`}>마무리</span>는 어떤 서비스인가요?
      </IntroTitle>
      <IntroContents>
        <p>
          일상을 살다 보면 우리는 <span className="block sm:hidden"></span>죽음에 대해서 잊고 지낼
          때가 많아요.
        </p>
        <p>
          하지만 {''}
          <span className="font-bold underline decoration-yellow-600 decoration-wavy decoration-2">
            죽음은 우리 모두가 마주해야 하기 때문에,
          </span>
          <span className="block sm:hidden"></span>
          이에 대한 대비가 꼭 필요해요.
        </p>
        <p>
          죽음을 어떻게 준비해야 하는지 막막한 분들을 위해 <span className="block sm:hidden"></span>
          마무리가 준비했어요.
        </p>
      </IntroContents>
    </IntroBox>
  );
};
