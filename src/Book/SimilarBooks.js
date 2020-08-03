import React from 'react';
import SimilarBook from './SimilarBook';

class SimilarBooks extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { booksToShow: this.props.books.slice(0, 3) };
    this.removeFromSimilarBook = this.removeFromSimilarBook.bind(this);
  }

  removeFromSimilarBook(bookId) {
    this.setState((state) => ({
      booksToShow: (this.props.books.filter(bookIter => bookIter.Id != bookId)).slice(0, 3)
    }))
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <div>Похожие книги:</div>
        {this.state.booksToShow.map(book => (
          <SimilarBook book={book} key={book.Id} removeFromSimilarBook={this.removeFromSimilarBook} />
        ))}
      </div>
    )
  }
}

export default SimilarBooks;
