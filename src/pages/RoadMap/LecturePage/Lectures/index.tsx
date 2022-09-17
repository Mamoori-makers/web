/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const LectureLink = styled.a`
  cursor: pointer;
  flex-wrap: wrap;
  width: 550px;
  margin-bottom: 40px;
  border-radius: 5px;

  :hover > :not(:last-child) {
    text-decoration: underline;
  }
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 100%;
`;

const Title = styled.p`
  font: ${({ theme: { font } }) => font.bold_extra_large};
  color: ${({ theme: { color } }) => color.brown[300]};
  margin: 10px 0;
`;

const Description = styled.p`
  font: ${({ theme: { font } }) => font.regular_medium};
  color: ${({ theme: { color } }) => color.grey[300]};
  margin-bottom: 10px;
  text-decoration: none;
`;

const Wrapper = styled.div`
  ${flexBox({ justifyContent: 'space-between', alignItems: 'baseline' })}
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const LectureItem = ({ title, description, imgUrl, link }) => {
  return (
    <LectureLink href={link}>
      <Thumbnail src={imgUrl} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </LectureLink>
  );
};

export const Lectures = ({ data }) => {
  return (
    <Wrapper>
      {data.map(v => (
        <LectureItem {...v} />
      ))}
    </Wrapper>
  );
};
