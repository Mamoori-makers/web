import { Banner } from '@/components/common/Banner';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER } from '@/constants/my';
import { Container } from '@/styles/common';

export const My = () => {
  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.my}
        size="large"
      />
      <Container>.</Container>
    </>
  );
};
