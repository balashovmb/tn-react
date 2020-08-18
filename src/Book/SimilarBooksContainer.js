import React from 'react';
import axios from 'axios';

import SimilarBooks from './SimilarBooks';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 2000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

class SimilarBooksContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      booksToShow: [],
      hiddenBookIds: []
    };
    this.removeFromSimilarBook = this.removeFromSimilarBook.bind(this);
  }

  componentDidMount() {
    this._fetchData();
  }

  componentDidUpdate() {
    if (this.state.booksToShow.length < 3
      && this.props.bookIds.length >= this.state.hiddenBookIds.length + 3) {
      this._fetchData();
    }
  }

  _bookIdsToShow() {
    const numberOfBooks = 3 - this.state.booksToShow.length;
    const existedBookIds = this.state.booksToShow.map(book => book.Id);
    const bookIdsToExclude = [...existedBookIds, ...this.state.hiddenBookIds];

    return this.props.bookIds.filter(bookId => !(bookIdsToExclude.includes(bookId))).slice(0, numberOfBooks);
  }

  _fetchData() {
    Promise.all(this._bookIdsToShow().map(bookId =>
      httpClient.get(`/Books/${bookId}`)))
      .then(this._mapFromAirtable)
      .then(records => this.setState({ booksToShow: [...this.state.booksToShow, ...records] }))
  }

  _mapFromAirtable(records) {
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

  removeFromSimilarBook(currentBookId) {
    this.setState((state) => ({
      booksToShow: this.state.booksToShow.filter(book => book.Id != currentBookId),
      hiddenBookIds: [...this.state.hiddenBookIds, currentBookId]
    }))
  }

  render() {
    const { booksToShow } = this.state;

    return (
      <SimilarBooks booksToShow={booksToShow} removeFromSimilarBook={this.removeFromSimilarBook} isLoading={booksToShow.length === 0} />
    )
  }
}

export default SimilarBooksContainer;
