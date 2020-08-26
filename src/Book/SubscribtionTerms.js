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
      <button className="standard-btn-gray" onClick={() => toggle()}>Условия подписки</button>
      {
        isOpen && ReactDOM.createPortal(
          <div className="bg-gray-900  appearance-none top-0 bottom-0 left-0 right-0 absolute flex justify-center">
            <div className="bg-gray-200 self-center">
              <div className=" text-right mr-4">
                <button className="standard-btn self-center bg-gray-400" onClick={() => toggle()}>Закрыть</button>
              </div>
              <table className="border">
                <thead>
                  <tr className="border border-gray-400">
                    <th className="border border-gray-400">Взнос</th>
                    <th className="border border-gray-400">Привилегии</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-400">
                    <td className="border border-gray-400">500</td>
                    <td className="border border-gray-400">Экземпляр книги</td>
                  </tr>
                  <tr className="border border-gray-400">
                    <td className="border border-gray-400">1000</td>
                    <td className="border border-gray-400">Экземпляр книги из первой отпечатанной партии</td>
                  </tr>
                  <tr className="border border-gray-400">
                    <td className="border border-gray-400">5000</td>
                    <td className="border border-gray-400">Экземпляр книги из первой отпечатанной партии с автографом автора</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>,
          document.getElementById('modal-root')
        )
      }
    </>
  );
};

export default SubscriptionTerms;
