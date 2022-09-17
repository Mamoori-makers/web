import styled from 'styled-components';

import { Banner } from '@/components/common/Banner';
import { ProgressBar } from '@/components/common/ProgressBar';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER, CHECK_LIST } from '@/constants/checklist';
import { Container } from '@/styles/common';
import { flexBox } from '@/styles/flexBox';

const Title = styled.p`
  width: 100%;
  font: ${({ theme: { font } }) => font.bold_extra_large};
  padding: 30px 0 20px 0;
  color: ${({ theme: { color } }) => color.brown[300]};
`;

const Wrapper = styled.div`
  ${flexBox({ justifyContent: 'flex-start' })}
  padding: 15px 0;

  & > :first-child {
    margin-right: 15px;
  }
`;

const CheckListItem = ({ text }) => {
  return (
    <Wrapper>
      <input type="checkbox" />
      <p>{text}</p>
    </Wrapper>
  );
};

export const CheckList = () => {
  const percent = 25;

  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.checklist}
        size="large"
      />
      <Container>
        <Title>당신의 마무리 준비 정도는 {percent}% 입니다.</Title>
        <ProgressBar percent={percent} />
        <div
          style={{
            padding: '20px',
            border: '1px solid grey',
            borderRadius: '20px',
            margin: '20px 0',
          }}
        >
          {CHECK_LIST.map(v => (
            <CheckListItem text={v} />
          ))}
        </div>
      </Container>
    </>
  );
};
