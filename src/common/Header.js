import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../User/UserInfo';
import ThemeToggle from './ThemeToggle';
import { newBookPath, wishlistPath } from '../helpers/routes';

const Header = () => (
  <header className="h-20 border bg-primary">
    <span className="flex items-center justify-center text-xl font-bold text-main-text">
      <Link to="/">Bookstarter</Link>
    </span>
    <div>
      <div className="float-left ml-4">
        <ThemeToggle />
      </div>
      <UserInfo />
    </div>
    <div className="float-right">
      <Link to={wishlistPath()}>Список желаемого</Link>
    </div>
    <div className="float-right mr-2">
      <Link to={newBookPath()}>Добавить книгу</Link>
    </div>

  </header>

);
export default Header;
