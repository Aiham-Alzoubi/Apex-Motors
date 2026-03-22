import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css";

const brands = [
  { name: "Ferrari",     slug: "ferrari" },
  { name: "Lamborghini", slug: "lamborghini" },
  { name: "Porsche",     slug: "porsche" },
  { name: "McLaren",     slug: "mclaren" },
  { name: "Rolls-Royce", slug: "rolls-royce" },
  { name: "BMW",         slug: "bmw" },
  { name: "Mercedes",    slug: "mercedes" },
];

function Navbar() {
  const [isOpen,        setIsOpen]        = useState(false);
  const [isDropdown,    setIsDropdown]    = useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdown(false);
  }, [location]);

  // Close dropdown on outside click (mobile fix)
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setIsDropdown(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeAll}>
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#c9a84c"/>
          <text x="16" y="22" textAnchor="middle"
            fill="#000" fontSize="11" fontWeight="800"
            fontFamily="Segoe UI, system-ui, sans-serif">AM</text>
        </svg>
        <span>Apex Motors</span>
      </Link>

      {/* Mobile toggle */}
      <button
        className="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/"        onClick={closeAll}>Home</Link></li>
        <li><Link to="/about"   onClick={closeAll}>About</Link></li>
        <li><Link to="/all-cars" onClick={closeAll}>All Cars</Link></li>

        {/* Dropdown */}
        <li className="dropdown" ref={dropdownRef}>
          <button
            className="dropdown-toggle"
            onClick={() => setIsDropdown(!isDropdown)}
            aria-expanded={isDropdown}
          >
            Brand <span className={`chevron ${isDropdown ? "up" : ""}`}>▾</span>
          </button>

          <ul className={`dropdown-menu ${isDropdown ? "open" : ""}`}>
            <li className="dropdown-header">
              <Link to="/brand" onClick={closeAll}>View All Brands →</Link>
            </li>
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link to={`/brand/${brand.slug}`} onClick={closeAll}>
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li><Link to="/services" onClick={closeAll}>Services</Link></li>
        <li><Link to="/contact"  onClick={closeAll}>Contact</Link></li>

        {/* Buttons inside nav on mobile */}
        <li className="nav-buttons-mobile">
          <button className="btn btn-login">Log in</button>
          <button className="btn btn-signup">Sign up</button>
        </li>
      </ul>

      {/* Buttons — desktop */}
      <div className="nav-buttons">
        <button className="btn btn-login">Log in</button>
        <button className="btn btn-signup">Sign up</button>
      </div>

    </nav>
  );
}

export default Navbar;