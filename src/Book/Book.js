import React from 'react';

import AuthorsList from '../Author/AuthorsList';
import SubscriptionTerms from './SubscribtionTerms';
import BookCover from './BookCover';
import QuestionForm from './QuestionForm';
import AuthorsString from '../Author/AuthorsString';

class Book extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Информация о книге отсутствует.</div>
    }
    const {
      book: {
        Title,
        Annotation,
        Pages,
        Language,
        Cover,
        Progress,
        Authors,
        MinimalPrice,
        ExpectedPrice,
        Amount,
        ExpectedAmount,
        Subscribers
      }
    } = this.props

    return (
      <div>
        <div style={styles.bookContainer}>
          <BookCover cover={Cover} title={Title} />
          <div style={styles.textContainer}>
            <div>{Title} {(Subscribers > 300) && <span style={styles.tagHot}>*HOT!*</span>}</div>
            <AuthorsString authors={Authors}/>
            <div>{Annotation}</div>
            <div>Количество страниц: {Pages}</div>
            <div>Язык: {Language}</div>
            <div>Процент прогресса: {Progress}</div>
            <div>Минимальная цена: {MinimalPrice}</div>
            <div>Желаемая цена: {ExpectedPrice}</div>
            <div>Собранная сумма: {Amount}</div>
            <div>Ожидаемая сумма: {ExpectedAmount}</div>
            <div>Подписчики: {Subscribers}</div>
            <SubscriptionTerms />
          </div>
        </div>
        <AuthorsList authors={Authors} />
        <QuestionForm />
      </div>
    )
  }
}

const styles = {
  bookContainer: {
    display: 'flex'
  },
  textContainer: {
    flex: '1',
    paddingLeft: '10px'
  },
  tagHot: {
    fontWeight: 'bold'
  }
}

export default Book;