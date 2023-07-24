import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants/bannerData';

export default function AboutUs() {
  return (
    <main>
      <Banner bannerData={BANNER_DATA.aboutUs} />
    </main>
  );
}
