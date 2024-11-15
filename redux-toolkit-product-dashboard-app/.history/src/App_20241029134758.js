import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
// import { createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <header className="App-header">
        <Products />
      </header>
    </div>
  );
}

export default App;
