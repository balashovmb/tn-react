import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers';

import Button from '../common/Button';
import { createBook } from '../common/httpClient';
import { bookPath } from '../helpers/routes';
import { uploadFile } from '../common/filestack';
import useAuthors from '../hooks/useAuthors';
import schema from '../Book/bookFormValidation';
import Field from '../Book/Field';
import AuthorSelect from '../Book/AuthorSelect';

const NewBook = () => {
  const {
    errors, register, handleSubmit, formState: { isSubmitting }
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const authors = useAuthors();

  const onSubmit = async ({ Cover, ...fields }) => {
    const formData = new FormData();
    formData.append('fileUpload', Cover[0]);
    const uploadResult = await uploadFile(formData);

    const res = await createBook({
      ...fields,
      Cover: uploadResult.url,
      MinimalPrice: parseFloat(fields.MinimalPrice),
      Pages: parseFloat(fields.Pages),
      Progress: parseFloat(fields.Progress),
      ExpectedPrice: parseFloat(fields.ExpectedPrice),
      Amount: parseFloat(fields.Amount),
      ExpectedAmount: parseFloat(fields.ExpectedAmount),
      Subscribers: parseFloat(fields.Subscribers),
      Authors: [fields.Authors]
    });
    const newBook = res.records[0];
    const redirectURI = bookPath(newBook.id);

    history.push(redirectURI);
  };
  return (
    <>
      <h4 className="font-bold text-xl">Новая книга</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <Field errors={errors} name="Title" label="Название" register={register} />
        <Field errors={errors} name="Annotation" label="Аннотация" type="textarea" register={register} />
        <Field errors={errors} name="Pages" label="Количество страниц" register={register} defaultValue={0} />
        <Field errors={errors} name="Progress" label="Процент прогресса" register={register} defaultValue={0} />
        <Field errors={errors} name="MinimalPrice" label="Минимальная цена" register={register} defaultValue={0} />
        <Field errors={errors} name="ExpectedPrice" label="Желаемая цена" register={register} defaultValue={0} />
        <Field errors={errors} name="Amount" label="Собранная сумма" register={register} defaultValue={0} />
        <Field errors={errors} name="ExpectedAmount" label="Ожидаемая сумма" register={register} defaultValue={0} />
        <Field errors={errors} name="Subscribers" label="Подписчики" register={register} defaultValue={0} />
        <AuthorSelect authors={authors} register={register} errors={errors} />
        <Field type="file" name="Cover" label="Обложка" register={register} errors={errors} />
        <Button disabled={isSubmitting} className="mt-2">{isSubmitting ? 'Идет загрузка...' : 'Добавить книгу'}</Button>
      </form>
    </>
  );
};

export default NewBook;
