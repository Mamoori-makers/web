import styled from 'styled-components';

const BadgeWrapper = styled.div`
  display: inline-block;
  border-radius: 20px;
  padding: 5px 10px;
  background: ${({ theme: { color } }) => color.brown[300]};
  color: ${({ theme: { color } }) => color.white};
  font: ${({ theme: { font } }) => font.regular_extra_small};
`;

export const Badge = ({ text }) => {
  return <BadgeWrapper>{text}</BadgeWrapper>;
};
