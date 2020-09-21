import React from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Button from '../common/Button';
import { createBook } from '../common/httpClient';
import { bookPath } from '../helpers/routes';
import { uploadFile } from '../common/filestack';
import useAuthors from '../hooks/useAuthors';

const errors = {
  required: 'Необходимо заполнить поле',
  pages: 'Книга должна содержать не менее 10 страниц',
  progress: 'Прогресс должен находиться в пределах от 0 до 100',
  minimal: 'Минимальная цена должна быть больше 100',
  expected: 'Ожидаемая цена быть больше 100',
  authors: 'Выберите автора из списка',
};

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
});

const NewBook = () => {
  const {
    errors, register, handleSubmit, formState: { isSubmitting }
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const authors = useAuthors();

  const onSubmit = async ({ Cover, ...fields }) => {
    let coverUrl = '';
    if (Cover[0]) {
      const formData = new FormData();
      formData.append('fileUpload', Cover[0]);
      const uploadResult = await uploadFile(formData);
      coverUrl = uploadResult.url;
    }

    const res = await createBook({
      ...fields,
      Cover: coverUrl,
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
        <Authors authors={authors} register={register} errors={errors} />
        <Field type="file" name="Cover" label="Обложка" register={register} errors={errors} />
        <Button disabled={isSubmitting} className="mt-2">{isSubmitting ? 'Идет загрузка...' : 'Добавить книгу'}</Button>
      </form>
    </>
  );
};

export default NewBook;

const Field = ({ errors, register, label, type, className, defaultValue, ...inputProps }) => {
  const Component = type === 'textarea' ? 'textarea' : 'input';
  return (
    <div>
      <label className="block mt-1" htmlFor={inputProps.name}>{label}</label>
      <Component
        className={cx('border border-gray-500 rounded w-full md:w-1/2', inputProps.className)}
        ref={register}
        type={type}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {errors && errors[inputProps.name] && <span className="text-red-600"> {errors[inputProps.name].message}</span>}
    </div>
  );
};

const Authors = ({ authors, register, errors }) => (
  <div className="mt-2">
    <select id="selectAuthor" className="border rounded" ref={register} name="Authors">
      <option value="">Выберите автора</option>
      {authors && authors.map(a => <option value={a.Id} key={a.Id}>{a.Name}</option>)}
    </select>
    {errors.Authors && <span className="text-red-600"> {errors.Authors.message}</span>}
  </div>
);
