import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { IntroItem } from '@/components/Intro';
import { HomeIntro } from '@/components/Intro/HomeIntro';
import { BANNER_DATA } from '@/constants/textData/bannerData';
import { IntroItemData } from '@/constants/textData/introItemData';

export default function Home() {
  return (
    <>
      <GNB />
      <main>
        <Banner bannerData={BANNER_DATA.root} />
        <HomeIntro />
        <div className="mt-5 flex flex-col items-center">
          {IntroItemData.map((data) => (
            <IntroItem data={data} key={data.id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
