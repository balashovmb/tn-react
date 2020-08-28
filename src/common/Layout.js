import React, { useContext } from 'react';
import Toggle from 'react-toggle';

import { ThemeContext } from './ThemeContext';

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (

    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
        } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 py-5 min-h-screen`}>
      <Toggle
        id="theme-toggle"
        checked={theme === 'light' ? true : false}
        onChange={handleThemeToggle} className="h-12"
      />
      <label htmlFor="theme-toggle" className="text-accent">
        Theme toggler
      </label>
      {children}
    </div>
  );
};

export default Layout;
