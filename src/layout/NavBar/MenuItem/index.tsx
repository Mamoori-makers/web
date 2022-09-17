import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import useMovePage from '@/hooks/useMovePage';

const Item = styled.button<{ active: boolean }>`
  position: relative;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: -3px;
    content: '';
    display: block;
    height: 2px;
    left: ${({ active }) => (active ? '0' : '50px')};
    position: absolute;
    background: ${({ theme: { color } }) => color.yellow[200]};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: ${({ active }) => (active ? '100%' : '0')};
  }

  :hover:after {
    width: 100%;
    left: 0;
  }
`;

export const MenuItem = ({ name, link }) => {
  const [goPage] = useMovePage(link);
  const { pathname } = useLocation();

  const checkActive = () => {
    return pathname.includes(link);
  };

  return (
    <Item type="button" onClick={goPage} active={checkActive()}>
      {name}
    </Item>
  );
};
