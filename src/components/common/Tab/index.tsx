import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const TabLink = styled(NavLink)`
  color: ${({ theme: { color } }) => color.brown[200]};
  cursor: pointer;
  font: ${({ theme: { font } }) => font.bold_medium};
  padding: 10px;
  border-radius: 20px;

  :not(:last-child) {
    margin-right: 20px;
  }

  :hover:not(:active) {
    color: ${({ theme: { color } }) => color.yellow[300]};
  }

  &.active {
    border: 2px solid ${({ theme: { color } }) => color.yellow[300]};
    color: ${({ theme: { color } }) => color.yellow[300]};
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TabBox = styled.div`
  ${flexBox({})};
  padding: 20px;
  margin-bottom: 30px;
`;

export const Tab = ({ text, link }) => {
  return <TabLink to={link}>{text}</TabLink>;
};

export const Tabs = ({ data }) => {
  return (
    <TabBox>
      {data.map(({ name, link }) => (
        <Tab text={name} link={link} />
      ))}
    </TabBox>
  );
};
