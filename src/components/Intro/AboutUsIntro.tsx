import Image from 'next/image';

import { gradientTextStyle } from '@/constants/classNames/gradientTextStyle';
import { MEMBER_DATA } from '@/constants/textData/memberData';

import { MemberCard } from '../MemberCard';

import { IntroBox, IntroTitle, IntroContents } from './IntroTextBox';

export const AboutUsIntro = () => {
  return (
    <>
      <IntroBox>
        <IntroTitle>
          <span className={`font-extrabold ${gradientTextStyle}`}>마무리</span>는 이렇게 시작됐어요
        </IntroTitle>
        <IntroContents>
          <Image
            src="/assets/about/1.jpg"
            width={460}
            height={300}
            alt="thinking"
            className="rounded-xl"
          />
          <p>
            일상에서 죽음에 대해 논하는 것을 기피하는 문화, {''}
            <span className="block sm:hidden"></span>
            죽음을 정식 교과 과정에서 다루지 않는 문제.
          </p>
          <p>
            이러한 사회적, 문화적 분위기 속에서 <span className="block sm:hidden"></span>
            우리는 죽음이라는 것을 잊고 바쁘게 살아갑니다.
          </p>
          <Image
            src="/assets/about/2.jpg"
            width={460}
            height={300}
            alt="grave"
            className="mt-5 rounded-xl lg:mt-10"
          />
          <p>
            하지만 죽음은 누구나 경험하게 되고, <span className="block sm:hidden"></span>
            <span className="font-bold underline decoration-yellow-600 decoration-wavy decoration-2">
              준비가 되어 있지 않으면 이에 대처하기 어렵습니다.
            </span>
          </p>
          <p>
            마무리 메이커스 팀은 <span className="block sm:hidden"></span>이러한 문제를 해결하고
            싶었습니다.
          </p>
        </IntroContents>
      </IntroBox>
      <IntroBox>
        <IntroTitle>
          <span className={`font-extrabold ${gradientTextStyle}`}>마무리</span>와 함께 마무리해요
        </IntroTitle>
        <IntroContents>
          <Image
            src="/assets/about/3.jpg"
            width={460}
            height={300}
            alt="candles"
            className="rounded-xl"
          />
          <p>모두에게 한 번 뿐인 탄생, 그리고 죽음.</p>
          <p>
            죽음을 잘 준비하는 것은, <span className="block sm:hidden"></span>소중한 탄생을 준비하는
            것만큼 중요해요.
          </p>
          <Image
            src="/assets/about/4.jpeg"
            width={460}
            height={300}
            alt="consolation"
            className="mt-5 rounded-xl lg:mt-10"
          />
          <p>
            나의 죽음을 차근차근 준비하는 것부터, <span className="block sm:hidden"></span>
            <p>
              소중한 사람들의 죽음을 <span className="block sm:hidden"></span>진심으로 애도하고
              실질적으로 대처하는 방법까지{' '}
            </p>
            <span className="block sm:hidden"></span>마무리에서 준비했어요.
          </p>
        </IntroContents>
      </IntroBox>
      <IntroBox>
        <IntroTitle>
          <span className={`font-extrabold ${gradientTextStyle}`}>마무리 메이커스</span> 팀을
          소개합니다.
        </IntroTitle>
        <IntroContents>
          <div className="lg:flex">
            {MEMBER_DATA.map((member) => {
              return <MemberCard key={member.id} data={member} />;
            })}
          </div>
        </IntroContents>
      </IntroBox>
    </>
  );
};
