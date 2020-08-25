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
      <Title>{book.Title}</Title>
      <AuthorsString authors={book.Authors} />
      <Annotation> {book.Annotation} </Annotation>
      <Pages> {book.Pages} </Pages>
      <Language>{book.Language}</Language>
      <Progress>{book.Progress}</Progress>
      <MinimalPrice>{book.MinimalPrice}</MinimalPrice>
      <ExpectedPrice>{book.ExpectedPrice}</ExpectedPrice>
      <Amount>{book.Amount}</Amount>
      <ExpectedAmount>{book.ExpectedAmount}</ExpectedAmount>
      <Subscribers>{book.Subscribers}</Subscribers>
      <SubscriptionTerms />
      <PriceInputContainer minimalPrice={book.MinimalPrice} />
    </TextContainer>
  </Info>
);

export default BookInfo;

const styles = {
  infoContainer: {
    display: 'flex'
  },
  textContainer: {
    flex: '1',
    paddingLeft: '10px'
  },
};

const Language = ({ children }) => (
  <div>
    Язык: {children}
  </div>
);

const Progress = ({ children }) => (
  <div>
    Процент прогресса: {children}
  </div>
);

const MinimalPrice = ({ children }) => (
  <div>
    Минимальная цена: {children}
  </div>
);

const ExpectedPrice = ({ children }) => (
  <div>
    Желаемая цена: {children}
  </div>
);

const Amount = ({ children }) => (
  <div>
    Собранная сумма: {children}
  </div>
);

const ExpectedAmount = ({ children }) => (
  <div>
    Ожидаемая сумма: {children}
  </div>
);

const Subscribers = ({ children }) => (
  <div>
    Подписчики: {children}
  </div>
);

const Annotation = ({ children }) => (
  <div>
    {children}
  </div>
);
const Pages = ({ children }) => (
  <div>
    Количество страниц: {children}
  </div>
);

const Title = ({ children }) => (
  <div>
    {children}
  </div>
);

const Info = ({ children }) => (
  <div style={styles.infoContainer}>
    {children}
  </div>
);

const TextContainer = ({ children }) => (
  <div style={styles.textContainer}>
    {children}
  </div>
);
