import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import SimilarBooks from './SimilarBooks';
import useBooks from '../hooks/useBooks';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 2000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

const _mapFromAirtable = (records) => {
  if (!records) return null;
  return (records.map(record => {
    const authors = record.data.fields['Name (from Authors)'].join(', ');

    return ({
      Title: record.data.fields.Title,
      Cover: record.data.fields.Cover,
      Authors: authors,
      Id: record.data.id
    })
  }))
}

const SimilarBooksContainer = (props) => {
  const [booksToShow, setBooksToShow] = useState([]);
  const [hiddenBookIds, sethiddenBookIds] = useState([]);


  // componentDidMount() {
  //   this._fetchData();
  // }

  // componentDidUpdate() {
  //   if (this.state.booksToShow.length < 3
  //     && this.props.bookIds.length >= this.state.hiddenBookIds.length + 3) {
  //     this._fetchData();
  //   }
  // }

  const _bookIdsToShow = () => {
    const numberOfBooks = 3 - booksToShow.length;
    const existedBookIds = booksToShow.map(book => book.Id);
    const bookIdsToExclude = [...existedBookIds, ...hiddenBookIds];

    return props.bookIds.filter(bookId => !(bookIdsToExclude.includes(bookId))).slice(0, numberOfBooks);
  }

  // useEffect(() => {
    if (booksToShow.length < 3
      && props.bookIds.length >= hiddenBookIds.length + 3) {
      const bookRecords = useBooks(_bookIdsToShow());
      setBooksToShow(bookRecords);
    }
  // })


  const removeFromSimilarBook = (currentBookId) => {
    this.setState((state) => ({
      booksToShow: this.state.booksToShow.filter(book => book.Id != currentBookId),
      hiddenBookIds: [...this.state.hiddenBookIds, currentBookId]
    }))
  }
  // const bookRecords = useBooks(_bookIdsToShow());
  // if(bookRecords){ setBooksToShow(bookRecords)};
  return (
    <SimilarBooks booksToShow={booksToShow} removeFromSimilarBook={removeFromSimilarBook} isLoading={booksToShow.length === 0} />
  )
}

export default SimilarBooksContainer;
