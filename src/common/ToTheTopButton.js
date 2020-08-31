import React from 'react';
import debounce from './debounce';
import Button from './Button';

class ToTheTopButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { display: 'none' };
    this.handleScroll = debounce(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 100) {
      this.setState({ display: 'block' });
    } else {
      this.setState({ display: 'none' });
    }
  }

  toTheTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const { display } = this.state;
    const style = { display };

    return (
      <Button gray className="fixed bottom-0 right-0 mr-32 mb-20" style={style} onClick={(e) => this.toTheTop(e)}>Наверх</Button>
    );
  }
}

export default ToTheTopButton;
