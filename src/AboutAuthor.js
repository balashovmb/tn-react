import React from 'react';

class AboutAuthor extends React.Component {
  render() {
    if (!this.props.author) {
      return <div>Информация об авторе отсутствует.</div>
    }
    const {
      author: { Name, Email, Info, Avatar }
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Avatar} alt={Name}></img>
        </div>
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
  imageBox: {
    maxWidth: '100px'
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flex: '1'
  }
}

export default AboutAuthor;
