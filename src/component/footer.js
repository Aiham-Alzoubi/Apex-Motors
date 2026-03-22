import { Link } from "react-router-dom";
import "../style/footer.css";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "All Cars",        to: "/all-cars" },
      { label: "About Us",        to: "/about" },
      { label: "Services",        to: "/services" },
      { label: "Contact Us",      to: "/contact" },
      { label: "Rental Prices",   to: "/all-cars" },
      { label: "Privacy Policy",  to: "/privacy" },
      { label: "Rental Policy",   to: "/policy" },
    ],
  },
  {
    heading: "Car Types",
    links: [
      { label: "Luxury",          to: "/all-cars" },
      { label: "Sports",          to: "/all-cars" },
      { label: "SUV",             to: "/all-cars" },
      { label: "Economy",         to: "/all-cars" },
      { label: "Exotic",          to: "/all-cars" },
      { label: "Convertible",     to: "/all-cars" },
      { label: "Weekly Rental",   to: "/all-cars" },
      { label: "Monthly Rental",  to: "/all-cars" },
    ],
  },
  {
    heading: "Brands",
    links: [
      { label: "Ferrari",         to: "/brand/ferrari" },
      { label: "Lamborghini",     to: "/brand/lamborghini" },
      { label: "Rolls-Royce",     to: "/brand/rolls-royce" },
      { label: "Porsche",         to: "/brand/porsche" },
      { label: "McLaren",         to: "/brand/mclaren" },
      { label: "Mercedes",        to: "/brand/mercedes" },
      { label: "BMW",             to: "/brand/bmw" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "Dubai Airport",   to: "/contact" },
      { label: "JBR",             to: "/contact" },
      { label: "Business Bay",    to: "/contact" },
      { label: "Palm Jumeirah",   to: "/contact" },
      { label: "Al Quoz",         to: "/contact" },
      { label: "Al Barsha",       to: "/contact" },
      { label: "Deira",           to: "/contact" },
      { label: "Bur Dubai",       to: "/contact" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/aiham_alzoub3i/" },
  { label: "WhatsApp", href: "https://wa.me/+971581073598" },
  { label: "Facebook", href: "https://web.facebook.com/aiham.alzoubi.215477" },
  { label: "YouTube", href: "https://youtube.com/feed/you" },
];

function Footer() {
  return (
    <footer className="footer">

      {/* ── TOP BAND ── */}
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Apex Motors</Link>
          <p className="footer-tagline">
            Dubai's premier luxury & sports car rental.<br />
            Available 24/7 — anywhere in the city.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="footer-columns">
          {columns.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTACT STRIP ── */}
      <div className="footer-contact-strip">
        <a href="tel:+962 79 846 7740" className="footer-contact-item">✆ +962 79 846 7740</a>
        <a href="ayhamalzoubi16@gmail.com" className="footer-contact-item">✉ ayhamalzoubi16@gmail.com</a>
        <span className="footer-contact-item">◍ Al Quoz Industrial, Dubai, UAE</span>
        <span className="footer-contact-item">◷ 24 / 7 Service</span>
      </div>

      {/* ── BOTTOM ── */}
      <div className="footer-bottom">
        <span>© 2026 Apex Motors. All Rights Reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/policy">Rental Policy</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;