import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import ShopPage from './Pages/ShopPage';
import DashboardPage from './Pages/DashboardPage';
import Overview from './Components/Overview';
import Products from './Components/Products';
import Orders from './Components/Orders';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/dashboard/overview" element={<Overview />} />
                <Route path="/dashboard/products" element={<Products />} />
                <Route path="/dashboard/orders" element={<Orders />} />
        </Routes>
    </BrowserRouter>
  );
};


export default App;