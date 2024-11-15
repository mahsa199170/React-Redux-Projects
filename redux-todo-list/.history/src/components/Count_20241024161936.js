import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {};

  const handleSubtract = () => {};

  const handleReset = () => {};

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
