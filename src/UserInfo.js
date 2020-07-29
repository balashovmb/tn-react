import React from 'react';
import UserContext from './UserContext';

class UserInfo extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => (<div style={styles.user}>
            <div style={styles.container}>
              <div style={styles.imageBox}>
                <img style={styles.image} src={user.avatarUrl} alt={`user.firstName user.lastName`}></img>
              </div>
              <div style={styles.textContainer}>
                <div>{user.firstName}</div>
                <div >{user.lastName}</div>
              </div>
            </div>
          </div>
          )
        }
      </UserContext.Consumer>
    )
  }
}

export default UserInfo;

const styles = {
  user: {
    alignItems: 'right',
    float: 'right',
    fontSize: '0.8rem',
    fontWeight: 'normal'
  },
  imageBox: {
    maxWidth: '30px'
  },
  image: {
    width: '100%'
  },
  container: {
    display: 'flex'
  },
  textContainer: {
    flex: '1'
  }
}
