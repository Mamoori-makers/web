import styled from 'styled-components';

import { Button } from '@/components/common/Button';
import { flexBox } from '@/styles/flexBox';

const ListHeaderWrapper = styled.div`
  ${flexBox({
    justifyContent: 'space-between',
  })}
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme: { color } }) => color.grey[200]};
`;

export const ListHeader = ({ goPage = null, hasButton = true, text = '최신순' }) => {
  return (
    <ListHeaderWrapper>
      <p>{text}</p>
      {hasButton && <Button text="작성하기" size="small" onClick={goPage} />}
    </ListHeaderWrapper>
  );
};
