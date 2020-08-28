import React from 'react';
import UserInfo from '../User/UserInfo';

const Header = () => (
  <header className="h-20 bg-gray-200 border-b">
    <span className="flex items-center justify-center text-xl font-bold">
      Bookstarter
    </span>
    <UserInfo />
  </header>
);

export default Header;
