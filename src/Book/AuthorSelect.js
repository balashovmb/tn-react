import React from 'react';
import MultipleSelect from '../common/MultipleSelect';

const AuthorSelect = ({ allAuthors, register, errors, control, bookAuthors }) => (
  <MultipleSelect errors={errors} allValues={allAuthors} name="Authors" register={register} propToShow="Name" label="автора" control={control} oldValues={bookAuthors} />
);

export default AuthorSelect;
