import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
// import { createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/cart/Cart';
import NavbarPanel from './components/navbarPanel/NavbarPanel';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavbarPanel />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product-details" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
