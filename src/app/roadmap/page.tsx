import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants/bannerData';

export default function Roadmap() {
  return (
    <main>
      <Banner bannerData={BANNER_DATA.roadmap} />
    </main>
  );
}
