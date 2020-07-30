import React from 'react';


class AuthorsString extends React.Component {
  authorsString(Authors) {
    if (!Authors || Authors.length === 0) { return 'Автор не указан.' };
  
    let resultString = Authors.length > 1 ? 'Авторы: ' : 'Автор: ';
    resultString += Authors.map(author => author.Name).join(', ');
  
    return resultString;
  }
  render(){
    const {authors} = this.props;
    return   <div>{this.authorsString(authors)}</div>
  }
}

export default AuthorsString;
