import React from 'react';

const Avatar = ({ avatar, name }) => (
  <div style={styles.imageBox}>
    <img style={styles.image} src={avatar} alt={avatar ? name : 'Фото отсутствует.'} />
  </div>
);

const styles = {
  imageBox: {
    maxWidth: '100px'
  },
  image: {
    width: '100%'
  }
};

export default Avatar;
