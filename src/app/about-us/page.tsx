import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { AboutUsIntro } from '@/components/Intro/AboutUsIntro';
import { BANNER_DATA } from '@/constants/textData/bannerData';

export default function AboutUs() {
  return (
    <>
      <GNB />
      <main>
        <Banner bannerData={BANNER_DATA.aboutUs} />
        <AboutUsIntro />
      </main>
      <Footer />
    </>
  );
}
