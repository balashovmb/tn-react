import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_TOKEN } from '../common/data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 8000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

function _fetchData(bookIds) {
  return (
    Promise.all(bookIds.map(bookId => httpClient.get(`/Books/${bookId}`)))
  );
}

const useBooks = (bookIds) => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    _fetchData(bookIds).then(records => {
      setRecords(records);
    });
  }, [bookIds]);
  return records;
};

export default useBooks;
