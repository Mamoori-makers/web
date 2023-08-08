import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { ProfileImage } from '@/components/ProfileImage';

export default function MyPage() {
  return (
    <>
      <GNB />
      <main className="flex flex-col items-center">
        <div className="flex h-[400px] w-full justify-center bg-brown-100">
          <div className="flex flex-col items-center justify-center">
            <ProfileImage imageSrc="/assets/mamoori_profile.png" alt="profile" size={100} />
            <p className="my-3 text-white">Email</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
