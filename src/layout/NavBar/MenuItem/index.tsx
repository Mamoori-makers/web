import styled from 'styled-components';

import useMovePage from '@/hooks/useMovePage';

const Item = styled.button`
  position: relative;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: -3px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme: { color } }) => color.yellow[200]};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  :hover:after {
    width: 100%;
    left: 0;
  }
`;

export const MenuItem = ({ name, link }) => {
  const [goPage] = useMovePage(link);

  return (
    <Item type="button" onClick={goPage}>
      {name}
    </Item>
  );
};
