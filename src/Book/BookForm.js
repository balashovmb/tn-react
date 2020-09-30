import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import Field from './Field';
import AuthorSelect from './AuthorSelect';
import Button from '../common/Button';
import useAuthors from '../hooks/useAuthors';
import BookCover from './BookCover';
import schema from './bookFormValidation';

const BookForm = ({ onSubmit, book, schemaType }) => {
  const {
    control, errors, register, handleSubmit, formState: { isSubmitting }
  } = useForm({ resolver: yupResolver(schema(schemaType)) });

  const allAuthors = useAuthors();
  const submitButtonText = book ? 'Сохранить изменения' : 'Добавить книгу';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
      <Field errors={errors} name="Title" label="Название" register={register} defaultValue={book ? book.Title : ''} />
      <Field errors={errors} name="Annotation" label="Аннотация" type="textarea" register={register} defaultValue={book ? book.Annotation : ''} />
      <Field errors={errors} name="Pages" label="Количество страниц" register={register} defaultValue={book ? book.Pages : 0} />
      <Field errors={errors} name="Progress" label="Процент прогресса" register={register} defaultValue={book ? book.Progress : 0} />
      <Field errors={errors} name="MinimalPrice" label="Минимальная цена" register={register} defaultValue={book ? book.MinimalPrice : 0} />
      <Field errors={errors} name="ExpectedPrice" label="Желаемая цена" register={register} defaultValue={book ? book.ExpectedPrice : 0} />
      <Field errors={errors} name="Amount" label="Собранная сумма" register={register} defaultValue={book ? book.Amount : 0} />
      <Field errors={errors} name="ExpectedAmount" label="Ожидаемая сумма" register={register} defaultValue={book ? book.ExpectedAmount : 0} />
      <Field errors={errors} name="Subscribers" label="Подписчики" register={register} defaultValue={book ? book.Subscribers : 0} />
      <AuthorSelect allAuthors={allAuthors} register={register} errors={errors} control={control} bookAuthors={book ? book.Authors : ''} />
      <Field type="file" name="Cover" label="Обложка" register={register} errors={errors} />
      {book && book.Cover && <BookCover className="mt-2" cover={book.Cover} title={book.title} />}
      <Button disabled={isSubmitting} className="mt-2">{isSubmitting ? 'Идет загрузка...' : submitButtonText}</Button>
    </form>
  );
};

export default BookForm;
