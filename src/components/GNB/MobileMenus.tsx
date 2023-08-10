import Link from 'next/link';

import { ProfileImage } from '@/components/ProfileImage';
import { useActiveMenu } from '@/hooks/useActiveMenu';
import { UserData } from '@/libs/react-query/useUserData';

import { GNB_MENU } from './gnbMenu';

export const MobileMenus = ({
  onClose,
  isLoggedIn,
  userData,
}: {
  onClose: () => void;
  isLoggedIn: boolean;
  userData: UserData;
}) => {
  const { isActiveMenu } = useActiveMenu();

  return (
    <div className="flex flex-col items-center px-3 pb-3">
      {GNB_MENU.map(({ name, link }) => {
        const activeStyle = isActiveMenu(link)
          ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
          : '';

        return (
          <Link
            key={name}
            href={link}
            className={`p-3 text-sm text-[#eaeaea] ${activeStyle} w-full hover:bg-brown-200 hover:text-white`}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
            onClick={onClose}
          >
            {name}
          </Link>
        );
      })}
      {isLoggedIn ? (
        <Link href="/my-page" onClick={onClose}>
          <ProfileImage imageSrc={userData.image} alt={userData.name} />
        </Link>
      ) : (
        <Link
          href="/login"
          className="m-3 w-[95%] rounded-md bg-yellow-500 p-2 text-center text-sm hover:opacity-75"
        >
          Login
        </Link>
      )}
    </div>
  );
};
