import React from 'react';

import SmallListItem from './SmallListItem';
import Button from '../common/Button';

import withLoader from '../HOC/withLoader';

const SimilarBooks = ({ booksToShow, removeFromSimilarBook }) => (
  <div className="border-t-2 mt-2">
    <div className="font-bold text-lg mt-2">Похожие книги:</div>
    {
      booksToShow.map(book => (
        <SmallListItem book={book} key={book.Id} removeFromSimilarBook={removeFromSimilarBook} >
          <Button type="button" className="m-1 text-sm" onClick={() => removeFromSimilarBook(book.Id)}>Убрать</Button>
        </SmallListItem>
      ))
    }
  </div>
);

export default withLoader(SimilarBooks);
