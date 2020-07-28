import React from 'react';

import Book from './Book';

class App extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>Bookstarter</header>
        <h3>Подписаться на книгу</h3>
        <Book book={this.props.book} />
        <footer style={styles.footer}>&copy; {new Date().getFullYear()}, Mikhail Balashov </footer>
      </>
    )
  }
}

export default App;

const styles = {
  header: {
    backgroundColor: '#22222222',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px'
  }
}