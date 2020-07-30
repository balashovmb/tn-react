import React from 'react';

import Book from './Book/Book';
import Header from './common/Header'
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h3>Подписаться на книгу</h3>
        <Book book={this.props.book} />
        <Footer />
      </>
    )
  }
}

export default App;
