import React from 'react';

const Select = ({ values, register, errors, propToShow, label, ...inputProps }) => (
  <div className="mt-2">
    <select className="border rounded" ref={register} name={inputProps.name}>
      <option value="">Выберите {label}</option>
      {values && values.map(v => <option value={v.Id} key={v.Id}>{v[propToShow]}</option>)}
    </select>
    {errors[inputProps.name] && <span className="text-red-600"> {errors[inputProps.name].message}</span>}
  </div>
);

export default Select;
