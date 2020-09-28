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

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  const authors = useAuthors();
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
      <AuthorSelect authors={authors} register={register} errors={errors} />
      <Field type="file" name="Cover" label="Обложка" register={register} errors={errors} />
      {book && book.Cover && <BookCover className="mt-2" cover={book.Cover} title={book.title} />}
      <div name="">
        {fields.map(({ id }, index) => (
          <input key={id} name={`test[${index}].value`} ref={register()} />

        ))}
      </div>
      <Button onClick={(e) => { e.preventDefault(); append({}); }}>+</Button>
      <Button disabled={isSubmitting} className="mt-2">{isSubmitting ? 'Идет загрузка...' : submitButtonText}</Button>
    </form>
  );
};

export default BookForm;
