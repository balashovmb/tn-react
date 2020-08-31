import React from 'react';
import Button from '../common/Button';

const SimilarBook = React.memo(({ book, removeFromSimilarBook }) => {
  const {
    Cover,
    Title,
    Authors
  } = book;

  return (
    <div className="flex flex-row mt-2 border-t-2">
      <div className="w-16">
        <img className="mt-1" src={Cover} alt={Title} />
      </div>
      <div className="ml-2">
        <div className="font-bold">{Title}</div>
        <div>{Authors}</div>
        <Button gray type="button" className="m-1 text-sm" onClick={() => removeFromSimilarBook(book.Id)}>Убрать</Button>
      </div>
    </div>
  );
});

export default SimilarBook;
