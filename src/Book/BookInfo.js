import React from 'react';

import TagHot from './TagHot';
import BookCover from './BookCover';
import AuthorsString from '../Author/AuthorsString';
import PriceInputContainer from './PriceInputContainer';
import SubscriptionTerms from './SubscribtionTerms';

const BookInfo = ({ book }) => (
  <Info>
    <BookCover cover={book.Cover} title={book.Title} />
    <TextContainer>
      <TagHot subscribers={book.Subscribers} />
      <Row label="" className="font-bold">{book.Title}</Row>
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
      <SubscriptionTerms />
      <PriceInputContainer minimalPrice={book.MinimalPrice} />
    </TextContainer>
  </Info>
);

export default BookInfo;

const Info = ({ children }) => (
  <div className="flex flex-col md:flex-row">
    {children}
  </div>
);

const TextContainer = ({ children }) => (
  <div className="ml-6">
    {children}
  </div>
);

const Row = ({ children, label, className }) => (
  <div className={className}>{label}{label && ': '}{children}</div>
);
