import React from 'react';

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
        <button type="button" className="standard-btn-gray m-1 text-sm" onClick={() => removeFromSimilarBook(book.Id)}>Убрать</button>
      </div>
    </div>
  );
});

export default SimilarBook;
