import { Link } from "react-router-dom";
import "../style/services.css";

const services = [
  {
    icon: "◈",
    title: "Luxury & Sports Cars",
    desc: "Latest models of Ferrari, Lamborghini, Rolls-Royce and more — always fresh inventory.",
  },
  {
    icon: "◎",
    title: "Free Delivery",
    desc: "We deliver the car to your hotel, home, or any location across Dubai — no extra charge.",
  },
  {
    icon: "◷",
    title: "24/7 Support",
    desc: "Our team is available around the clock via phone, WhatsApp, or live chat.",
  },
  {
    icon: "◉",
    title: "Insurance Included",
    desc: "Every rental comes with full comprehensive insurance for complete peace of mind.",
  },
  {
    icon: "◐",
    title: "Airport Pickup",
    desc: "Land and drive. We meet you at Dubai International or Al Maktoum Airport.",
  },
  {
    icon: "◍",
    title: "Easy Payment",
    desc: "Pay by card, cash, or bank transfer. No hidden fees. Transparent pricing always.",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Car",
    desc: "Browse our full fleet and pick the model that suits your style and budget.",
  },
  {
    num: "02",
    title: "Contact Us",
    desc: "Reach us via WhatsApp, phone, or our booking form — we respond within minutes.",
  },
  {
    num: "03",
    title: "Confirm Booking",
    desc: "We confirm availability, agree on dates, and handle all paperwork digitally.",
  },
  {
    num: "04",
    title: "Enjoy Driving",
    desc: "The car is delivered to you. Keys in hand — the road is yours.",
  },
];

function Services() {
  return (
    <div className="sv-page">

      {/* ── HERO ── */}
      <section className="sv-hero">
        <div className="sv-hero-overlay" />
        <div className="sv-hero-content">
          <span className="sv-eyebrow">What We Offer</span>
          <h1>Our <span className="gold">Services</span></h1>
          <p>Premium car rental services designed for your comfort</p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sv-section">
        <div className="sv-section-inner">
          <span className="sv-tag">The Full Package</span>
          <h2>What We Offer</h2>
          <p className="sv-sub">
            Everything you need for a seamless luxury car rental experience in Dubai.
          </p>
          <div className="sv-grid">
            {services.map((s) => (
              <div className="sv-card" key={s.title}>
                <span className="sv-card-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sv-steps-section">
        <div className="sv-steps-overlay" />
        <div className="sv-steps-inner">
          <span className="sv-tag sv-tag-light">Simple Process</span>
          <h2>How It Works</h2>
          <div className="sv-steps">
            {steps.map((step, i) => (
              <div className="sv-step" key={step.num}>
                <div className="sv-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className="sv-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sv-cta">
        <div className="sv-cta-overlay" />
        <div className="sv-cta-content">
          <span className="sv-eyebrow">Ready?</span>
          <h2>Start Your Experience</h2>
          <p>Hundreds of luxury cars. One click away.</p>
          <div className="sv-cta-actions">
            <Link to="/all-cars" className="sv-btn sv-btn-primary">Browse All Cars</Link>
            <Link to="/contact" className="sv-btn sv-btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;