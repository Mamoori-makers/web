/* eslint-disable global-require */
import { MenuItem } from './MenuItem';
import * as S from './style';

import { Button } from '@/components/common/Button';
import UserProfile from '@/components/common/UserProfile';
import { NAVBAR_MENU } from '@/constants/navbar';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import useMovePage from '@/hooks/useMovePage';

// TODO: 로그인 여부에 따라 userProfile or Login Button

export const NavBar = () => {
  const [goHome, goMy] = useMovePage(['/', '/my']);
  const isLoggedIn = useIsLoggedIn();

  return (
    <S.NavBar>
      <S.MamooriLogo
        src={require('../../assets/Mamoori_logo.png')}
        alt="Mamoori_logo"
        onClick={goHome}
      />
      <S.Menu>
        {NAVBAR_MENU.map(({ name, link }) => (
          <MenuItem name={name} link={link} />
        ))}
        {isLoggedIn ? (
          <UserProfile size="small" onClick={goMy} />
        ) : (
          <Button text="LOGIN" size="small" />
        )}
      </S.Menu>
    </S.NavBar>
  );
};
