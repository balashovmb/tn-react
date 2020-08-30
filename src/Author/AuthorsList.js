import React from 'react';
import AboutAuthor from './AboutAuthor';
import ButtonGray from '../common/ButtonGray';

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
          && <ButtonGray className="m-2" onClick={() => this.toggle()}>Показать всех {authorsLength} авторов. </ButtonGray>}
      </div>
    );
  }
}

export default AuthorsList;
