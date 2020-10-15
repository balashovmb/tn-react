import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDropzone } from 'react-dropzone';

import Field from './Field';
import AuthorSelect from './AuthorSelect';
import Button from '../common/Button';
import useAuthors from '../hooks/useAuthors';
import BookCover from './BookCover';
import schema from './bookFormValidation';

const BookForm = ({ onSubmit, book, schemaType }) => {
  const {
    control, errors, register, handleSubmit, formState: { isSubmitting }, setValue
  } = useForm({
    resolver: yupResolver(schema(schemaType)),
    defaultValues: book ? {
      Title: book.Title,
      Pages: book.Pages,
      Annotation: book.Annotation,
      Progress: book.Progress,
      MinimalPrice: book.MinimalPrice,
      ExpectedPrice: book.ExpectedPrice,
      Amount: book.Amount,
      ExpectedAmount: book.ExpectedAmount,
      Subscribers: book.Subscribers,
    } : undefined
  });

  const allAuthors = useAuthors();
  const submitButtonText = book ? 'Сохранить изменения' : 'Добавить книгу';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
      <Field errors={errors} name="Title" label="Название" register={register} />
      <Field errors={errors} name="Annotation" label="Аннотация" type="textarea" register={register} />
      <Field errors={errors} name="Pages" label="Количество страниц" register={register} />
      <Field errors={errors} name="Progress" label="Процент прогресса" register={register} />
      <Field errors={errors} name="MinimalPrice" label="Минимальная цена" register={register} />
      <Field errors={errors} name="ExpectedPrice" label="Желаемая цена" register={register} />
      <Field errors={errors} name="Amount" label="Собранная сумма" register={register} />
      <Field errors={errors} name="ExpectedAmount" label="Ожидаемая сумма" register={register} />
      <Field errors={errors} name="Subscribers" label="Подписчики" register={register} />
      <div className="font-bold mt-2">Авторы</div>
      <AuthorSelect allAuthors={allAuthors} register={register} errors={errors} control={control} bookAuthors={book ? book.Authors : ''} />
      <Field type="file" name="Cover" label="Обложка" register={register} errors={errors} hidden />
      <CoverDropzone register={register} setValue={setValue} />
      {book && book.Cover
        && <OldCover register={register} book={book} />}
      <Button type="submit" disabled={isSubmitting} className="mt-2">{isSubmitting ? 'Идет загрузка...' : submitButtonText}</Button>
    </form>
  );
};

export default BookForm;

const CoverDropzone = ({ setValue }) => {
  const { acceptedFiles, getRootProps } = useDropzone({
    onDrop: files => {
      console.log('files dropzone', files[0])
      setValue('Cover', files);
    },
    maxFiles: 1
  });

  return (
    <div className="mt-2">
      <div {...getRootProps()} className="w-64 border border-gray-400  bg-primary mt-2 rounded">
        <span>Поместите сюда файл с изображением обложки</span>
      </div>
      {acceptedFiles[0] && <CoverToUpload files={acceptedFiles} />}
    </div>
  );
};

const CoverToUpload = ({ files }) => (
  <div>
    <div>Выбранный файл</div>
    {files.map(file => (
      <li className="ml-4" key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ))}
  </div>
);

const OldCover = ({ book, register }) => (
  <div className="mt-2">
    <div>Загруженная обложка</div>
    <BookCover className="mt-2" cover={book.Cover} title={book.title} />
    <Field name="OldCoverUrl" register={register} defaultValue={book.Cover} hidden />
  </div>
);
