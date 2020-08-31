import React from 'react';
import AboutAuthor from './AboutAuthor';
import Button from '../common/Button';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allAuthors: false };
  }

  toggle() {
    this.setState({ allAuthors: (prevState) => !prevState.allAuthors });
  }

  authorsToRender(authors) {
    return this.state.allAuthors ? authors : authors.slice(0, 3);
  }

  render() {
    const { authors } = this.props;

    if (!authors || authors.length === 0) { return (<div>Информация об авторах отсутствует</div>); }

    const authorsLength = authors.length;

    return (
      <div>
        {this.authorsToRender(authors).map(author => (
          <div key={author.Id}>
            <AboutAuthor author={author} />
          </div>
        ))}
        {((authorsLength > 3) && (!this.state.allAuthors))
          && <Button gray className="m-2" onClick={() => this.toggle()}>Показать всех {authorsLength} авторов. </Button>}
      </div>
    );
  }
}

export default AuthorsList;
