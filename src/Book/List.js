import React from 'react';
import { Helmet } from 'react-helmet';

import withBooks from '../HOC/withBooks';
import withLoader from '../HOC/withLoader';
import mapRecordFromAirtable from '../common/mapRecordFromAirtable';
import ListItem from './ListItem';

const List = ({ bookRecords }) => {
  const books = bookRecords.data.records.map(record => mapRecordFromAirtable(record));
  return (
    <>
      <Helmet>
        <title>Все книги</title>
      </Helmet>
      {books.map(book => (
        <div key={book.Id}>
          <ListItem book={book} isLoading={!books} />
        </div>
      ))}
    </>
  );
};

export default withBooks(withLoader(List));
