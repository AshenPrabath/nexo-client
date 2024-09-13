import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import ShopPage from './Pages/ShopPage';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </BrowserRouter>
  );
};


export default App;