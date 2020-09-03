import React from 'react';

import Book from './Book';
import useBooks from '../hooks/useBooks';

import mapRecordFromAirtable from '../common/mapRecordFromAirtable';

const BookContainer = ({ match: { params } }) => {
  const _mapFromAirtable = (records) => {
    if (!records) return null;

    return mapRecordFromAirtable(records[0].data);
  };

  const bookRecords = useBooks([params.id]);

  const book = _mapFromAirtable(bookRecords);
  return (
    <Book isLoading={!book} book={book} />
  );
};

export default BookContainer;
