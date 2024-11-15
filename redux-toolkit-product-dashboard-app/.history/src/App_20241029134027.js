import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
      </header>
    </div>
  );
}

export default App;
