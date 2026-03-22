import { Link } from "react-router-dom";
import "../style/home.css";

const badges = ["No Deposit", "Fast Delivery", "Lowest Prices", "Largest Fleet", "24/7 Service"];

const offerings = [
  {
    title: "Rent a Lamborghini",
    body: "Get ready for an exhilarating experience. Whether it's the sporty Huracan or the powerful Aventador, you're bound to have a memorable journey.",
    slug: "lamborghini",
  },
  {
    title: "Rent a Rolls-Royce",
    body: "Step into the world of ultimate elegance. Models such as the Phantom and Ghost are crafted to leave a lasting impression at any gathering.",
    slug: "rolls-royce",
  },
  {
    title: "Rent a Ferrari",
    body: "Choose the Ferrari 812 Super-fast or SF90 for speed, style, and comfort. Perfect for city drives, events, or weekend trips.",
    slug: "ferrari",
  },
  {
    title: "Rent a McLaren",
    body: "The McLaren Art-ura blends cutting-edge hybrid performance with breathtaking design. A true driver's machine.",
    slug: "mclaren",
  },
  {
    title: "More Luxury Brands",
    body: "Mercedes, BMW, Porsche, Bentley — our collection is regularly refreshed, ensuring you always have the newest models available.",
    slug: "brand",
  },
];

const popularCars = [
  {
    name: "Ferrari F8 Tributo",
    price: 850,
    slug: "ferrari",
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/04/1-5.jpg",
  },
  {
    name: "Lamborghini Huron",
    price: 950,
    slug: "lamborghini",
    img: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2560%2Cc_limit/DSC_5903.jpg",
  },
  {
    name: "Ferrari SF90",
    price: 1200,
    slug: "ferrari",
    img: "https://cdn.mkrentacar.com/wp-content/uploads/2025/04/1-1.jpg",
  },
];

function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Dubai's #1 SuperCar Rental</span>
          <h1 className="hero-title">Sports Car Rental<br />in Dubai</h1>

          <ul className="badge-list">
            {badges.map((b) => (
              <li key={b} className="badge">{b}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <Link to="/all-cars" className="btn btn-primary">Browse Cars</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about">
        <div className="about-inner">
          <h2 className="section-title">Latest Car Apex Motors Offers in Dubai</h2>
          <p className="section-sub">
            We are deeply proud of our wide collection of high-end vehicles, all carefully
            looked after to guarantee an unparalleled driving journey.
          </p>

          <div className="offering-list">
            {offerings.map((item) => (
              <Link to={`/brand/${item.slug}`} key={item.title} className="offering-item">
                <span className="offering-arrow">→</span>
                <p>
                  <strong>{item.title}:</strong> {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services">
        <div className="services-card">
          <h2>Dubai's Leading Luxury SuperCar Apex Motors Company</h2>
          <p>
            From Lamborghini and Ferrari to Range Rovers — flexible rental options,
            exceptional service, and the best prices. Fulfil your dream today.
          </p>
          <Link to="/all-cars" className="btn btn-primary" style={{ marginTop: "20px", display: "inline-block" }}>
            View All Cars
          </Link>
        </div>
      </section>

      {/* ===== POPULAR CARS ===== */}
      <section className="popular">
        <div className="popular-inner">
          <h2 className="section-title">Popular Cars</h2>
          <p className="section-sub">Hand-picked favorites from our fleet</p>

          <div className="cars-grid">
            {popularCars.map((car) => (
              <Link to={`/brand/${car.slug}`} key={car.name} className="car-card">
                <div className="car-card-img-wrap">
                  <img src={car.img} alt={car.name} />
                </div>
                <div className="car-card-body">
                  <h3>{car.name}</h3>
                  <span className="car-price">From ${car.price}/day</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;