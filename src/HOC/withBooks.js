import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 2000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

const withBooks = EnhancedComponent => class WithBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    }
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    Promise.all(this.props.bookIds.map(bookId =>
      httpClient.get(`/Books/${bookId}`)))
      .then(result => this.setState((state) => ({ result: result })))
  }

  render() {
    const { result } = this.state;
    return (
      <EnhancedComponent {...this.props} isLoading={!result} bookRecords={result} />
    );
  }
}

export default withBooks;
