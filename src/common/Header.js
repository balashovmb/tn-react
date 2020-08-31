import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import UserInfo from '../User/UserInfo';

import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <header className="h-20 border-b bg-primary">
      <span className="flex items-center justify-center text-xl font-bold text-main-text">
        Bookstarter
      </span>
      <div>
        <div className="float-left ml-2">
          <input type="checkbox" checked={theme === 'dark'} onChange={handleThemeToggle} />
          <label htmlFor="theme-toggle" className="ml-2">
            Темная тема
          </label>
        </div>
        <UserInfo />
      </div>

    </header>

  );
};
export default Header;
