import React, { useState, useEffect } from 'react';
import httpClient from '../common/httpClient';

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
  }, bookIds);
  return records;
};

export default useBooks;
