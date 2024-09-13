import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
  );
};


export default App;

{/* <div className="min-h-screen bg-gray-50">
      <LandingPage />
    </div> */}
