import React from 'react';
import _ from 'lodash';
import { render } from '@testing-library/react';

import Book from './Book';
import withBooks from '../HOC/withBooks';
import withLoader from '../HOC/withLoader';

class BookContainer extends React.PureComponent {
  _mapFromAirtable(records) {
    if (!records) return null;
    const record = records[0].data;
    const authors = _.zip(
      record.fields.Authors,
      record.fields['Name (from Authors)'],
      record.fields['Info (from Authors)'],
      record.fields['AvatarUrl (from Authors)'],
      record.fields['Email (from Authors)']
    ).map(record => _.zipObject(
      ['Id', 'Name', 'Info', 'AvatarUrl', 'Email'],
      record
    ));
    return ({
      Title: record.fields.Title,
      Annotation: record.fields.Annotation,
      Pages: record.fields.Pages,
      Language: record.fields.Language,
      Progress: record.fields.Progress,
      Cover: record.fields.Cover,
      MinimalPrice: record.fields.MinimalPrice,
      ExpectedPrice: record.fields.ExpectedPrice,
      Amount: record.fields.Amount,
      ExpectedAmount: record.fields.ExpectedAmount,
      Subscribers: record.fields.Subscribers,
      Authors: authors,
      SimilarBooksIds: record.fields.SimilarBooks
    });
  }

  render() {
    const book = this._mapFromAirtable(this.props.bookRecords);
    return (
      <Book isLoading={!book} book={book} />
    );
  }
}

export default withBooks(withLoader(BookContainer));
