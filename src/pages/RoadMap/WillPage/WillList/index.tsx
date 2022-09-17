import styled from 'styled-components';

import { Button } from '@/components/common/Button';
import { WILL_LIST } from '@/constants/will';
import useMovePage from '@/hooks/useMovePage';
import { flexBox } from '@/styles/flexBox';

const ListHeader = styled.div`
  ${flexBox({
    justifyContent: 'space-between',
  })}
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme: { color } }) => color.grey[200]};
`;

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

  & > :last-child {
    font: ${({ theme: { font } }) => font.regular_small};
    color: ${({ theme: { color } }) => color.grey[400]};
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

const ListItem = ({ title, date, contents }) => {
  return (
    <Item>
      <TopBox>
        <p>{title}</p>
        <Date>{date}</Date>
      </TopBox>
      <p>{contents}</p>
    </Item>
  );
};

export const WillList = () => {
  const [goNewWill] = useMovePage('/roadmap/will/new');

  return (
    <div style={{ marginBottom: '50px' }}>
      <ListHeader>
        <p>최신순</p>
        <Button text="작성하기" size="small" onClick={goNewWill} />
      </ListHeader>
      {WILL_LIST.map(({ id, title, date, contents }) => (
        <ListItem key={id} title={title} date={date} contents={contents} />
      ))}
    </div>
  );
};
