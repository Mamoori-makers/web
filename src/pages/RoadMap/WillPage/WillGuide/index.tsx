import styled from 'styled-components';

import { WILL_GUIDES } from '@/constants/will';

const Title = styled.p`
  font: ${({ theme: { font } }) => font.bold_extra_large};
  text-align: center;
  color: ${({ theme: { color } }) => color.white};
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme: { color } }) => color.brown[200]};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
`;

const ContentsBox = styled.div`
  font: ${({ theme: { font } }) => font.regular_medium};
  color: ${({ theme: { color } }) => color.brown[200]};
  padding: 0 20px;
`;

const SubTitle = styled.p`
  font: ${({ theme: { font } }) => font.bold_large};
  margin-bottom: 5px;
`;

const GuideItem = ({ title, contents }) => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <Title>{title}</Title>
      <ContentsBox>
        {contents.map(({ subTitle, description }) => (
          <div style={{ margin: '15px 0' }}>
            <SubTitle>{subTitle}</SubTitle>
            <p>{description}</p>
          </div>
        ))}
      </ContentsBox>
    </div>
  );
};

export const WillGuide = () => {
  return (
    <div style={{ padding: '0 100px' }}>
      {WILL_GUIDES.map(({ title, contents }) => (
        <GuideItem title={title} contents={contents} />
      ))}
    </div>
  );
};
