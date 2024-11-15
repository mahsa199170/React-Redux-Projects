import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import MovieDetails from './components/movieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-details" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
