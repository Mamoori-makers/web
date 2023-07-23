import { Banner } from '@/components/Banner';
import { IntroItem, IntroTextBox } from '@/components/Intro';
import { BANNER_DATA } from '@/constants/bannerData';
import { IntroItemData } from '@/constants/introItemData';

export default function Home() {
  return (
    <main>
      <Banner bannerData={BANNER_DATA.root} />
      <IntroTextBox />
      <div className="mt-5 flex flex-col items-center">
        {IntroItemData.map((data) => (
          <IntroItem data={data} key={data.id} />
        ))}
      </div>
    </main>
  );
}
