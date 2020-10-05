import React from 'react';
import cx from 'classnames';

const Field = ({ errors, register, label, type, className, defaultValue, ...inputProps }) => {
  const Component = type === 'textarea' ? 'textarea' : 'input';
  return (
    <div>
      <label className="block mt-1 font-bold" htmlFor={inputProps.name}>{label}</label>
      <Component
        className={cx('border border-gray-500 rounded w-full md:w-1/2 bg-primary', inputProps.className)}
        ref={register}
        type={type}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {errors && errors[inputProps.name] && <span className="text-red-600"> {errors[inputProps.name].message}</span>}
    </div>
  );
};

export default Field;
