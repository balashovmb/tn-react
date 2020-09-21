import axios from 'axios';

import { FILESTACK_APIKEY } from './data';

const httpClient = axios.create({
  baseURL: 'https://www.filestackapi.com/api',
  timeout: 10000
});

export const uploadFile = (file) => (
  httpClient.post('/store/S3', file, {
    params: {
      key: FILESTACK_APIKEY
    }
  }).then(res => { console.log(res); return res.data; })
);
