import { withTheme } from 'emotion-theming';
import { Global } from '@emotion/core';
import { globalCss } from './styles';
import React from 'react';

export const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={globalCss(theme)} />
));
