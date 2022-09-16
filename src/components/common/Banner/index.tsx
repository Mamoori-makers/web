import styled from 'styled-components';

import { Button } from '@/components/common/Button';
import { flexBox } from '@/styles/flexBox';

type BannerProps = {
  background?: string;
  color?: string;
  size?: string;
  mainText?: string;
  subText?: string;
  hasButton?: boolean;
  buttonText?: string;
  onClick?: () => void;
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
  if (size === 'small') return '200px';
};

const BannerBox = styled.div<BannerProps>`
  ${flexBox({ direction: 'column' })}
  background: ${({ background }) => getBannerbackground(background)};
  width: 100%;
  height: ${({ size }) => getBannerSize(size)};
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainText = styled.p`
  font: ${({ theme: { font } }) => font.display_medium};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 30px;
  text-shadow: 3px 3px 13px #413c3a;
`;

const SubText = styled.p`
  font: ${({ theme: { font } }) => font.regular_extra_large};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 30px;
  text-shadow: 2px 2px 10px #413c3a;
`;

export const Banner = ({
  background,
  color,
  size = 'small',
  mainText,
  subText,
  hasButton = false,
  buttonText = '',
  onClick,
}: BannerProps) => {
  return (
    <BannerBox background={background} color={color} size={size}>
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
      {hasButton && <Button text={buttonText} onClick={onClick} />}
    </BannerBox>
  );
};
