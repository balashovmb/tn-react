import React from 'react';
import { useHistory } from 'react-router';

import useBooks from '../hooks/useBooks';
import BookForm from '../Book/BookForm';
import formFieldsToObj from '../Book/formFieldsToObj';
import { updateBook } from '../common/httpClient';
import { bookPath } from '../helpers/routes';
import { uploadFile } from '../common/filestack';

const EditBook = ({ match: { params } }) => {
  const history = useHistory();

  const book = useBooks([params.id]);

  const onSubmit = async ({ Cover, ...fields }) => {
    console.log('fields',fields)
    const formData = new FormData();
    formData.append('fileUpload', Cover[0]);
    const uploadResult = await uploadFile(formData);
    const coverUrl = (uploadResult && uploadResult.url) ? uploadResult.url : '';

    await updateBook(formFieldsToObj(fields, coverUrl), params.id);

    const redirectURI = bookPath(params.id);

    history.push(redirectURI);
  };

  return (
    !book
      ? <div className="ml-4">Идет загрузка...</div>
      : <BookForm onSubmit={onSubmit} schemaType="edit" book={book} />
  );
};

export default EditBook;
