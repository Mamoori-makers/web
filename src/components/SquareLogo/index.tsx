import Image from 'next/image';

export const SquareLogo = ({ size = 50 }) => {
  return (
    <Image
      src="/assets/mamoori-favicon.jpg"
      alt="mamoori logo"
      width={size}
      height={size}
      className="mb-10 rounded-lg"
    />
  );
};
