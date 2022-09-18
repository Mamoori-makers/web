import styled from 'styled-components';

import { Badge } from '@/components/common/Badge';
import { flexBox } from '@/styles/flexBox';

const CardLink = styled.a`
  ${flexBox({ direction: 'column', alignItems: 'flex-start' })}
  width: 310px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 230px;
  border-radius: 10px;
  background: ${({ theme: { color } }) => color.grey[100]};
`;

const SmallText = styled.p`
  color: ${({ theme: { color } }) => color.brown[200]};
  font: ${({ theme: { font } }) => font.regular_extra_small};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  & > * {
    margin-bottom: 5px;
  }
`;

const BoldText = styled.p`
  font: ${({ theme: { font } }) => font.bold_medium};
`;

export const Card = ({ imgUrl, serviceName, company, description, price, totalPrice, link }) => {
  return (
    <CardLink href={link} target="_blank">
      <Image src={imgUrl} />
      <ContentsWrapper>
        <Badge text={company} />
        <BoldText>{serviceName}</BoldText>
        <SmallText>{description}</SmallText>
        <BoldText>{totalPrice}</BoldText>
        <SmallText>{price}</SmallText>
      </ContentsWrapper>
    </CardLink>
  );
};
