import React from 'react';

import Layout from './common/Layout';
import ThemeContextProvider from './common/ThemeContext';
import List from './Book/List';

const App = () => (
  <ThemeContextProvider>
    <Layout>
      <SubscribeHeader>Подписаться на книгу</SubscribeHeader>
      <List />
    </Layout>
  </ThemeContextProvider>
);

export default App;

const SubscribeHeader = ({ children }) => (
  <h3 className="font-bold text-3xl ml-4">
    {children}
  </h3>
);
