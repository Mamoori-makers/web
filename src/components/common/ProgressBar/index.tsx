import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
`;
const Background = styled.div`
  background: ${({ theme: { color } }) => color.grey[200]};
  width: 100%;
  height: 20px;
  border-radius: 20px;
`;
const Progress = styled.div<{ percent: number }>`
  background: ${({ theme: { color } }) => color.brown[300]};
  width: ${({ percent }) => `${percent}%`};
  height: 20px;
  border-radius: 20px;
`;

export const ProgressBar = ({ percent }) => {
  return (
    <Wrapper>
      <Background>
        <Progress percent={percent} />
      </Background>
    </Wrapper>
  );
};
