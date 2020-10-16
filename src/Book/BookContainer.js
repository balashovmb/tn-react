import React from 'react';

import Book from './Book';
import useBooks from '../hooks/useBooks';

const BookContainer = ({ match: { params } }) => {
  const book = useBooks([params.id]);
  return (
    <Book isLoading={!book} book={book} />
  );
};

export default BookContainer;
