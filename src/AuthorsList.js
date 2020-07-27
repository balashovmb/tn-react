import React from 'react';
import AboutAuthor from './AboutAuthor';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allAuthors: false };
  }

  toggle() {
    this.setState({ allAuthors: !this.state.allAuthors });
  }

  render() {
    let { authors } = this.props;

    if (!authors || authors.length === 0)
      { return (<div>Информация об авторах отсутствует.</div>) }

    const authorsLength = authors.length;

    if (!this.state.allAuthors) {
      authors = authors.slice(0, 3);
    }

    return (
      <div>
        {authors.map(author => (
          <div key={author.id}>
            <AboutAuthor author={author} />
          </div>
        ))}
        {((authorsLength > 3) && (!this.state.allAuthors)) &&
          <a onClick={() => this.toggle()}>Показать всех {authorsLength} авторов. </a>
        }
      </div>
    )
  }
}

export default AuthorsList;
