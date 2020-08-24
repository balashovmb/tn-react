import React, { useState } from 'react';

import ReactDOM from 'react-dom';

const SubscriptionTerms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <br />
      <button onClick={() => toggle()}>Условия подписки</button>
      {
        isOpen && ReactDOM.createPortal(
          <div style={styles.overlay}>
            <div style={styles.body}>
              <table>
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
              <button onClick={() => toggle()}>Закрыть</button>
            </div>
          </div>,
          document.getElementById('modal-root')
        )
      }
    </>
  );
};

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
};
