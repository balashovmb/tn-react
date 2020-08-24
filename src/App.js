import React from 'react';

import BookContainer from './Book/BookContainer';
import Header from './common/Header';
import Footer from './common/Footer';
import ToTheTopButton from './common/ToTheTopButton';

const App = () => (
  <>
    <Header />
    <h3>Подписаться на книгу</h3>
    <BookContainer bookIds={['recCSoQw7GacF3O5O']} />
    <Footer />
    <ToTheTopButton />
  </>
);

export default App;
