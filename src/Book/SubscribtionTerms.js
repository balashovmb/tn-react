import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

import Button from '../common/Button';
import { ThemeContext } from '../common/ThemeContext';

const SubscriptionTerms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <br />
      <Button className="standard-btn" onClick={() => toggle()}>Условия подписки</Button>
      {
        isOpen && ReactDOM.createPortal(
          <div className="bg-gray-900 appearance-none top-0 bottom-0 left-0 right-0 absolute flex justify-center">
            <div className={`${
              theme === 'light' ? 'theme-light' : 'theme-dark'} bg-primary self-center border`}>
              <div className=" text-right mr-4">
                <Button className="self-center bg-primary" onClick={() => toggle()}>Закрыть</Button>
              </div>
              <Table theme={theme}>
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
  <table className="border bg-primary text-main-text">
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
