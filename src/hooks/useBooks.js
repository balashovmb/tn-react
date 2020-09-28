import React, { useState, useEffect } from 'react';
import httpClient from '../common/httpClient';
import mapRecordFromAirtable from '../common/mapRecordFromAirtable';

function _fetchData(bookIds) {
  return (
    Promise.all(bookIds.map(bookId => httpClient.get(`/Books/${bookId}`)))
      .then(records => _mapFromAirtable(records)));
}
const _mapFromAirtable = (records) => {
  if (!records) return null;

  return mapRecordFromAirtable(records[0].data);
};

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
