import PretendardBold from '@public/fonts/Pretendard-Bold.woff2';
import PretendardRegular from '@public/fonts/Pretendard-Regular.woff2';
import { createGlobalStyle, DefaultTheme } from 'styled-components';

import Normalize from '@/styles/Normalize';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${Normalize}

  * {
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Pretendard';	
    src: local('PretendardRegular'),
    url(${PretendardRegular}) format('woff2');
    font-weight: 400; 		
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';	
    src: local('PretendardBold'),
    url(${PretendardBold}) format('woff2');
    font-weight: 700; 		
    font-style: normal;
    font-display: swap;
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
