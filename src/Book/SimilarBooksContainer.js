import React from 'react';

import SimilarBooks from './SimilarBooks';
import withBooks from '../HOC/withBooks';

class SimilarBooksContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hiddenBookIds: []
    };
    this.removeFromSimilarBook = this.removeFromSimilarBook.bind(this);
  }

  _bookRecordsToShow(bookRecords) {
    if (!bookRecords) return [];
    console.info(bookRecords)
    return bookRecords.filter(br => !this.state.hiddenBookIds.includes(br.data.id)).slice(0, 3);
  }

  _mapFromAirtable(records) {
    if (!records) return [];
    return (records.map(record => {
      const authors = record.data.fields['Name (from Authors)'].join(', ');

      return ({
        Title: record.data.fields.Title,
        Cover: record.data.fields.Cover,
        Authors: authors,
        Id: record.data.id
      });
    }));
  }

  removeFromSimilarBook(currentBookId) {
    this.setState((state) => ({
      hiddenBookIds: [state.hiddenBookIds, currentBookId]
    }));
  }

  render() {
    const { bookRecords } = this.props;
    const bookRecordsToShow = this._bookRecordsToShow(bookRecords);
    const booksToShow = this._mapFromAirtable(bookRecordsToShow);
    return (
      <SimilarBooks
        booksToShow={booksToShow}
        removeFromSimilarBook={this.removeFromSimilarBook}
        isLoading={booksToShow.length === 0}
      />
    );
  }
}

export default withBooks(SimilarBooksContainer);
