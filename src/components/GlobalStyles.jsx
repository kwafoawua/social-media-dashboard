import { withTheme, Global } from '@emotion/react';
import { globalCss } from './styles';

export const GlobalStyles = withTheme(({ theme }) => <Global styles={globalCss(theme)} />);
