import Image from 'next/image';
import Link from 'next/link';

type MainLogoProps = {
  onClose: () => void;
};

export const MainLogo = ({ onClose }: MainLogoProps) => {
  return (
    <Link href="/" className="w-[130px] sm:w-[160px] lg:w-[200px]" onClick={onClose}>
      <Image src="/assets/mamoori-logo.png" alt="logo" width={200} height={50} />
    </Link>
  );
};
