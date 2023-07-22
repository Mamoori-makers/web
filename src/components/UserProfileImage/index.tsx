'use client';

import Image from 'next/image';

const SAMPLE_USER_DATA = {
  userName: 'Mamoori',
  imageUrl: '/assets/Mamoori_profile.png',
};

export const UserProfileImage = () => {
  return (
    <Image
      className="rounded-full border border-gray-500"
      src={SAMPLE_USER_DATA.imageUrl}
      alt={SAMPLE_USER_DATA.userName}
      width={40}
      height={40}
    />
  );
};
