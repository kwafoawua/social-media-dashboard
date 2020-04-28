import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Header from './Header/Header';
import { GlobalStyles } from './GlobalStyles';
import { globalCss } from './styles';
import {darkTheme, lightTheme} from './themes';
import CardsContainer from './CardsContainer/CardsContainer';
import {data} from '../data';
import Footer from './Footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const changeTheme = e => e.target.checked ? setTheme(lightTheme) : setTheme(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalCss}/>
      <Header onChange={changeTheme}/>
      <CardsContainer topContent={data.topContent} overViewContent={data.overviewContent}/>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
