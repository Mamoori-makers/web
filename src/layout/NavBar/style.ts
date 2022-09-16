import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const NavBar = styled.div<{ active: boolean }>`
  ${flexBox({ justifyContent: 'space-between' })}
  background: ${({ active }) =>
    active ? `linear-gradient(to right, #413C3A, #67615E)` : `transparent`};
  height: 75px;
  color: #fff;
  padding: 0 150px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const MamooriLogo = styled.img`
  height: 60px;
  cursor: pointer;
`;

const Menu = styled.div`
  ${flexBox({ justifyContent: 'space-between' })}

  & > * {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export { NavBar, MamooriLogo, Menu };
