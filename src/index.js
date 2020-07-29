import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import UserContext from './UserContext';

import { book, user } from './data';

ReactDOM.render(
  <UserContext.Provider value={user}>
    <App book={book} />
  </UserContext.Provider>,
  document.getElementById('root')
);
