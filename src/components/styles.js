import { css } from '@emotion/core';

export const globalCss = theme => css`
  html {
    font-size: 10px;
  }
  
  body {
    background-color: ${theme.bg.primary};
    color: ${theme.text.primary};
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    margin: auto;
  }
`;


