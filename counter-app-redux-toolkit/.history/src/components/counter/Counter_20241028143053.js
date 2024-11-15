import React from 'react';

const Counter = () => {
  return (
    <section>
      <p>8</p>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
      <div>
        <input type="text" placeholder="Enter the amount" />
      </div>
    </section>
  );
};

export default Counter;
