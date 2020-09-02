import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import List from './Book/List';
// import { Router } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => (
  <ThemeContextProvider>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route component={List} path="/" exact />
          <Route render={() => <div>Book</div>} path="/book/:id" strict exact />
          <Route render={() => <div>Not found</div>} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </ThemeContextProvider>
);

export default App;
