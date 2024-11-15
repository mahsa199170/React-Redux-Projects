import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <div>
        <button style={{ margin: 10 }}>Add</button>
        <button style={{ margin: 10 }}>Subtract</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Count;
