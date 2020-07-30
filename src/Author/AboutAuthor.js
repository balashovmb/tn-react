import React from 'react';
import Avatar from './Avatar';

class AboutAuthor extends React.Component {
  render() {
    if (!this.props.author) {
      return <div>Информация об авторе отсутствует.</div>
    }
    const {
      author: { Name, Email, Info, AvatarUrl }
    } = this.props

    return (
      <div style={styles.container}>
        <Avatar avatar={AvatarUrl} name={Name} />
        <div style={styles.textContainer}>
          <div>{Name}</div>
          <div>{Email}</div>
          <div>{Info}</div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  },
  textContainer: {
    flex: '1'
  }
}

export default AboutAuthor;
