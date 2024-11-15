import './App.css';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form>
          <input type="text" placeholder="Enter Todo" />
          <button type="submit" className="--btn">
            Go
          </button>
        </form>
      </header>
    </div>
  );
};

export default App;
