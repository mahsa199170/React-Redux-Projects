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
  const [inputValue, setInputValue] = useState('');
  const number = useSelector(countSelector);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(INCREMENET_BY_ONE());
  };
  const handleDecrement = () => {
    dispatch(DECREMENT_BY_ONE());
  };

  const addAmount = () => {
    dispatch(INCREMENT_BY_AN_AMOUNT(inputValue));
    setInputValue('');
  };

  const handleReset = () => {
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
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
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
