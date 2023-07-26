import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { IntroItem, IntroTextBox } from '@/components/Intro';
import { BANNER_DATA } from '@/constants/bannerData';
import { IntroItemData } from '@/constants/introItemData';

export default function Home() {
  return (
    <>
      <GNB />
      <main>
        <Banner bannerData={BANNER_DATA.root} />
        <IntroTextBox />
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
