import React, { useRef, useEffect } from 'react';

const PriceInput = (props) => {
  const {
    minimalPrice, label, commission, price, setPrice, focus
  } = props;
  const maxPriceOnSlider = minimalPrice * 20 * (1 - commission);
  const minPriceOnSlider = minimalPrice * (1 - commission);
  const priceAfterCommission = (price * (1 - commission)).toFixed();
  const priceRef = useRef();

  useEffect(() => {
    if (focus) { priceRef.current.focus(); }
  }, []);

  return (
    <p>
      <span> {label} </span>
      <input className="bg-gray-200 w-12 hover:bg-white focus:bg-white m-2" value={priceAfterCommission} onChange={setPrice} data-commission={commission} ref={priceRef} />
      <input className="w-1/3" type="range" step="1" max={maxPriceOnSlider} value={priceAfterCommission} min={minPriceOnSlider} data-commission={commission} onChange={setPrice} />
    </p>
  );
};

export default PriceInput;
