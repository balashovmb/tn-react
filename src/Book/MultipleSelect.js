import React, { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';

import Button from '../common/Button';

const MultipleSelect = ({ values, register, errors, propToShow, label, control, valuesOfCurrentObj, ...inputProps }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: inputProps.name,
  });

  const [valuesToExlude, setValuesToExlude] = useState([]);

  const oldValuesToSave = () => (
    valuesOfCurrentObj.filter((val) => !valuesToExlude.includes(val.Id))
  );

  return (
    <div className="mt-2">

      {fields.map((field, index) => (
        <div key={field.id}>
          <select className="border rounded bg-primary" name={`${inputProps.name}[${index}].value`} ref={register()}>
            <option value="">Выберите {label}</option>
            {values && values.map(v => <option value={v.Id} key={v.Id}>{v[propToShow]}</option>)}
          </select>
          <Button onClick={(e) => { e.preventDefault(); remove(index); }}>Удалить {label}</Button>
        </div>
      ))}

      <Button onClick={(e) => { e.preventDefault(); append({}); }}>Добавить автора</Button>
      {errors[inputProps.name] && <span className="text-red-600"> {errors[inputProps.name].message}</span>}
      {oldValuesToSave().map((val, index) => (
        <div key={val.Id}>
          <span>{val.Name} </span>
          <input ref={register} name={`${inputProps.name}[${fields.length + index + 1}].value`} defaultValue={val.Id} hidden/>
          <Button onClick={(e) => { e.preventDefault(); setValuesToExlude(() => [...valuesToExlude, val.Id]) }}>Удалить {label}</Button>
        </div>
      ))}
    </div>
  );
};

export default MultipleSelect;
