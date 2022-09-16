/* eslint-disable react/jsx-props-no-spreading */
import { IntroBox } from './IntroBox';

import { Banner } from '@/components/common/Banner';
import { BANNER, INTRO_BOX } from '@/constants/home';
import { ROUTE } from '@/constants/routes';
import useMovePage from '@/hooks/useMovePage';
import { Container } from '@/styles/common';

export const Home = () => {
  const [goRoadMap] = useMovePage([ROUTE.roadmap]);

  return (
    <>
      <Banner
        mainText={BANNER.TOP.main}
        subText={BANNER.TOP.sub}
        size="large"
        background="https://files.wallpaperpass.com/2019/09/4k%20space%20008%20-%202560x1024.jpg"
      />

      <Container>
        {INTRO_BOX.map(v => (
          <IntroBox {...v} />
        ))}
      </Container>
      <Banner
        background="brown"
        size="large"
        mainText={BANNER.BOTTOM.main}
        subText={BANNER.BOTTOM.sub}
        hasButton
        buttonText={BANNER.BOTTOM.button}
        onClick={goRoadMap}
      />
    </>
  );
};
