import * as S from './style';

import { USER_DEFAULT_IMG } from '@/constants/constants';

type UserProfile = {
  imgUrl?: string;
  userId?: string;
  size: 'large' | 'small';
  onClick?: () => void;
};

const UserProfile = ({ imgUrl, userId, size, onClick }: UserProfile) => {
  return (
    <S.UserProfile src={imgUrl || USER_DEFAULT_IMG} alt={userId} size={size} onClick={onClick} />
  );
};

export default UserProfile;
