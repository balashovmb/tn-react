import axios from 'axios';

import { API_TOKEN } from './data';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appDH1YfToGXZokH7',
  timeout: 8000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

export default httpClient;
