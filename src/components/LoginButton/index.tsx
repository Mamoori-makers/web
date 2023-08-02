import Link from 'next/link';

type LoginButtonProps = {
  platform: string;
  children: React.ReactNode;
};

export const LoginButton = ({ platform, children }: LoginButtonProps) => {
  const AUTH_URL = `${process.env.ENDPOINT}/auth/signin/${platform}`;

  return (
    <Link
      href={AUTH_URL}
      className="mt-4 flex items-center justify-center rounded-3xl border text-gray-600 transition-colors duration-300 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
    >
      <div className="py-2">{children}</div>
      <span className="w-5/6 px-4 py-3 text-center text-sm font-semibold capitalize">
        {platform}로 계속하기
      </span>
    </Link>
  );
};
