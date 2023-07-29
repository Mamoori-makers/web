import Image from 'next/image';

type ProfileImageProps = {
  imageSrc: string;
  alt: string;
  size?: number;
};

export const ProfileImage = ({ imageSrc, alt, size = 40 }: ProfileImageProps) => {
  return (
    <Image
      className="rounded-full border border-gray-500"
      src={imageSrc}
      alt={alt}
      width={size}
      height={size}
    />
  );
};
