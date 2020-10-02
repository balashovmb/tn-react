import React from 'react';

import { useHistory } from 'react-router';

import { createBook } from '../common/httpClient';
import { bookPath } from '../helpers/routes';
import { uploadFile } from '../common/filestack';

import BookForm from '../Book/BookForm';
import formFieldsToObj from '../Book/formFieldsToObj';

const NewBook = () => {
  const history = useHistory();

  const onSubmit = async ({ Cover, ...fields }) => {
    console.log('cover',Cover)
    const formData = new FormData();
    // formData.append('fileUpload', Cover[0]);
    // const uploadResult = await uploadFile(formData);
    // const coverUrl = (uploadResult && uploadResult.url) ? uploadResult.url : '';
    console.info(formFieldsToObj(fields))
    const res = await createBook(formFieldsToObj(fields))//, coverUrl));

    const newBook = res.records[0];
    const redirectURI = bookPath(newBook.id);

    history.push(redirectURI);
  };
  return (
    <>
      <h4 className="font-bold text-xl">Новая книга</h4>
      <BookForm onSubmit={onSubmit} schemaType="new" />
    </>
  );
};

export default NewBook;
