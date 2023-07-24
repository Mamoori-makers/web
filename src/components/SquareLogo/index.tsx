import Image from 'next/image';

type SquareLogoProps = {
  size?: number;
  className?: string;
};

export const SquareLogo = ({ size = 50, className = '' }: SquareLogoProps) => {
  return (
    <Image
      src="/assets/mamoori-favicon.jpg"
      alt="mamoori logo"
      width={size}
      height={size}
      className={`${className} rounded-lg`}
    />
  );
};
