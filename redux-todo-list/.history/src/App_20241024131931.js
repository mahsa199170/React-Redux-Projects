import './App.css';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form>
          <input
            type="text"
            placeholder="Enter Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: 'none',
              fontSize: 20,
            }}
          />
          <button type="submit" className="--btn">
            Go
          </button>
        </form>
      </header>
    </div>
  );
};

export default App;
