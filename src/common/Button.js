import React from 'react';
import classnames from 'classnames';

const Button = ({ children, className, gray }) => (
  <button className={classnames({ 'standard-btn-gray': gray }, className)}>
    {children}
  </button>
);

export default Button;
