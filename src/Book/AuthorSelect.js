import React from 'react';
import MultipleSelect from './MultipleSelect';

const AuthorSelect = ({ allAuthors, register, errors, control, bookAuthors }) => (
  <MultipleSelect errors={errors} values={allAuthors} name="Authors" register={register} propToShow="Name" label="автора" control={control} valuesOfCurrentObj={bookAuthors} />
);

export default AuthorSelect;
