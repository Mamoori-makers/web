import styled from 'styled-components';

import { flexBox } from '@/styles/flexBox';

const RoadMapBox = styled.div`
  ${flexBox({})}
  margin-top: 70px;
`;

const StepBox = styled.div`
  ${flexBox({ direction: 'column' })}
  width: 310px;
  border-radius: 10px;
  border: 1px solid ${({ theme: { color } }) => color.grey[200]};
  padding: 20px 10px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  }

  :hover > :first-child {
    color: ${({ theme: { color } }) => color.yellow[300]};
  }

  :not(:last-child) {
    margin-right: 30px;
  }
`;

const StepLine = styled.div`
  ${flexBox({ direction: 'column' })}
  font: ${({ theme: { font } }) => font.bold_extra_large};
  color: ${({ theme: { color } }) => color.brown[300]};
  margin-bottom: 20px;
`;

const Card = styled.div`
  font: ${({ theme: { font } }) => font.regular_medium};
  color: ${({ theme: { color } }) => color.brown[300]};
`;

export { RoadMapBox, StepBox, Card, StepLine };
