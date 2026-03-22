import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/all-cars.css";

const cars = [
  {
    id: 1,
    name: "Bentley Bentayga",
    brand: "Bentley",
    category: "SUV",
    dailyPrice: 1799,
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/07/Rent-Bentley-bentayga-Grey-in-dubai-3-1.webp",
  },
  {
    id: 2,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    category: "Luxury",
    dailyPrice: 2200,
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/04/rolls-royce-ghost-rent-dubai.webp",
  },
  {
    id: 3,
    name: "Mercedes G63 AMG",
    brand: "Mercedes",
    category: "SUV",
    dailyPrice: 1500,
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/04/rent-G-63-1.webp",
  },
  {
    id: 4,
    name: "BMW 318i M Kit",
    brand: "BMW",
    category: "Sports",
    dailyPrice: 480,
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/07/318-2048x1366-1.webp",
  },
  {
    id: 5,
    name: "Land Rover Defender",
    brand: "Land Rover",
    category: "SUV",
    dailyPrice: 849,
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/07/9fYfRn541y.webp",
  },
  {
    id: 6,
    name: "Ferrari F8 Tribute",
    brand: "Ferrari",
    category: "Sports",
    dailyPrice: 1200,
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/04/1-5.jpg",
  },
];

const categories = ["All", "Sports", "SUV", "Luxury"];

function AllCars() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch]             = useState("");

  const filtered = cars.filter((car) => {
    const matchCat    = activeFilter === "All" || car.category === activeFilter;
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="ac-page">

      {/* ── HERO ── */}
      <section className="ac-hero">
        <div className="ac-hero-overlay" />
        <div className="ac-hero-content">
          <nav className="ac-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>All Cars</span>
          </nav>
          <h1>All Cars</h1>
          <p>Choose from our full fleet of luxury & sports vehicles in Dubai</p>
        </div>
      </section>

      {/* ── CONTROLS ── */}
      <div className="ac-controls">
        <input
          type="text"
          className="ac-search"
          placeholder="Search cars…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="ac-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ac-filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="ac-grid-section">
        {filtered.length === 0 ? (
          <p className="ac-empty">No cars found. Try a different filter.</p>
        ) : (
          <div className="ac-grid">
            {filtered.map((car) => (
              <div className="ac-card" key={car.id}>

                <div className="ac-card-img-wrap">
                  <img src={car.img} alt={car.name} />
                  <span className="ac-badge">{car.category}</span>
                </div>

                <div className="ac-card-body">
                  <h2 className="ac-card-name">{car.name}</h2>
                  <p className="ac-card-note">Prices inclusive of VAT & Deposit Fee</p>

                  <div className="ac-prices">
                    <div className="ac-price-row">
                      <span className="ac-price-label">Daily</span>
                      <span className="ac-price-value">${car.dailyPrice}</span>
                      <a
                        href="https://wa.me/+971581073598"
                        target="_blank"
                        rel="noreferrer"
                        className="ac-btn ac-btn-wa"
                      >
                        WhatsApp
                      </a>
                    </div>

                    <div className="ac-price-row">
                      <span className="ac-price-label">Weekly</span>
                      <span className="ac-price-value">Ask Now</span>
                      <a href="tel:+962 798467740" className="ac-btn ac-btn-call">
                        Call Us
                      </a>
                    </div>

                    <div className="ac-price-row">
                      <span className="ac-price-label">Monthly</span>
                      <span className="ac-price-value">Ask Now</span>
                      <button className="ac-btn ac-btn-book">Book Now</button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default AllCars;