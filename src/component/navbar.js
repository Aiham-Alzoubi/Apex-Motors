import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">RENT A CAR</h2>

      {/* ☰ أيقونة الموبايل */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* روابط القائمة */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/Allcars" onClick={() => setIsOpen(false)}>All Cars</Link></li>
        <li><Link to="/Rental-Prices" onClick={() => setIsOpen(false)}>Rental-Prices</Link></li>

        {/* قائمة منسدلة */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/Brand" className="dropdown-toggle">Rent by Brand ▾</Link>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/Ferrari">Ferrari</Link></li>
              <li><Link to="/Lamborghini">Lamborghini</Link></li>
              <li><Link to="/Porsche">Porsche</Link></li>
              <li><Link to="/McLaren">McLaren</Link></li>
              <li><Link to="/RollsRoyce">Rolls-Royce</Link></li>
              <li><Link to="/BMW">BMW</Link></li>
              <li><Link to="/Mercedes">Mercedes</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/Services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      <div className="nav-buttons">
        <button className="btn login">Log in</button>
        <button className="btn signup">Sign up</button>
      </div>
    </nav>
  );
}
export default Navbar;
