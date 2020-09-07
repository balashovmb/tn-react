import React from 'react';
import { Link } from 'react-router-dom';

import TagHot from './TagHot';
import AuthorsString from '../Author/AuthorsString';

const BookSpecs = ({ book, className }) => (
  <div className={className}>
    <TagHot subscribers={book.Subscribers} />
    <Row label="" className="font-bold">
      <Link to={`/book/${book.Id}`}>{book.Title}</Link>
    </Row>
    <AuthorsString authors={book.Authors} />
    <Row label=""> {book.Annotation} </Row>
    <Row label="Количество страниц"> {book.Pages} </Row>
    <Row label="Язык">{book.Language}</Row>
    <Row label="Процент прогресса">{book.Progress}</Row>
    <Row label="Минимальная цена">{book.MinimalPrice}</Row>
    <Row label="Желаемая цена">{book.ExpectedPrice}</Row>
    <Row label="Собранная сумма">{book.Amount}</Row>
    <Row label="Ожидаемая сумма">{book.ExpectedAmount}</Row>
    <Row label="Подписчики">{book.Subscribers}</Row>
  </div>
);

export default BookSpecs;

const Row = ({ children, label, className }) => (
  <div className={className}>{label}{label && ': '}{children}</div>
);
