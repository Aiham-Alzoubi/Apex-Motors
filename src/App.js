import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import About from './component/about';
import AllCars from './component/all-cars';
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
        <Route path="/About" element={<About />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
