import React, { useContext } from 'react';

import Header from './Header';
import Footer from './Footer';
import ToTheTopButton from './ToTheTopButton';

import { ThemeContext } from './ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} bg-primary text-main-text  transition-all duration-300 m-0 px-0 min-h-screen`}
    >
      <Header />
      {children}
      <Footer />
      <ToTheTopButton />
    </div>
  );
};

export default Layout;
