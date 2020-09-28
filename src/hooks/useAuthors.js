import React, { useState, useEffect } from 'react';

import httpClient from '../common/httpClient';

const mapAuthors = (records) => (
  records.map((record) => ({
    Id: record.id,
    Name: record.fields.Name
  }))
);

function _fetchData() {
  return (
    httpClient.get('/Authors')
      .then(result => (mapAuthors(result.data.records)))
  );
}

const useAuthors = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    _fetchData().then(records => {
      setAuthors(records);
    });
  }, []);
  return authors;
};

export default useAuthors;
