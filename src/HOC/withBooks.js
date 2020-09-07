import React from 'react';
import axios from 'axios';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 8000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

const withBooks = EnhancedComponent => class WithBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    if (this.props.bookIds) {
      Promise.all(this.props.bookIds.map(bookId => httpClient.get(`/Books/${bookId}`)))
        .then(result => this.setState(() => ({ result })));
    } else {
      httpClient.get('/Books?maxRecords=5&view=Grid%20view').then(result => this.setState(() => ({ result })));
    }
  }

  render() {
    const { result } = this.state;
    return (
      <EnhancedComponent {...this.props} isLoading={!result} bookRecords={result} />
    );
  }
};

export default withBooks;
