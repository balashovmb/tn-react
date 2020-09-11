import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../Book/List';
import BookContainer from '../Book/BookContainer';
import NotFound from '../Pages/NotFound';
import { bookPath } from '../helpers/routes';

const AppRoutes = () => (
  <Switch>
    <Route component={List} path="/" exact />
    <Route component={BookContainer} path={bookPath()} strict exact />
    <Route component={NotFound} />
  </Switch>
);

export default AppRoutes;