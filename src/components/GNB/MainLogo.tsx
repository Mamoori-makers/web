import Image from 'next/image';
import Link from 'next/link';

export const MainLogo = () => {
  return (
    <Link href="/" className="w-[130px] sm:w-[160px] lg:w-[200px]">
      <Image src="/assets/mamoori-logo.png" alt="logo" width={200} height={50} />
    </Link>
  );
};
