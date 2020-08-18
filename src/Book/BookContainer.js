import React, { useState } from 'react';
import _ from 'lodash';

import Book from './Book';
import useBooks from '../hooks/useBooks';

function _mapFromAirtable(records) {
  if (!records) return null;
  const record = records[0].data;
  const authors = _.zip(
    record.fields.Authors,
    record.fields["Name (from Authors)"],
    record.fields["Info (from Authors)"],
    record.fields["AvatarUrl (from Authors)"],
    record.fields["Email (from Authors)"]
  ).map(record => _.zipObject(
    ['Id', 'Name', 'Info', 'AvatarUrl', 'Email'],
    record
  ))
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
  })
}

const BookContainer = ({ bookIds }) => {
  const bookRecord = useBooks(bookIds);
  const book = _mapFromAirtable(bookRecord);

  return (
    <Book isLoading={!book} book={book} />
  )
}

export default BookContainer;
