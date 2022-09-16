import styled from 'styled-components';

import { Button } from '@/components/common/Button';
import useMovePage from '@/hooks/useMovePage';
import { flexBox } from '@/styles/flexBox';

const Image = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 20px;
`;

const Title = styled.p`
  font: ${({ theme: { font } }) => font.display_small};
  color: ${({ theme: { color } }) => color.brown[300]};
  width: 100%;

  & > * {
    display: block;
  }
`;
const Text = styled.p`
  font: ${({ theme: { font } }) => font.regular_large};
  color: ${({ theme: { color } }) => color.brown[300]};
`;

const Wrapper = styled.div`
  ${flexBox({})}
  padding: 50px 0;
`;

const ContentsBox = styled.div<{ isImageLeft: boolean }>`
  ${flexBox({ direction: 'column' })}
  width: 380px;
  margin-left: ${({ isImageLeft }) => isImageLeft && '50px'};
  margin-right: ${({ isImageLeft }) => (isImageLeft ? '0px' : '50px')};

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Contents = ({ isImageLeft = false, title, contents, buttonText, goPage }) => {
  return (
    <ContentsBox isImageLeft={isImageLeft}>
      <Title>
        {title.map(t => (
          <span>{t}</span>
        ))}
      </Title>
      <Text>{contents}</Text>
      <Button text={buttonText} onClick={goPage} />
    </ContentsBox>
  );
};

export const IntroBox = ({ title, contents, buttonText, buttonLink, imageUrl, isImageLeft }) => {
  const [goPage] = useMovePage(buttonLink);

  return (
    <Wrapper>
      {isImageLeft ? (
        <>
          <Image src={imageUrl} />
          <Contents
            isImageLeft={isImageLeft}
            title={title}
            contents={contents}
            buttonText={buttonText}
            goPage={goPage}
          />
        </>
      ) : (
        <>
          <Contents title={title} contents={contents} buttonText={buttonText} goPage={goPage} />
          <Image src={imageUrl} />
        </>
      )}
    </Wrapper>
  );
};
