import React from 'react';

import BookCover from './BookCover';
import PriceInputContainer from './PriceInputContainer';
import SubscriptionTerms from './SubscribtionTerms';
import BookSpecs from './BookSpecs';

const BookInfo = ({ book }) => (
  <Info>
    <BookCover cover={book.Cover} title={book.Title} />
    <TextContainer>
      <BookSpecs book={book} />
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
