import './App.css';

import React from 'react';
import Count from './components/Count';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        {/* <Count /> */}
      </header>
    </div>
  );
};

export default App;
