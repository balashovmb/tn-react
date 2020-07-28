import React from 'react';

class AuthorsAvatar extends React.Component {
  altText(avatar, name) {
    return avatar ? name : 'Фото отсутствует.'
  }

  render() {
    const { avatar, name } = this.props;
    return (
      <div style={styles.imageBox}>
        <img style={styles.image} src={avatar} alt={this.altText(avatar, name)}></img>
      </div>
    )
  }
}

const styles = {
  imageBox: {
    maxWidth: '100px'
  },
  image: {
    width: '100%'
  }
}

export default AuthorsAvatar;
