import { Banner } from '@/components/Banner';
import { GNB } from '@/components/GNB';
import { BANNER_DATA } from '@/constants/bannerData';

export default function Home() {
  return (
    <main className="">
      <GNB />
      <Banner bannerData={BANNER_DATA.root} />
    </main>
  );
}
