/* eslint-disable react/jsx-props-no-spreading */
import * as S from './style';

import { Banner } from '@/components/common/Banner';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER, STEPS } from '@/constants/roadmap';
import useMovePage from '@/hooks/useMovePage';
import { Container } from '@/styles/common';

// TODO: 카드에 사진 추가하는 디자인으로 변경 시 image URL 추가
const Step = ({ stepNum, title, contents, imgUrl, link }) => {
  const [goPage] = useMovePage(link);

  return (
    <S.StepBox onClick={goPage}>
      <S.StepLine>
        <p>Step {stepNum}.</p>
        <p>{title}</p>
      </S.StepLine>
      <S.Card>
        {/* <img src={imgUrl} alt={title} width="300px" /> */}
        <p>
          {contents.map(content => (
            <span style={{ display: 'block', textAlign: 'center' }}>{content}</span>
          ))}
        </p>
      </S.Card>
    </S.StepBox>
  );
};

export const RoadMap = () => {
  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.roadmap}
        size="large"
      />
      <Container>
        <S.RoadMapBox>
          {STEPS.map(v => (
            <Step {...v} />
          ))}
        </S.RoadMapBox>
      </Container>
    </>
  );
};
