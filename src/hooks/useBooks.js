import React, { useState, useEffect } from 'react';
import httpClient from '../common/httpClient';
import mapRecordFromAirtable from '../common/mapRecordFromAirtable';

function _fetchData(bookIds) {
  let result;
  if (bookIds) {
    result = Promise.all(bookIds.map(bookId => httpClient.get(`/Books/${bookId}`)))
      .then(records => _mapFromAirtable(records, bookIds));
  } else {
    result = httpClient.get('/Books?maxRecords=10&view=Grid%20view')
      .then(records => _mapFromAirtable(records, bookIds));
  }
  return result;
}
const _mapFromAirtable = (records, bookIds) => {
  if (!records) return null;

  if (bookIds) return mapRecordFromAirtable(records[0].data);
  return records.data.records.map(record => mapRecordFromAirtable(record));
};

const useBooks = (bookIds, downloadCounter) => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    _fetchData(bookIds).then(records => {
      setRecords(records);
    });
  }, [downloadCounter]);
  console.log(records)
  return records;
};

export default useBooks;
