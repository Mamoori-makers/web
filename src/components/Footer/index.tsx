import Image from 'next/image';

export const Footer = () => {
  return (
    <div
      className="px-28 py-12 text-white"
      style={{ background: 'linear-gradient(to right, #413C3A, #67615E)' }}
    >
      <Image
        src="/assets/mamoori-favicon.jpg"
        alt="mamoori logo"
        width={50}
        height={50}
        className="mb-10 rounded-lg"
      />
      <p className="my-4 text-lg">
        Embrace life&apos;s end with grace - our site helps you prepare.
      </p>
      <p className="text-gray-300">© 2023 Mamoori. All rights reserved.</p>
    </div>
  );
};
