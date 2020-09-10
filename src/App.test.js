import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { bookPath } from './helpers/routes';

import App from './App';
import BookContainer from './Book/BookContainer';
import List from './Book/List';
import NotFound from './Pages/NotFound';

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByText } = render(
    <Router history={history}>

      <Route component={List} path="/" exact />
      <Route component={BookContainer} path={bookPath()} strict exact />
      <Route component={NotFound} />

    </Router>
  );
  expect(getByText('Ничего не найдено.')).toBeInTheDocument();
});

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory();
  const route = '/book/recRK4fx2LpfUSyXs';
  history.push(route);

  const { getByText } = render(
    <Router history={history}>

      <Route component={List} path="/" exact />
      <Route component={BookContainer} path={bookPath()} strict exact />
      <Route component={NotFound} />

    </Router>
  );
  expect(getByText('Приёмы объектно-ориентированного проектирования. Паттерны проектирования')).toBeInTheDocument();
});
