import React, { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'} bg-primary text-main-text  transition-all duration-300 m-0 px-0 min-h-screen`}>
      {children}
    </div>
  );
};

export default Layout;
