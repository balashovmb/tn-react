import React from 'react';
import axios from 'axios';

import SimilarBook from './SimilarBook';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

class SimilarBooks extends React.PureComponent {
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
    setTimeout(() => {
      if (this.state.booksToShow.length < 3
        && this.props.bookIds.length >= this.state.hiddenBookIds.length + 3) {
        this._fetchData();
      }
    }, 1000);
  }

  _bookIdsToShow() {
    const numberOfBooks = 3 - this.state.booksToShow.length;
    const existedBookIds = this.state.booksToShow.map(book => book.Id);
    const bookIdsToExclude = [...existedBookIds, ...this.state.hiddenBookIds];

    return this.props.bookIds.filter(bookId => !(bookIdsToExclude.includes(bookId))).slice(0, numberOfBooks);
  }

  _fetchData() {
    this._bookIdsToShow().forEach(bookId =>
      httpClient.get(`/Books/${bookId}`)
        .then(result => result.data)
        .then(this._mapFromAirtable)
        .then(record => this.setState({ booksToShow: [...this.state.booksToShow, record] }))
    )
  }

  _mapFromAirtable(record) {
    const authors = record.fields['Name (from Authors)'].join(', ');

    return ({
      Title: record.fields.Title,
      Cover: record.fields.Cover,
      Authors: authors,
      Id: record.id
    })
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
      <div>
        <div>Похожие книги:</div>
        {booksToShow.length > 0 ?
          this.state.booksToShow.map(book => (
            <SimilarBook book={book} key={book.Id} removeFromSimilarBook={this.removeFromSimilarBook} />
          ))
          : <div>Идет загрузка...</div>
        }
      </div>
    )
  }
}

export default SimilarBooks;
