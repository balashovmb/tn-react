import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import { book } from './data';

ReactDOM.render(
  <App book={book} />,
  document.getElementById('root')
);
