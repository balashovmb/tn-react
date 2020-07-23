import React from 'react';

import Book from './Book';

class App extends React.Component{
  render(){
    return(
      <div>
        <h3>Подписаться на книгу</h3>
        <Book book={this.props.book}/>
      </div>
    )
  }
}

export default App;
