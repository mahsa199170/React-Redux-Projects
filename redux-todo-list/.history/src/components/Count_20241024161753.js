import React, { useState } from 'react';

const Count = () => {
  const [Count, setCount] = useState(0);
  return (
    <div>
      {Count}
      <div>
        <button style={{ margin: 10 }}>Add</button>
        <button style={{ margin: 10 }}>Subtract</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Count;
