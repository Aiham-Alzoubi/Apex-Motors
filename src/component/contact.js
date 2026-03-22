import { useState } from "react";
import "../style/contact.css";

const carOptions = [
  "Select a Car Type",
  "Luxury Car",
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "Rolls-Royce",
  "Mercedes-Benz",
  "BMW",
  "Sports Car",
  "SUV",
];

const countryCodes = [
  { code: "+962", label: "JO" },
  { code: "+971", label: "UAE" },
  { code: "+966", label: "KSA" },
  { code: "+974", label: "QA" },
  { code: "+973", label: "BH" },
  { code: "+963", label: "SYR" },
  { code: "+964", label: "IQ" },
  { code: "+90",  label: "TUR" },
];

const badges = [
  "Fast Delivery",
  "No Deposit",
  "24/7 Service",
  "Roadside Assistance",
  "12,000+ Customers",
  "Lowest Prices",
];

const initForm = {
  name: "", email: "", car: "", countryCode: "+962",
  phone: "", dateFrom: "", dateTo: ""
};

function Contact() {
  const [form, setForm]       = useState(initForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend / EmailJS
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm(initForm);
  };

  return (
    <div className="ct-page">

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-overlay" />
        <div className="ct-hero-content">
          <span className="ct-eyebrow">Get in Touch</span>
          <h1>Contact <span className="gold">Us</span></h1>
          <p>We're available 24/7 — reach us any way you prefer</p>
        </div>
      </section>

      {/* ── GRID ── */}
      <div className="ct-grid">

        {/* ── INFO ── */}
        <div className="ct-card">
          <span className="ct-card-tag">Reach Us</span>
          <h2>Contact Info</h2>

          <div className="ct-info-list">
            <div className="ct-info-item">
              <div className="ct-info-icon">✉</div>
              <div>
                <p className="ct-info-label">Email</p>
                <a href="ayhamalzoubi16@gmail.com" className="ct-info-value">
                  ayhamalzoubi16@gmail.com

                </a>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-info-icon">✆</div>
              <div>
                <p className="ct-info-label">Phone</p>
                <a href="+962 79 846 7740" className="ct-info-value">+962 79 846 7740 (JO)</a>
                <a href="+962 77 991 9650" className="ct-info-value">+971 58 107 3598 (UA)</a>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-info-icon">◎</div>
              <div>
                <p className="ct-info-label">WhatsApp</p>
                <a
                  href="https://wa.me/+971581073598"
                  target="_blank"
                  rel="noreferrer"
                  className="ct-info-value ct-wa"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-info-icon">◍</div>
              <div>
                <p className="ct-info-label">Address</p>
                <p className="ct-info-value">
                  Al-Rasaas Rd, Al Quoz Industrial 1,<br />Dubai, UAE
                </p>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-info-icon">◷</div>
              <div>
                <p className="ct-info-label">Working Hours</p>
                <p className="ct-info-value">24 / 7 — Always Open</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="ct-badges">
            {badges.map((b) => (
              <span key={b} className="ct-badge">{b}</span>
            ))}
          </div>
        </div>

        {/* ── FORM ── */}
        <div className="ct-card">
          <span className="ct-card-tag">Book a Car</span>
          <h2>Send a Request</h2>

          {submitted && (
            <div className="ct-success">
              ✓ Request sent! We'll contact you within 24 hours.
            </div>
          )}

          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-field">
              <label>Full Name</label>
              <input
                name="name" value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
              />
            </div>

            <div className="ct-field">
              <label>Email Address</label>
              <input
                type="email" name="email" value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="ct-field">
              <label>Car Type</label>
              <select name="car" value={form.car} onChange={handleChange} required>
                {carOptions.map((o) => (
                  <option key={o} value={o === "Select a Car Type" ? "" : o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="ct-field">
              <label>Phone Number</label>
              <div className="ct-phone-row">
                <select
                  name="countryCode" value={form.countryCode}
                  onChange={handleChange} className="ct-code"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} {c.label}
                    </option>
                  ))}
                </select>
                <input
                  name="phone" value={form.phone}
                  onChange={handleChange}
                  placeholder="77 948 4761"
                  required
                />
              </div>
            </div>

            <div className="ct-field">
              <label>Rental Period</label>
              <div className="ct-date-row">
                <input
                  type="date" name="dateFrom" value={form.dateFrom}
                  onChange={handleChange} required
                />
                <input
                  type="date" name="dateTo" value={form.dateTo}
                  onChange={handleChange} required
                />
              </div>
            </div>

            <button type="submit" className="ct-submit">
              Book Now
            </button>
          </form>
        </div>

        {/* ── MAP ── */}
        <div className="ct-card ct-map-card">
          <span className="ct-card-tag">Location</span>
          <h2>Find Us</h2>
          <div className="ct-map-wrap">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101742.1235113459!2d55.19813398797194!3d25.105733632988763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834f43fffff%3A0x61d8e53aea951295!2sMasterkey%20Luxury%20Car%20Rental%20Dubai!5e1!3m2!1sen!2sjo!4v1771191458009!5m2!1sen!2sjo"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
export default Contact;