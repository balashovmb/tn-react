import React from 'react';

import BookContainer from './Book/BookContainer';
import Header from './common/Header';
import Footer from './common/Footer';
import ToTheTopButton from './common/ToTheTopButton';

const App = () => (
  <>
    <Header />
    <SubscribeHeader>Подписаться на книгу</SubscribeHeader>
    <BookContainer bookIds={['recCSoQw7GacF3O5O']} />
    <Footer />
    <ToTheTopButton />
  </>
);

export default App;

const SubscribeHeader = ({ children }) => (
  <h3 className="font-bold text-3xl ml-4">
    {children}
  </h3>
);
