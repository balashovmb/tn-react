import React from 'react';
import { useFieldArray } from 'react-hook-form';

import Button from '../common/Button';
import OldValuesOfSelect from './OldValuesOfSelect';

const MultipleSelect = (
  { allValues, register, errors, propToShow, label, control, oldValues, ...inputProps }
) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: inputProps.name,
  });

  return (
    <div className="">
      {oldValues
      && (
      <OldValuesOfSelect
        register={register}
        propToShow={propToShow}
        fieldsLength={fields.length}
        name={inputProps.name}
        oldValues={oldValues}
        label={label}
      />
      )}
      {fields.map((field, index) => (
        <div key={field.id} className="mt-2">
          <select className="border rounded bg-primary" name={`${inputProps.name}[${index}].value`} ref={register()}>
            <option value="">Выберите {label}</option>
            {allValues && allValues.map(v => <option value={v.Id} key={v.Id}>{v[propToShow]}</option>)}
          </select>
          <Button className="p-0" onClick={(e) => { e.preventDefault(); remove(index); }}>Удалить {label}</Button>
        </div>
      ))}

      <Button className="p-0 mt-2" onClick={(e) => { e.preventDefault(); append({}); }}>Добавить {label}</Button>
      {errors[inputProps.name] && <span className="text-red-600"> {errors[inputProps.name].message}</span>}

    </div>
  );
};

export default MultipleSelect;
