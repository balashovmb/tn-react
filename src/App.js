import React from 'react';

import BookContainer from './Book/BookContainer';
import Header from './common/Header'
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h3>Подписаться на книгу</h3>
        <BookContainer />
        <Footer />
      </>
    )
  }
}

export default App;
