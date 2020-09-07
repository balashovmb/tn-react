import React from 'react';

const BookCover = ({ cover, title }) => (
  <div className="w-full flex justify-center md:flex-none md:flex-col md:w-1/6 bg-primary">
    <img src={cover} alt={title} className="w-1/3 md:w-full border" />
  </div>
);

export default BookCover;
