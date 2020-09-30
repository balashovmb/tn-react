import React from 'react';
import Select from './Select';

const AuthorSelect = ({ allAuthors, register, errors, control, bookAuthors }) => (
  <Select errors={errors} values={allAuthors} name="Authors" register={register} propToShow="Name" label="автора" control={control} valuesOfCurrentObj={bookAuthors} />
);

export default AuthorSelect;
