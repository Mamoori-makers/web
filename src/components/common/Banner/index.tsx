import styled, { css } from 'styled-components';

import { Button } from '@/components/common/Button';
import { useToggleSlide } from '@/hooks/useToggleSlide';
import { flexBox } from '@/styles/flexBox';

type BannerProps = {
  background?: string;
  color?: string;
  size?: string;
  mainText?: string;
  subText: Array<string> | [];
  hasButton?: boolean;
  buttonText?: string;
  onClick?: () => void;
};

type BannerBox = {
  background?: string;
  size?: string;
};

const getBannerbackground = (background?: string) => {
  if (background === 'brown') {
    return `#544e4b;`;
  }
  if (background === 'brown-gradient') {
    return `linear-gradient(#544e4b, #9a9999);`;
  }
  return `url(${background})`;
};

// eslint-disable-next-line consistent-return
const getBannerSize = (size?: string) => {
  if (size === 'large') return '500px';
  if (size === 'small') return '400px';
};

const slideUp = css`
  bottom: 30%;
  opacity: 100;
  transition: 1s;
`;

const BannerBox = styled.div<BannerBox>`
  ${flexBox({ direction: 'column' })}
  background: ${({ background }) => getBannerbackground(background)};
  width: 100%;
  height: ${({ size }) => getBannerSize(size)};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const MainText = styled.p`
  font: ${({ theme: { font } }) => font.display_medium};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 30px;
  text-shadow: 3px 3px 13px #413c3a;
  text-align: center;
`;

const SubText = styled.p`
  font: ${({ theme: { font } }) => font.regular_extra_large};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 10px;
  text-shadow: 2px 2px 10px #413c3a;
  text-align: center;
`;

const SlideBox = styled.div<{ slide: boolean }>`
  ${flexBox({ direction: 'column' })}
  position: absolute;
  bottom: 0;
  opacity: 0;
  ${({ slide }) => slide && slideUp}
`;

export const Banner = ({
  background,
  color,
  size = 'small',
  mainText,
  subText = [],
  hasButton = false,
  buttonText = '',
  onClick,
}: BannerProps) => {
  const isSlide = useToggleSlide();

  return (
    <BannerBox background={background} color={color} size={size}>
      <SlideBox slide={isSlide} className="slideDown">
        <MainText>{mainText}</MainText>
        {subText.map(v => (
          <SubText>{v}</SubText>
        ))}
        {hasButton && <Button text={buttonText} onClick={onClick} />}
      </SlideBox>
    </BannerBox>
  );
};
