import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppRoutes from './AppRoutes';

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByText } = render(
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
  expect(getByText('Ничего не найдено.')).toBeInTheDocument();
});

test('shows book page when path is valid', async () => {
  const history = createMemoryHistory();
  const route = '/book/recRK4fx2LpfUSyXs';
  history.push(route);

  const { getByText } = render(
    <Router history={history}>
      <AppRoutes />
    </Router>
  );

  await waitFor(() => {
    expect(getByText('Совершенный код')).toBeInTheDocument();
  });
});
