import React from 'react';
import Select from './Select';

const AuthorSelect = ({ authors, register, errors }) => (
  <Select errors={errors} values={authors} name="Authors" register={register} propToShow="Name" label="автора" />
);

export default AuthorSelect;
