import React from 'react';
import { Helmet } from 'react-helmet';

import useBooks from '../hooks/useBooks';
import mapRecordFromAirtable from '../common/mapRecordFromAirtable';
import ListItem from './ListItem';

const Wishlist = () => {
  const wishlist = localStorage.getItem('wishlist').split(',') || [];
  if (wishlist[0] === '' && wishlist.length === 1) {
    return <h3 className="ml-2"> Список желаемого пуст. </h3>;
  }

  const bookRecords = useBooks(wishlist);

  if (!bookRecords) {
    return <div> Идет загрузка... </div>;
  }

  const books = bookRecords.map(record => mapRecordFromAirtable(record.data));

  return (
    <>
      <Helmet>
        <title>Список желаемого</title>
      </Helmet>
      {books.map(book => (
        <div key={book.Id}>
          <ListItem book={book} isLoading={!books || !bookRecords} />
        </div>
      ))}
    </>
  );
};

export default Wishlist;
