const author = {
  Id: 1,
  Name: 'Эрих Гамма',
  Info: 'Программист из Швейцарии, один из четырёх авторов классической книги Design Patterns о шаблонах проектирования.',
  Email: 'Erich@Gamma.com',
  AvatarUrl: 'https://www.azquotes.com/public/pictures/authors/ab/73/ab734892e4c516e12dbe75f8979b1b5d/548f7cc0c428d_erich_gamma.jpg',
}

const author2 = {
  Id: 2,
  Name: 'Ричард Хелм',
  Info: 'Учёный, один из четырех авторов классической книги «Design Patterns» о шаблонах проектирования программного обеспечения.',
  Email: 'Richard@Helm.com',
  AvatarUrl: 'https://im0-tub-ru.yandex.net/i?id=b2f47ba9891c6d1cc0a193c493ca0ae8&n=13&exp=1',
}

const author3 = {
  Id: 3,
  Name: 'Ральф Джонсон',
  Info: 'Один из четырёх авторов классической книги Design Patterns о шаблонах проектирования.',
  Email: 'Ralph@Johnson.com',
  AvatarUrl: 'http://photos.geni.com/p2/9762/9654/45ae7deef8881ab9/was46heq_large.jpg',
}

const author4 = {
  Id: 4,
  Name: 'Джон Влисидис',
  Info: 'Американский учёный в области компьютерной инженерии греческого происхождения, программист, известный главным образом как один из четырёх авторов знаменитой книги по программной инженерии «Приёмы объектно-ориентированного проектирования. Паттерны проектирования»',
  Email: 'John@Vlissides.com',
}

const book = {
  Id: 1,
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

const user = {
  email: 'stepan@ivanov.org',
  firstName: 'Stepan',
  lastName: 'Ivanov',
  avatarUrl: 'https://imageproxy.ifunny.co/noop/user_photos/be199eb6d91c6160b18c91d3189f33a8a581a96b_0.jpg'
}

const book2Author = {
  Name: 'Стив Макконнелл',
  Info: 'Признанный авторитет и известнейший автор в сообществе разработчиков. Он занимает должность главного разработчика ПО в компании Construx Software.',
  Email: 'steve@mcconnel.com',
  Avatar: 'https://i.livelib.ru/auface/178436/o/b303/Stiv_Makkonnell.jpg',
}

const book2 = {
  Id: 2,
  Title: 'Совершенный код',
  Annotation: 'Более 10 лет первое издание этой книги считалось одним из лучших практических руководств по программированию.',
  Pages: 896,
  Language: 'Английский',
  Progress: 100,
  Cover: 'https://cdn1.ozone.ru/multimedia/1020973362.jpg',
  Author: book2Author,
  MinimalPrice: 500,
  ExpectedProice: 1000,
  Amount: 400000,
  ExpectedAmount: 1500000
}

const book3Aauthor = {
  Name: 'Cэнди Метц'
}

const book3 = {
  Id: 3,
  Title: 'Ruby. Объектно-ориентированное проектирование',
  Author: book3Aauthor,
  Cover: 'https://im0-tub-ru.yandex.net/i?id=3f3c7d0ff4b42ec20e5569a3346daaec&n=13&exp=1'
}

const book4Aauthor = {
  Name: 'Хэл Фултон'
}

const book4 = {
  Id: 4,
  Title: 'Программирование на языке RUBY',
  Author: book4Aauthor,
  Cover: 'https://im0-tub-ru.yandex.net/i?id=83f03e3d70b070bf3952763fbde6b9c5&n=13&exp=1'
}


const book5Aauthor = {
  Name: 'Майкл Хартл'
}

const book5 = {
  Id: 5,
  Title: 'Ruby on Rails для начинающих',
  Author: book5Aauthor,
  Cover: 'https://cdncv1.litres.ru/pub/c/pdf-kniga/cover_415/22805990-m-hartl-ruby-on-rails-dlya-nachinauschih-izuchaem-razrabotku-veb-prilozheniy-na-osnove-rails-22805990.jpg'
}

const API_TOKEN = 'keyYoatUKcvLsVwMT';

const booksList = [book2, book3, book4, book5];

export { author, author2, author3, author4, book, bookWithoutAuthors, user, booksList, API_TOKEN };
