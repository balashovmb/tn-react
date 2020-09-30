import React from 'react';
import { useFieldArray } from 'react-hook-form';

import Button from '../common/Button';

const Select = ({ values, register, errors, propToShow, label, control, valuesOfCurrentObj, ...inputProps }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: inputProps.name,
  });
  const cvl = valuesOfCurrentObj.length;
  return (
    <div className="mt-2">

      {fields.map(({ id }, index) => (
        <div key={id}>
          <select className="border rounded bg-primary" name={`${inputProps.name}[${index}].value`} ref={register}>
            <option value="">Выберите {label}</option>
            {values && values.map(v => <option value={v.Id} key={v.Id}>{v[propToShow]}</option>)}
          </select>
          <Button onClick={(e) => { e.preventDefault(); remove(index); }}>Удалить автора</Button>
        </div>
      ))}
      {}
      <Button onClick={(e) => { e.preventDefault(); append({}); }}>Добавить автора</Button>
      {errors[inputProps.name] && <span className="text-red-600"> {errors[inputProps.name].message}</span>}
    </div>
  );
};

export default Select;
