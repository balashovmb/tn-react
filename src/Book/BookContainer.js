import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import Book from './Book';

import {API_TOKEN} from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 2000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: null
    }
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { record } = this.state;
    return (
      <Book isLoading={!record} book={record} />
    );
  }
  _fetchData() {
    httpClient.get('/Books', {
      params: {
        maxRecords: 1,
        view: 'Grid view'
      }
    })
      .then(result => result.data.records[0])
      .then(this._mapFromAirtable)
      .then(record => this.setState({ record }));
  }
  _mapFromAirtable(record) {
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
}

export default BookContainer;
