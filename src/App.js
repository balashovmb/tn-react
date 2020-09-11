import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import AppRoutes from './common/AppRoutes';

const history = createBrowserHistory();

const App = () => (
  <ThemeContextProvider>
    <Router history={history}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  </ThemeContextProvider>
);

export default App;
