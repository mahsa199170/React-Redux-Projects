import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
