import React from 'react';

import AuthorsList from '../Author/AuthorsList';
import QuestionForm from './QuestionForm';
import SimilarBooksContainer from './SimilarBooksContainer';
import BookInfo from './BookInfo';
import withLoader from '../HOC/withLoader';

const Book = (props) => {
  if (!props.book) {
    return <div>Информация о книге отсутствует.</div>;
  }
  const {
    book: {
      Authors,
      SimilarBooksIds
    }
  } = props;

  return (
    <BookPage>
      <SubscribeHeader>Подписаться на книгу</SubscribeHeader>
      <BookInfo {...props} />
      <AuthorsList authors={Authors} />
      <QuestionForm />
      <SimilarBooksContainer bookIds={SimilarBooksIds} />
    </BookPage>
  );
};

export default withLoader(Book);

const BookPage = ({ children }) => (
  <div className="mx-4 my-2">
    {children}
  </div>
);

const SubscribeHeader = ({ children }) => (
  <h3 className="font-bold text-3xl ml-4">
    {children}
  </h3>
);
