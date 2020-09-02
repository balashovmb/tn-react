import React from 'react';

import Book from './Book';
import withBooks from '../HOC/withBooks';
import withLoader from '../HOC/withLoader';
import mapRecordFromAirtable from '../common/mapRecordFromAirtable';

class BookContainer extends React.PureComponent {
  _mapFromAirtable(records) {
    if (!records) return null;

    return mapRecordFromAirtable(records[0].data);
  }

  render() {
    const book = this._mapFromAirtable(this.props.bookRecords);
    return (
      <Book isLoading={!book} book={book} />
    );
  }
}

export default withBooks(withLoader(BookContainer));
