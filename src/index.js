import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import UserContext from './User/UserContext';

import { book, user } from './common/data';

ReactDOM.render(
  <UserContext.Provider value={user}>
    <App/>
  </UserContext.Provider>,
  document.getElementById('root')
);
