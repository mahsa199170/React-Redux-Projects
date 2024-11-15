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
  const number = useSelector(countSelector);

  return (
    <section>
      <p>{number}</p>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button>-</button>
      </div>
      <div>
        <input type="text" placeholder="Enter the amount" />
      </div>
      <div>
        <button>Add Amount</button>
        <button>Reset </button>
      </div>
    </section>
  );
};

export default Counter;
