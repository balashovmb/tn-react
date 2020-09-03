import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import List from './Book/List';
import BookContainer from './Book/BookContainer';

const App = () => (
  <ThemeContextProvider>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route component={List} path="/" exact />
          <Route component={BookContainer} path="/book/:id" strict exact />
          <Route render={() => <div>Not found</div>} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </ThemeContextProvider>
);

export default App;
