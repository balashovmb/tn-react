import React from 'react';
import axios from 'axios';

import Book from './Book';

const API_TOKEN = 'keyYoatUKcvLsVwMT';

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
    console.log('mount')
    this._fetchData();

  }

  render() {
    const { record } = this.state;
    return (
      record ?
        <Book book={record} />
        : <div>Идет загрузка...</div>

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
    let authors = [];
    for (let i = 0; i < record.fields.Authors.length; i++) {
      authors.push(
        {
          Id: record.fields.Authors[i],
          Name: record.fields['Name (from Authors)'][i],
          Info: record.fields['Info (from Authors)'][i],
          Email: record.fields['Email (from Authors)'][i],
          AvatarUrl: record.fields['AvatarUrl (from Authors)'][i]
        }   
      )
    }
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
      Authors: authors
    }
    )
  }
}

export default BookContainer;
