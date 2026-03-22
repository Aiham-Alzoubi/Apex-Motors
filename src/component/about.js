import { Link } from "react-router-dom";
import "../style/about.css";

const features = [
  { icon: "◎", title: "No Deposit",     desc: "Drive away with zero upfront deposit required." },
  { icon: "◷", title: "24/7 Support",   desc: "Our team is available around the clock for you." },
  { icon: "◈", title: "Latest Models",  desc: "Always fresh inventory with the newest releases." },
  { icon: "◉", title: "Fast Delivery",  desc: "Car delivered to your door within hours." },
  { icon: "◐", title: "Best Prices",    desc: "Transparent pricing — no hidden fees, ever." },
];

const brands = [
  { name: "Ferrari",      slug: "ferrari" },
  { name: "Lamborghini",  slug: "lamborghini" },
  { name: "Porsche",      slug: "porsche" },
  { name: "Rolls-Royce",  slug: "rolls-royce" },
  { name: "BMW",          slug: "bmw" },
  { name: "Mercedes",     slug: "mercedes" },
];

const stats = [
  { value: "500+", label: "Cars in Fleet" },
  { value: "12K+", label: "Happy Clients" },
  { value: "8+",   label: "Years in Dubai" },
  { value: "24/7", label: "Support" },
];

function About() {
  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-overlay" />
        <div className="ab-hero-content">
          <span className="ab-eyebrow">Est. 2026 · Dubai, UAE</span>
          <h1>About <span className="gold">Apex Motors</span></h1>
          <p>Luxury & Sports Car Apex Motors in Dubai</p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="ab-stats">
        {stats.map((s) => (
          <div className="ab-stat" key={s.label}>
            <span className="ab-stat-value">{s.value}</span>
            <span className="ab-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="ab-section">
        <div className="ab-section-inner">
          <span className="ab-tag">Our Story</span>
          <h2>Who We Are</h2>
          <p>
            We are a premium car rental company based in the heart of Dubai, providing
            luxury, sports, and SUV vehicles to clients who expect nothing but the best.
            Since 2016, we've delivered world-class service to thousands of satisfied
            customers — from weekend thrill-seekers to business executives.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="ab-section ab-dark">
        <div className="ab-section-inner ab-mission">
          <div className="ab-mission-text">
            <span className="ab-tag">Our Purpose</span>
            <h2>Our Mission</h2>
            <p>
              To deliver unforgettable driving experiences through an exceptional fleet,
              transparent pricing, and service that goes beyond expectations.
              We believe every client deserves to feel the thrill of a superCar —
              at a price that makes sense.
            </p>
          </div>
          <div className="ab-mission-img">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
              alt="Luxury car"
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="ab-section">
        <div className="ab-section-inner">
          <span className="ab-tag">Why Us</span>
          <h2>Why Choose Us</h2>
          <div className="ab-features">
            {features.map((f) => (
              <div className="ab-feature" key={f.title}>
                <span className="ab-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR FLEET ── */}
      <section className="ab-section ab-dark">
        <div className="ab-section-inner">
          <span className="ab-tag">The Fleet</span>
          <h2>Our Brands</h2>
          <div className="ab-brands">
            {brands.map((b) => (
              <Link to={`/brand/${b.slug}`} key={b.slug} className="ab-brand-pill">
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-cta">
        <h2>Ready To Drive?</h2>
        <p>Browse our full fleet and book your dream car today.</p>
        <Link to="/all-cars" className="ab-btn">Browse All Cars</Link>
      </section>

    </div>
  );
}

export default About;