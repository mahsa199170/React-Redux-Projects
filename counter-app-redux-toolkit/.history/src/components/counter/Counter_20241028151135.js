import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  countSelector,
  DECREMENT_BY_ONE,
  INCREMENET_BY_ONE,
  INCREMENT_BY_AN_AMOUNT,
  RESET_AMOUNT,
} from '../../slice/counterSlice';

const Counter = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const number = useSelector(countSelector);

  const dispatch = useDispatch();

  const addValue = Number(inputNumber) || 0;

  const handleIncrement = () => {
    dispatch(INCREMENET_BY_ONE());
  };
  const handleDecrement = () => {
    dispatch(DECREMENT_BY_ONE());
  };

  const addAmount = () => {
    dispatch(INCREMENT_BY_AN_AMOUNT(inputNumber));
    setInputNumber(0);
  };

  const handleReset = () => {
    setInputNumber(0);
    dispatch(RESET_AMOUNT());
  };

  return (
    <section>
      <p>{number}</p>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the amount"
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={addAmount}>Add Amount</button>
        <button onClick={handleReset}>Reset </button>
      </div>
    </section>
  );
};

export default Counter;
