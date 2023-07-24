import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants/bannerData';

export default function Community() {
  return (
    <main>
      <Banner bannerData={BANNER_DATA.community} />
    </main>
  );
}
