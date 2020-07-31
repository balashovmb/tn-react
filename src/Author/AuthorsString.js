import React from 'react';

const authorsString = (Authors) => {
  if (!Authors || Authors.length === 0) { return 'Автор не указан.' };

  let resultString = Authors.length > 1 ? 'Авторы: ' : 'Автор: ';
  resultString += Authors.map(author => author.Name).join(', ');

  return resultString;
}

const AuthorsString = ({ authors }) => {
  return <div>{authorsString(authors)}</div>
}

export default AuthorsString;
