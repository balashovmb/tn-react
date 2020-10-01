import React, { useState } from 'react';

import Button from '../common/Button';

const OldValuesOfSelect = ({ register, propToShow, fieldsLength, name, oldValues, label }) => {
  const [valuesToExlude, setValuesToExlude] = useState([]);

  const oldValuesToSave = () => (
    oldValues.filter((val) => !valuesToExlude.includes(val.Id))
  );
  const excludeValue = (valueId) => {
    setValuesToExlude(() => [...valuesToExlude, valueId]);
  };

  return (oldValuesToSave().map((val, index) => (
    <div key={val.Id}>
      <span>{val[propToShow]} </span>
      <input ref={register} name={`${name}[${fieldsLength + index + 1}].value`} defaultValue={val.Id} hidden />
      <Button onClick={() => excludeValue(val.Id)}>Удалить {label}</Button>
    </div>
  )));
};

export default OldValuesOfSelect;
