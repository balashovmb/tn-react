import React from 'react';
import classnames from 'classnames';

const Button = ({ children, className, gray, onClick }) => (
  <button className={classnames('standard-btn', { 'bg-gray-200': gray }, className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;
