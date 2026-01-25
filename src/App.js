import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import About from './component/about';
import Allcars from './component/all-cars';
import Rentalprices from './component/rental-prices';
import Services from './component/services';
import Brand from './component/brand';
import Contact from './component/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <Navbar/>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allcars" element={<Allcars />} />
        <Route path="/Rental-Prices" element={<Rentalprices />} />
        <Route path="/Rent by Brand" element={<Brand />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
