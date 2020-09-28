import * as yup from 'yup';

const errors = {
  required: 'Необходимо заполнить поле',
  pages: 'Книга должна содержать не менее 10 страниц',
  progress: 'Прогресс должен находиться в пределах от 0 до 100',
  minimal: 'Минимальная цена должна быть больше 100',
  expected: 'Ожидаемая цена быть больше 100',
  authors: 'Выберите автора из списка',
  cover: {
    empty: 'Необходимо приложить изображение обложки',
    type: 'Недопустимый тип файла',
    size: 'Размер файла должен быть менее 1 мб'
  }
};

const supportedFormats = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png'
];

const schema = yup.object().shape({
  Title: yup.string().required(errors.required),
  Annotation: yup.string().required(errors.required),
  Pages: yup.number().min(10, errors.pages),
  Progress: yup.number().min(0, errors.progress).max(100, errors.progress),
  MinimalPrice: yup.number().min(100, errors.minimal),
  ExpectedPrice: yup.number().min(100, errors.expected),
  Amount: yup.number().min(0),
  ExpectedAmount: yup.number().min(0),
  Subscribers: yup.number().min(0),
  Authors: yup.string().required(errors.authors),
  Cover: yup.mixed().test(
    'required',
    errors.cover.empty,
    value => value[0]
  ).test(
    'fileType',
    errors.cover.type,
    value => value && value[0] && supportedFormats.includes(value[0].type)
  ).test(
    'fileSize',
    errors.cover.size,
    value => value && value[0] && value[0].size <= 1000000
  )
});

export default schema;
