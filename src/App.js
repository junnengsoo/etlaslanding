import './App.css';
import './styles/animations.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import HowItWorks from './pages/howItWorks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
