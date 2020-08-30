import React from 'react';

const ButtonGray = ({ children, className }) => {
  const classNames = `standard-btn-gray ${className}`;
  return (
    <button className={classNames}>{children}</button>
  );
};

export default ButtonGray;
