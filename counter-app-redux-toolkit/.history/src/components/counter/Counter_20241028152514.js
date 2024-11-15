import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  countSelector,
  DECREMENT_BY_ONE,
  INCREMENET_BY_ONE,
  INCREMENT_BY_AN_AMOUNT,
  RESET_AMOUNT,
} from '../../slice/counterSlice';
import './Counter.scss';

const Counter = () => {
  const [inputNumber, setInputNumber] = useState('');
  const number = useSelector(countSelector);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(INCREMENET_BY_ONE());
  };
  const handleDecrement = () => {
    dispatch(DECREMENT_BY_ONE());
  };

  const addAmount = () => {
    dispatch(INCREMENT_BY_AN_AMOUNT(Number(inputNumber) || 0));
    setInputNumber('');
  };

  const handleReset = () => {
    setInputNumber('');
    dispatch(RESET_AMOUNT());
  };

  return (
    <section>
      <h1 style={'color: red'}>Counter App</h1>
      <p>{number}</p>
      <div>
        <button className="btn" onClick={handleIncrement}>
          +
        </button>
        <button className="btn" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the amount"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-dowm" onClick={addAmount}>
          Add Amount
        </button>
        <button className="btn btn-dowm" onClick={handleReset}>
          Reset{' '}
        </button>
      </div>
    </section>
  );
};

export default Counter;
