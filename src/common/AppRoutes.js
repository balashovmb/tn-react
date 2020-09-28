import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../Book/List';
import BookContainer from '../Book/BookContainer';
import NotFound from '../Pages/NotFound';
import { bookPath, newBookPath, wishlistPath, editBookPath } from '../helpers/routes';
import Wishlist from '../Book/Wishlist';
import NewBook from '../Pages/NewBook';
import EditBook from '../Pages/EditBook';

const AppRoutes = () => (
  <Switch>
    <Route component={List} path="/" exact />
    <Route component={NewBook} path={newBookPath()} strict exact />
    <Route component={BookContainer} path={bookPath()} strict exact />
    <Route component={Wishlist} path={wishlistPath()} strict exact />
    <Route component={EditBook} path={editBookPath()} strict exact />
    <Route component={NotFound} />
  </Switch>
);

export default AppRoutes;
