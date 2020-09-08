import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import List from './Book/List';
import BookContainer from './Book/BookContainer';
import NotFound from './Pages/NotFound';
import { bookPath } from './helpers/routes';

const history = createBrowserHistory();

history.listen((update) => {
  console.log(update);
  return update;
});

const App = () => (
  <ThemeContextProvider>
    <Router history={history}>
      <Layout>
        <Switch>
          <Route component={List} path="/" exact />
          <Route component={BookContainer} path={bookPath()} strict exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </ThemeContextProvider>
);

export default App;
