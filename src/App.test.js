import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { act } from 'react-dom/test-utils';
import useBooks from './hooks/useBooks';
import App from './App';
import httpClient from './common/httpClient';

jest.mock('./common/httpClient');
jest.mock('./hooks/useBooks');

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByText } = render(
    <App history={history} />
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
    <App history={history} />
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

  const { getByText } = render(
    <App history={history} />
  );

  await waitFor(() => {
    expect(getByText('Test book')).toBeInTheDocument();
    expect(getByText('Test book2')).toBeInTheDocument();
  });
});
test('navigating to wishlist page', () => {
  const promise = Promise.resolve({ data: { records: [] } });
  httpClient.get.mockImplementationOnce(() => (promise));

  const history = createMemoryHistory();
  const result = render(
    <App history={history} />
  );
  const wishlistLink = result.getByText('Список желаемого');
  userEvent.click(wishlistLink);
  const emptyList = result.getByText('Список желаемого пуст.');
  expect(emptyList).toBeTruthy();
  const { location: { pathname } } = history;
  expect(pathname).toBe('/wishlist');
});

test('navigating to new book page', async () => {
  const promise = Promise.resolve({ data: { records: [] } });
  httpClient.get.mockImplementation(() => (promise));
  const history = createMemoryHistory();
  const result = render(
    <App history={history} />
  );

  const wishlistLink = result.getByText('Добавить книгу');
  userEvent.click(wishlistLink);
  const newBook = result.getByText('Новая книга');
  expect(newBook).toBeTruthy();
  const { location: { pathname } } = history;
  expect(pathname).toBe('/book/new');
  await act(() => promise);
});
