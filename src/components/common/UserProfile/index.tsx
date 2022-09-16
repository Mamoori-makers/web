import * as S from './style';

type UserProfile = {
  imgUrl?: string;
  userId?: string;
  size: 'large' | 'small';
  onClick?: () => void;
};

const UserProfile = ({ imgUrl, userId, size, onClick }: UserProfile) => {
  return (
    <S.UserProfile
      // eslint-disable-next-line import/no-dynamic-require, global-require
      src={imgUrl || require('../../../assets/Mamoori_profile.png')}
      alt={userId}
      size={size}
      onClick={onClick}
    />
  );
};

export default UserProfile;
