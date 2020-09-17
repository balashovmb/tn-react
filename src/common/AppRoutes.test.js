import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import useBooks from '../hooks/useBooks';
import AppRoutes from './AppRoutes';
import httpClient from './httpClient';

jest.mock('./httpClient');
jest.mock('../hooks/useBooks');

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
  const record = {
    data: {
      id: '123', fields: { MinimalPrice: 100, ExpectedPrice: 1000, Title: 'Test book' }
    }
  };

  useBooks.mockImplementationOnce(() => ([record]));

  const history = createMemoryHistory();
  const route = '/book/recRK4fx2LpfUSyXs';
  history.push(route);

  const { getByText } = render(
    <Router history={history}>
      <AppRoutes />
    </Router>
  );

  await waitFor(() => {
    expect(getByText('Test book')).toBeInTheDocument();
    expect(getByText('Подписаться на книгу')).toBeInTheDocument();
  });
});

test('shows main page', async () => {
  const record = {
    data: {
      records: [{
        id: '123', fields: { MinimalPrice: 100, ExpectedPrice: 1000, Title: 'Test book' }
      },
      {
        id: '1234', fields: { MinimalPrice: 100, ExpectedPrice: 1000, Title: 'Test book2' }
      }
      ]
    }
  };

  const promise = Promise.resolve(record);

  httpClient.get.mockImplementationOnce(() => (promise));

  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const { getByText } = render(
    <Router history={history}>
      <AppRoutes />
    </Router>
  );

  await waitFor(() => {
    expect(getByText('Test book')).toBeInTheDocument();
    expect(getByText('Test book2')).toBeInTheDocument();
  });
});
