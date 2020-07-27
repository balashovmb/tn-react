import React from 'react';
import AuthorsList from './AuthorsList';
import SubscriptionTerms from './SubscribtionTerms';

class Book extends React.Component {
  authors(Authors) {
    if (!Authors || Authors.length === 0) { return 'Автор не указан.' };

    let resultString = Authors.length > 1 ? 'Авторы: ' : 'Автор: ';
    let authorsNames = Authors.map(author => author.Name);
    resultString += authorsNames.join(', ');

    return resultString;
  }

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
          <div style={styles.imageBox}>
            <img style={styles.image} src={Cover} alt={Title}></img>
          </div>
          <div style={styles.textContainer}>
            <div>{Title} {(Subscribers > 300) && <span style={styles.tagHot}>*HOT!*</span>}</div>
            <div>{this.authors(Authors)}</div>
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
      </div>
    )
  }
}

const styles = {
  bookContainer: {
    display: 'flex'
  },
  imageBox: {
    maxWidth: '400px'
  },
  image: {
    width: '100%'
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
