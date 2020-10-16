import React from 'react';
import cx from 'classnames';

const BookCover = ({ cover, title, ...props }) => (
  <div className={cx("w-full flex justify-center md:flex-none md:flex-col md:w-1/6 bg-primary", props.className)}>
    <img src={cover} alt={title} className="w-1/3 md:w-full border" />
  </div>
);

export default BookCover;
