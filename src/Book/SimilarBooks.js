import React from 'react';

import SimilarBook from './SimilarBook';

import withLoader from '../HOC/withLoader';

const SimilarBooks = ({ booksToShow, removeFromSimilarBook }) => (
  <div className="border-t-2 mt-2">
    <div className="font-bold text-lg mt-2">Похожие книги:</div>
    {
        booksToShow.map(book => (
          <SimilarBook book={book} key={book.Id} removeFromSimilarBook={removeFromSimilarBook} />
        ))
      }
  </div>
);

export default withLoader(SimilarBooks);
