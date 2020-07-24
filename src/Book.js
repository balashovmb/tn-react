import React from 'react';
import AboutAuthor from './AboutAuthor';

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
        Author,
        MinimalPrice,
        ExpectedPrice,
        Amount,
        ExpectedAmount
      }
    } = this.props

    return(
      <div>
        <div style={styles.bookContainer}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={Cover} alt={Title}></img>
          </div>
          <div style={styles.textContainer}>
            <div>{Title}</div>
            <div>Автор: {Author.Name}</div>
            <div>{Annotation}</div>
            <div>Количество страниц: {Pages}</div>
            <div>Язык: {Language}</div>
            <div>Процент прогресса: {Progress}</div>
            <div>Минимальная цена: {MinimalPrice}</div>
            <div>Желаемая цена: {ExpectedPrice}</div>
            <div>Собранная сумма: {Amount}</div>
            <div>Ожидаемая сумма: {ExpectedAmount}</div>
          </div>
        </div>
          <AboutAuthor author={Author}/>
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
  }
}

export default Book;