import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import MovieDetails from './components/movieDetails/MovieDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
