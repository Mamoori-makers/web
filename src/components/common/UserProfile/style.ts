import styled from 'styled-components';

const ProfileSize = (size: string) => {
  switch (size) {
    case 'large':
      return `
        width: 100px;
        height: 100px;`;
    case 'small':
      return `
          width: 44px;
          height: 44px;`;
    default:
      return null;
  }
};

const UserProfile = styled.img<{ size: 'large' | 'small' }>`
  ${({ size }) => ProfileSize(size)};
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgb(72 72 72 / 50%);
`;
export { UserProfile };
