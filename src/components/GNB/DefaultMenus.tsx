import Link from 'next/link';

import { ProfileImage } from '@/components/ProfileImage';
import { useActiveMenu } from '@/hooks/useActiveMenu';
import { UserData } from '@/libs/react-query/useUserData';

import { GNB_MENU } from './gnbMenu';

export const DefaultMenus = ({
  isLoggedIn,
  userData,
}: {
  isLoggedIn: boolean;
  userData: UserData;
}) => {
  const { isActiveMenu } = useActiveMenu();

  return (
    <div className="hidden items-center sm:flex">
      {GNB_MENU.map(({ name, link }) => {
        const activeStyle = isActiveMenu(link)
          ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
          : '';

        return (
          <Link
            key={name}
            href={link}
            className={`mr-5 text-sm text-[#eaeaea] lg:text-base ${activeStyle} hover:text-white`}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
          >
            {name}
          </Link>
        );
      })}
      {isLoggedIn ? (
        <Link href="/my-page">
          <ProfileImage imageSrc={userData.image} alt={userData.name} />
        </Link>
      ) : (
        <Link
          href="/login"
          className="rounded-md border-[1px] border-stone-200 px-2 py-1 text-sm text-white hover:opacity-75 lg:text-base"
        >
          Login
        </Link>
      )}
    </div>
  );
};
