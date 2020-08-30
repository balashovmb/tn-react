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
              <Table>
                <TableHead>
                  <Row>
                    <Cell>Взнос</Cell>
                    <Cell>Привилегии</Cell>
                  </Row>
                </TableHead>
                <TableBody>
                  <Row>
                    <Cell>500</Cell>
                    <Cell>Экземпляр книги</Cell>
                  </Row>
                  <Row>
                    <Cell>1000</Cell>
                    <Cell>Экземпляр книги из первой отпечатанной партии</Cell>
                  </Row>
                  <Row>
                    <Cell>5000</Cell>
                    <Cell>Экземпляр книги из первой отпечатанной партии с автографом автора</Cell>
                  </Row>
                </TableBody>
              </Table>
            </div>
          </div>,
          document.getElementById('modal-root')
        )
      }
    </>
  );
};

export default SubscriptionTerms;

const Table = ({ children }) => (
  <table className="border">
    {children}
  </table>
);

const TableHead = ({ children }) => (
  <thead className="border border-gray-400 font-bold">
    {children}
  </thead>
);

const TableBody = ({ children }) => (
  <tbody className="border border-gray-400">
    {children}
  </tbody>
);

const Cell = ({ children }) => (
  <td className="border border-gray-400">
    {children}
  </td>
);

const Row = ({ children }) => (
  <tr className="border border-gray-400">
    {children}
  </tr>
);
