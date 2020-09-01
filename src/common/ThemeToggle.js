import React, { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <input type="checkbox" checked={theme === 'dark'} onChange={handleThemeToggle} />
      <label htmlFor="theme-toggle" className="ml-1">
        Темная тема
      </label>
    </>
  );
};

export default ThemeToggle;
