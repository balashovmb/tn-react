import React from 'react';
import httpClient from '../common/httpClient';

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
    if (this.props.location && this.props.location.pathname === '/') {
      httpClient.get('/Books?maxRecords=6&view=Grid%20view').then(result => this.setState(() => ({ result })));
    } else if (this.props.bookIds) {
      Promise.all(this.props.bookIds.map(bookId => httpClient.get(`/Books/${bookId}`)))
        .then(result => this.setState(() => ({ result })));
    } else {
      this.setState(() => ({ result: [] }));
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
