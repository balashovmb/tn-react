import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import AppRoutes from './common/AppRoutes';
import WishlistProvider from './Book/WishlistProvider';

const browserHistory = createBrowserHistory();

const App = (props) => {
  const history = props.history || browserHistory;
  return (
    <ThemeContextProvider>
      <WishlistProvider>
        <Router history={history}>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </WishlistProvider>
    </ThemeContextProvider>
  );
};

export default App;
