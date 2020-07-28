const author = {
  id: 1,
  Name: 'Эрих Гамма',
  Info: 'Программист из Швейцарии, один из четырёх авторов классической книги Design Patterns о шаблонах проектирования.',
  Email: 'Erich@Gamma.com',
  Avatar: 'https://www.azquotes.com/public/pictures/authors/ab/73/ab734892e4c516e12dbe75f8979b1b5d/548f7cc0c428d_erich_gamma.jpg',
}

const author2 = {
  id: 2,
  Name: 'Ричард Хелм',
  Info: 'Учёный, один из четырех авторов классической книги «Design Patterns» о шаблонах проектирования программного обеспечения.',
  Email: 'Richard@Helm.com',
  Avatar: 'https://im0-tub-ru.yandex.net/i?id=b2f47ba9891c6d1cc0a193c493ca0ae8&n=13&exp=1',
}

const author3 = {
  id: 3,
  Name: 'Ральф Джонсон',
  Info: 'Один из четырёх авторов классической книги Design Patterns о шаблонах проектирования.',
  Email: 'Ralph@Johnson.com',
  Avatar: 'http://photos.geni.com/p2/9762/9654/45ae7deef8881ab9/was46heq_large.jpg',
}

const author4 = {
  id: 4,
  Name: 'Джон Влисидис',
  Info: 'Американский учёный в области компьютерной инженерии греческого происхождения, программист, известный главным образом как один из четырёх авторов знаменитой книги по программной инженерии «Приёмы объектно-ориентированного проектирования. Паттерны проектирования»',
  Email: 'John@Vlissides.com',
}

const book = {
  Title: 'Приёмы объектно-ориентированного проектирования. Паттерны проектирования',
  Annotation: 'В предлагаемой книге описываются простые и изящные решения типичных задач, возникающих в объектно-ориентированном проектировании.',
  Pages: 366,
  Language: 'Английский',
  Progress: 100,
  Cover: 'https://cdn1.ozone.ru/multimedia/1037901712.jpg',
  Authors: [author, author2, author3, author4],
  MinimalPrice: 500,
  ExpectedPrice: 1000,
  Amount: 400000,
  ExpectedAmount: 1500000,
  Subscribers: 400
}

const bookWithoutAuthors = {
  Title: 'Приёмы объектно-ориентированного проектирования. Паттерны проектирования',
  Annotation: 'В предлагаемой книге описываются простые и изящные решения типичных задач, возникающих в объектно-ориентированном проектировании.',
  Pages: 366,
  Language: 'Английский',
  Progress: 100,
  Cover: 'https://cdn1.ozone.ru/multimedia/1037901712.jpg',
  // Authors: [],
  MinimalPrice: 500,
  ExpectedPrice: 1000,
  Amount: 400000,
  ExpectedAmount: 1500000,
  Subscribers: 400
}

export { author, author2, author3, author4, book, bookWithoutAuthors };
