import React from 'react';
import UserInfo from '../User/UserInfo';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="h-20 border bg-primary">
    <span className="flex items-center justify-center text-xl font-bold text-main-text">
      Bookstarter
    </span>
    <div>
      <div className="float-left ml-2">
        <ThemeToggle />
      </div>
      <UserInfo />
    </div>

  </header>

);
export default Header;
