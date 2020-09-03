import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import List from './Book/List';
import BookContainer from './Book/BookContainer';
import NotFound from './Pages/NotFound';
import { bookPath } from './helpers/routes';

const App = () => (
  <ThemeContextProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={List} path="/" exact />
          <Route component={BookContainer} path={bookPath()} strict exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeContextProvider>
);

export default App;
