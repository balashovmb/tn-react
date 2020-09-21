import React from 'react';
import classnames from 'classnames';

const Button = ({ disabled, children, className, gray, onClick }) => (
  <button disabled={disabled} className={classnames('standard-btn', { 'bg-gray-200': gray }, className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;
