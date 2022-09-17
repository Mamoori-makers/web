import styled, { css } from 'styled-components';

import { flexBox } from '@/styles/flexBox';

// Button Sizes
const large = css`
  width: 340px;
  height: 64px;
  border-radius: 64px;
  font: ${({ theme: { font } }) => font.bold_large};
`;

const medium = css`
  width: 240px;
  height: 56px;
  border-radius: 64px;
`;

const small = css`
  width: 100px;
  height: 35px;
  border-radius: 64px;
  font: ${({ theme: { font } }) => font.bold_small};
`;

const sizeObj = {
  large,
  medium,
  small,
};

// Button Colors
const yellow = css`
  color: ${({ theme: { color } }) => color.brown[300]};
  background: linear-gradient(to left, #c5a552, #dfc582);

  :disabled {
    background-color: ${({ theme: { color } }) => color.yellow[100]};
    opacity: 0.7;
    cursor: default;
  }

  :not(:disabled):hover {
    border: 3px solid ${({ theme: { color } }) => color.yellow[100]};
  }

  :focus {
    border: 3px solid ${({ theme: { color } }) => color.yellow[100]};
  }
`;

const brown = css`
  color: ${({ theme: { color } }) => color.white};
  background: linear-gradient(to left, #413c3a, #67615e);

  :disabled {
    background-color: ${({ theme: { color } }) => color.brown[100]};
    opacity: 0.7;
    cursor: default;
  }

  :not(:disabled):hover {
    border: 3px solid ${({ theme: { color } }) => color.brown[100]};
  }

  :focus {
    border: 3px solid ${({ theme: { color } }) => color.brown[100]};
  }
`;

const colorObj = {
  yellow,
  brown,
};

// Button Component
const Button = styled.button<{
  size: 'large' | 'medium' | 'small';
  background: 'yellow' | 'brown';
}>`
  ${flexBox({})}
  ${({ size }) => size && sizeObj[size]};
  ${({ background }) => background && colorObj[background]};
  transition: 200ms ease;

  letter-spacing: 2.5px;
`;

export { Button };
