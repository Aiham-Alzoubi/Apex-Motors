import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/brand.css";

const brands = [
  {
    name: "Ferrari",
    slug: "ferrari",
    tagline: "The Prancing Horse",
    origin: "Italy · 1947",
    accentColor: "#E8002D",
    cars: 8,
    img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
  },
  {
    name: "Lamborghini",
    slug: "lamborghini",
    tagline: "Expect the Unexpected",
    origin: "Italy · 1963",
    accentColor: "#F5A623",
    cars: 6,
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
  {
    name: "Porsche",
    slug: "porsche",
    tagline: "There Is No Substitute",
    origin: "Germany · 1931",
    accentColor: "#A8B5C1",
    cars: 10,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    name: "McLaren",
    slug: "mclaren",
    tagline: "Designed to Thrill",
    origin: "UK · 1963",
    accentColor: "#FF8000",
    cars: 5,
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80",
  },
  {
    name: "Rolls-Royce",
    slug: "rolls-royce",
    tagline: "Pinnacle of Luxury",
    origin: "UK · 1906",
    accentColor: "#C9A84C",
    cars: 4,
    img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
  },
  {
    name: "BMW",
    slug: "bmw",
    tagline: "The Ultimate Driving Machine",
    origin: "Germany · 1916",
    accentColor: "#0066CC",
    cars: 12,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
  },
  {
    name: "Mercedes",
    slug: "mercedes",
    tagline: "The Best or Nothing",
    origin: "Germany · 1926",
    accentColor: "#CCCCCC",
    cars: 11,
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  },
];

function Brand() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("br-visible");
        }),
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="br-page">

      {/* ── HERO ── */}
      <section className="br-hero">
        <div className="br-hero-overlay" />
        <div className="br-deco-lines">
          {[...Array(6)].map((_, i) => <div key={i} className="br-deco-line" />)}
        </div>
        <div className="br-hero-content">
          <span className="br-eyebrow">Dubai's Finest Fleet</span>
          <h1 className="br-hero-title">
            Choose Your <br />
            <span className="br-gold">Legend</span>
          </h1>
          <p className="br-hero-sub">
            {brands.length} iconic manufacturers. One city. Unlimited possibilities.
          </p>
          <div className="br-hero-scroll">
            <span>Explore brands</span>
            <div className="br-scroll-line" />
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="br-section">
        <div className="br-section-header">
          <p className="br-count">{brands.length} Brands Available</p>
          <h2>Our Manufacturers</h2>
        </div>

        <div className="br-grid">
          {brands.map((brand, i) => (
            <Link
              to={`/brand/${brand.slug}`}
              key={brand.slug}
              className="br-card"
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ "--accent": brand.accentColor, "--delay": `${i * 90}ms` }}
            >
              <div className="br-card-img-wrap">
                <img src={brand.img} alt={brand.name} className="br-card-img" />
                <div className="br-card-img-overlay" />
              </div>

              <div className="br-card-bar" />

              <div className="br-card-body">
                <div className="br-card-meta">
                  <span className="br-card-origin">{brand.origin}</span>
                  <span className="br-card-count">{brand.cars} cars</span>
                </div>
                <h3 className="br-card-name">{brand.name}</h3>
                <p className="br-card-tagline">"{brand.tagline}"</p>
                <div className="br-card-footer">
                  <span className="br-card-cta">View Fleet</span>
                  <span className="br-card-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="br-cta">
        <div className="br-cta-inner">
          <h2>Can't decide?</h2>
          <p>Browse our full fleet and filter by price, brand, or category.</p>
          <Link to="/all-cars" className="br-cta-btn">View All Cars</Link>
        </div>
      </section>

    </div>
  );
}

export default Brand;