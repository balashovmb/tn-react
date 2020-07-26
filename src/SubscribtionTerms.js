import React from 'react';

import ReactDOM from 'react-dom';

class SubscriptionTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <br></br>
        <a onClick={() => this.toggle()}>Условия подписки</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                <table >
                  <thead>
                    <tr>
                      <th>Взнос</th>
                      <th>Привилегии</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>500</td>
                      <td>Экземпляр книги</td>
                    </tr>
                    <tr>
                      <td>1000</td>
                      <td>Экземпляр книги из первой отпечатанной партии</td>
                    </tr>
                    <tr>
                      <td>5000</td>
                      <td>Экземпляр книги из первой отпечатанной партии с автографом автора</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={() => this.toggle()}>Закрыть</button>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

export default SubscriptionTerms;

const styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  }
}