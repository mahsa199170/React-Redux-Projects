import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from '../countSlice';

const Count = () => {
  //   const [count, setCount] = useState(0);

  const count = selectCount(count);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(ADD_BY_ONE);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      {count}
      <div>
        <button style={{ margin: 10 }} onClick={handleAdd}>
          Add
        </button>
        <button style={{ marginRight: 10 }} onClick={handleSubtract}>
          Subtract
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Count;
