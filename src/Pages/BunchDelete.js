import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import useBooks from '../hooks/useBooks';
import SmallListItem from '../Book/SmallListItem';
import { deleteBooks } from '../common/httpClient';
import Button from '../common/Button';
import TextHeader from '../common/TextHeader';

const BunchDelete = () => {
  const [downloadCounter, setDownloadCounter] = useState(1);

  const [booksToDelete, setBooksToDelete] = useState([]);

  const books = useBooks('', downloadCounter);

  const toggleBookToDelete = (bookId) => {
    const newBooksToDelete = booksToDelete.includes(bookId)
      ? booksToDelete.filter(item => item !== bookId)
      : [...booksToDelete, bookId];
    setBooksToDelete(() => newBooksToDelete);
  };

  const runDeleteBooks = async () => {
    await deleteBooks(booksToDelete);
    setDownloadCounter(() => downloadCounter + 1);
  };

  return (
    <>
      <TextHeader>Выберите книги для удаления</TextHeader>

      <div className="border-b-2 pb-1">
        {
          books
            ? books.map(book => {
              const currentBook = book;
              currentBook.Authors = book.AuthorsString;
              return (
                <SmallListItem book={currentBook} key={currentBook.Id}>

                  <Button type="button" className="m-1 text-sm" onClick={() => toggleBookToDelete(book.Id)}>
                    {booksToDelete.includes(book.Id) ? 'Не удалять' : 'Выбрать'}
                  </Button>

                </SmallListItem>
              );
            })
            : <div> Идет загрузка</div>
        }
      </div>
      <Button type="button" className="m-1 text-sm" onClick={runDeleteBooks}>Удалить выбранные</Button>
    </>

  );
};
export default BunchDelete;
