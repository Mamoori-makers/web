import { createGlobalStyle, DefaultTheme } from 'styled-components';

import Normalize from '@/styles/Normalize';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${Normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
  
  ul,
  li {
    padding: 0;
    list-style: none;
  }
`;
