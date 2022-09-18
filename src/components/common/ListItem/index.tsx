import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const Item = styled.div`
  ${flexBox({ direction: 'column', alignItems: 'flex-start' })}
  padding: 20px;
  border-bottom: 1px solid ${({ theme: { color } }) => color.grey[200]};
  cursor: pointer;

  :hover {
    background: ${({ theme: { color } }) => color.grey[100]};
  }

  & > :first-child {
    font: ${({ theme: { font } }) => font.bold_large};
  }
`;

const Date = styled.p`
  font: ${({ theme: { font } }) => font.regular_extra_small};
  color: ${({ theme: { color } }) => color.grey[300]};
`;

const TopBox = styled.div`
  width: 100%;
  margin-bottom: 15px;
  ${flexBox({ justifyContent: 'space-between' })}
`;

const Author = styled.p`
  font: ${({ theme: { font } }) => font.regular_extra_small};
  color: ${({ theme: { color } }) => color.grey[300]};
  margin-top: 10px;
`;

const Contents = styled.p`
  font: ${({ theme: { font } }) => font.regular_small};
  color: ${({ theme: { color } }) => color.grey[400]};
`;

export const ListItem = ({ title, date, contents, author = null }) => {
  return (
    <Item>
      <TopBox>
        <p>{title}</p>
        <Date>{date}</Date>
      </TopBox>
      <Contents>{contents}</Contents>
      {author && <Author>{author}</Author>}
    </Item>
  );
};
