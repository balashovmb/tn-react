import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Book from './Book';

test('renders information about the book', () => {
  const author = {
    Name: 'Стив Макконнелл',
    Info: 'Признанный авторитет и известнейший автор в сообществе разработчиков. Он занимает должность главного разработчика ПО в компании Construx Software.',
    Email: 'steve@mcconnel.com',
    Avatar: 'https://i.livelib.ru/auface/178436/o/b303/Stiv_Makkonnell.jpg',
  }

  const book = {
    Title: 'Совершенный код.',
    Annotation: 'Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию.',
    Pages: 896,
    Language: 'Английский',
    Progress: 100,
    Cover: 'https://cdn1.ozone.ru/multimedia/1020973362.jpg',
    Author: author,
    MinimalPrice: 500,
    ExpectedPrice: 1000,
    Amount: 400000,
    ExpectedAmount: 1500000
  }

  const { getByAltText, getByText } = render(<Book book={book} />)
  expect(getByText('Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию.')).toBeInTheDocument();
  expect(getByText('Автор: Стив Макконнелл')).toBeInTheDocument();
  expect(getByText('Количество страниц: 896')).toBeInTheDocument();
  expect(getByText('Язык: Английский')).toBeInTheDocument();
  expect(getByText('Процент прогресса: 100')).toBeInTheDocument();
  expect(getByText('Минимальная цена: 500')).toBeInTheDocument();
  expect(getByText('Желаемая цена: 1000')).toBeInTheDocument();
  expect(getByText('Собранная сумма: 400000')).toBeInTheDocument();
  expect(getByText('Ожидаемая сумма: 1500000')).toBeInTheDocument();
  expect(getByAltText('Совершенный код.').src).toBe(book.Cover);
})

test('renders empty book info', () => {
  const { getByText } = render(<Book />);
  expect(getByText('Информация о книге отсутствует.')).toBeInTheDocument();
})
