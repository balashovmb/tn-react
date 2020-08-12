import React from 'react';

import SimilarBook from './SimilarBook';

import withLoader from '../HOC/withLoader';

const SimilarBooks = ({booksToShow, removeFromSimilarBook}) => {
  return (
    <div>
      <div>Похожие книги:</div>
      {
        booksToShow.map(book => (
          <SimilarBook book={book} key={book.Id} removeFromSimilarBook={removeFromSimilarBook} />
        ))
      }
    </div>
  )
}

export default withLoader(SimilarBooks);
