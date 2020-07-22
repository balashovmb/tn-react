import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const author = {
  Name: 'Стив Макконнелл',
  Info: 'Признанный авторитет и известнейший автор в сообществе разработчиков. Он занимает должность главного разработчика ПО в компании Construx Software.',
  Email: 'steve@mcconnel.com',
  Avatar: 'https://i.livelib.ru/auface/178436/o/b303/Stiv_Makkonnell.jpg',
}

const book = {
  Title: 'Совершенный код.',
  Annotation: 'Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию.',
  Pages: 896,
  Language: 'Английский',
  Progress: 100,
  Cover: 'https://cdn1.ozone.ru/multimedia/1020973362.jpg',
  Author: author,
  MinimalPrice: 500,
  ExpectedProice: 1000,
  Amount: 400000,
  ExpectedAmount: 1500000
}

ReactDOM.render(
  <App book = {book} />,
  document.getElementById('root')
);