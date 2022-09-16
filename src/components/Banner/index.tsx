import styled from 'styled-components';

import { Button } from '@/components/common/Button';
import { flexBox } from '@/styles/flexBox';

type BannerProps = {
  bgColor?: string;
  color?: string;
  size?: string;
  mainText?: string;
  subText?: string;
  hasButton?: boolean;
  buttonText?: string;
  onClick?: () => void;
};

const getBannerBgColor = (bgColor?: string) => {
  if (bgColor === 'brown') {
    return `#544e4b;`;
  }
  return `linear-gradient(#544e4b, #9a9999);`;
};

const BannerBox = styled.div<BannerProps>`
  ${flexBox({ direction: 'column' })}
  background: ${({ bgColor }) => getBannerBgColor(bgColor)};
  width: 100%;
  height: 400px;
`;

const MainText = styled.p`
  font: ${({ theme: { font } }) => font.display_medium};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 30px;
`;

const SubText = styled.p`
  font: ${({ theme: { font } }) => font.regular_extra_large};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 30px;
`;

export const Banner = ({
  bgColor,
  color,
  size,
  mainText,
  subText,
  hasButton = false,
  buttonText = '',
  onClick,
}: BannerProps) => {
  return (
    <BannerBox bgColor={bgColor} color={color} size={size}>
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
      {hasButton && <Button text={buttonText} onClick={onClick} />}
    </BannerBox>
  );
};
