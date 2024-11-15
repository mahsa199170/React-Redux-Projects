import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
