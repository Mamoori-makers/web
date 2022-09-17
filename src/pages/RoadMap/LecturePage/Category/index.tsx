import styled from 'styled-components';

import { Button } from '@/components/common/Button';
import { CATEGORIES } from '@/constants/lecture';
import { flexBox } from '@/styles/flexBox';

const Wrapper = styled.div`
  ${flexBox({ justifyContent: 'flex-start' })}
  margin: 30px 0;

  & > * {
    margin-right: 10px;
  }
`;

export const Category = ({ onClick }) => {
  return (
    <Wrapper>
      {CATEGORIES.map(({ name, api }) => (
        <Button onClick={() => onClick(name)} size="small" text={name} />
      ))}
    </Wrapper>
  );
};
