import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, filterByPrice } from "../../../Store";
import "./Slider.css"; // This is for our custom styles
const Slider = () => {
  const minLimit = useSelector<RootState, number>(
    (state) => state.products.minPriceLimit
  );
  const maxLimit = useSelector<RootState, number>(
    (state) => state.products.maxPriceLimit
  );
  const [minValue, setMinValue] = useState(minLimit);
  const [maxValue, setMaxValue] = useState(maxLimit);
  const dispatcher = useDispatch();

  useEffect(() => {
    setMaxValue(maxLimit);
    setMinValue(minLimit);
  }, [maxLimit, minLimit]);

  // Handle change for the min handle
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value < maxValue) {
      setMinValue(value);
      //implement a debouncer and call the api
      dispatcher(filterByPrice({ max: maxValue, min: value }));
    }
  };

  // Handle change for the max handle
  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value > minValue) {
      setMaxValue(value);
      //implement a debouncer and call the api
      dispatcher(filterByPrice({ max: value, min: minValue }));
    }
  };

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className="slider-thumb slider-thumb-left"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider-thumb slider-thumb-right"
        />
        <div className="slider-track"></div>
        <div
          className="slider-range"
          style={{
            left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
            right: `${
              100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100
            }%`,
          }}
        ></div>
      </div>
      <div className="slider-values">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </>
  );
};

export default Slider;
