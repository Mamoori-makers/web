/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

import { IntroBox } from './IntroBox';

import { Banner } from '@/components/Banner';
import { BANNER, INTRO_BOX } from '@/constants/home';
import { ROUTE } from '@/constants/routes';
import useMovePage from '@/hooks/useMovePage';

const Container = styled.div`
  margin: 0 150px;
`;

export const Home = () => {
  const [goRoadMap] = useMovePage([ROUTE.roadmap]);

  return (
    <>
      <Banner mainText={BANNER.TOP.main} subText={BANNER.TOP.sub} />

      <Container>
        {INTRO_BOX.map(v => (
          <IntroBox {...v} />
        ))}
      </Container>
      <Banner
        bgColor="brown"
        mainText={BANNER.BOTTOM.main}
        subText={BANNER.BOTTOM.sub}
        hasButton
        buttonText={BANNER.BOTTOM.button}
        onClick={goRoadMap}
      />
    </>
  );
};
