import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import ShopPage from './Pages/ShopPage';
import DashboardPage from './Pages/DashboardPage';
import Overview from './Components/Overview';
import Products from './Components/Products';
import Orders from './Components/Orders';
import CartPage from './Pages/CartPage';
import { CartProvider } from './Context/CartContext';
import CheckoutPage from './Pages/CheckoutPage';
import ConfirmationPage from './Pages/ConfirmationPage';
import SuccessPage from './Pages/SuccessPage';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation/:customerId" element={<ConfirmationPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/orders" element={<Orders />} />

        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
};


export default App;