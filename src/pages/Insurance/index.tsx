import styled from 'styled-components';

import { Banner } from '@/components/common/Banner';
import { Card } from '@/components/common/Card';
import { ListHeader } from '@/components/common/ListHeader';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER, INSURANCE } from '@/constants/insurance';
import { Container } from '@/styles/common';
import { flexBox } from '@/styles/flexBox';

const CardWrapper = styled.div`
  ${flexBox({ alignItems: 'flex-start' })}
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 0;
`;

export const Insurance = () => {
  const headerText = `총 ${INSURANCE.length}개의 상조 보험 상품이 있습니다.`;

  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.insurance}
        size="large"
      />
      <Container>
        <ListHeader hasButton={false} text={headerText} />
        <CardWrapper>
          {INSURANCE.map(v => (
            <Card {...v} />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
};
