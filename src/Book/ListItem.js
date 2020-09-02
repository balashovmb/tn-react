import React from 'react';

import BookCover from './BookCover';
import BookSpecs from './BookSpecs';

const ListItem = ({ book }) => (
  <div className="flex flex-col md:flex-row ml-4 mt-4 border-t pt-4">
    <BookCover cover={book.Cover} title={book.Title} />
    <BookSpecs book={book} className="ml-4" />
  </div>
);

export default ListItem;
