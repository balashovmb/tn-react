import React from 'react';

import AuthorsList from '../Author/AuthorsList';
import QuestionForm from './QuestionForm';
import SimilarBooksContainer from './SimilarBooksContainer';
import BookInfo from './BookInfo';

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
      <BookInfo {...props} />
      <AuthorsList authors={Authors} />
      <QuestionForm />
      <SimilarBooksContainer bookIds={SimilarBooksIds} />
    </BookPage>
  );
};

export default Book;

const BookPage = ({ children }) => (
  <div className="mx-4 my-2">
    {children}
  </div>
);
