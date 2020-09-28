import axios from 'axios';

import { API_TOKEN } from './data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

export default httpClient;

export function createBook(fields) {
  return (
    httpClient.post('/Books', {
      records: [
        { fields }
      ]
    })
      .then(result => result.data)
  );
}

export function updateBook(fields, id) {
  return (
    httpClient.patch('/Books', {
      records: [{
        id,
        fields
      }]
    })
      .then(result => result.data)
  );
}
