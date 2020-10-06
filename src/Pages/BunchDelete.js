import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import useBooks from '../hooks/useBooks';
import SmallListItem from '../Book/SmallListItem';
import { deleteBooks } from '../common/httpClient';
import Button from '../common/Button';
import TextHeader from '../common/TextHeader';

const BunchDelete = () => {
  const {
    register, handleSubmit, formState: { isSubmitting }
  } = useForm();

  const [downloadCounter, setDownloadCounter] = useState(1);

  const books = useBooks('', downloadCounter);
  const onSubmit = async (books) => {
    const bookIds = Object.entries(books).filter(([key, value]) => value).map(el => el[0]);
    await deleteBooks(bookIds);
    setDownloadCounter(() => downloadCounter + 1);
  };
  return (
    <>
      <TextHeader>Выберите книги для удаления</TextHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="border-b-2 pb-1">
          {
            books
              ? books.map(book => {
                const currentBook = book;
                currentBook.Authors = book.AuthorsString;
                return (
                  <SmallListItem book={currentBook} key={currentBook.Id}>
                    <label htmlFor={`scheckbox${currentBook.Id}`}>Удалить</label>
                    <input className="ml-1" type="checkbox" id={`checkbox${currentBook.Id}`} name={`${currentBook.Id}`} ref={register} />
                  </SmallListItem>
                );
              })
              : <div> Идет загрузка</div>
          }
        </div>
        <Button className="mt-4" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Удаление...' : 'Удалить выбранные'}</Button>
      </form>
    </>

  );
};
export default BunchDelete;
