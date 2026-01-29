import '../style/home.css';

function Home() {
  return (
    <>

      {/* ===== HERO SECTION ===== */}
      <div className="home">
        <div className="mune">
          <h1 className="text">Sports Car Rental in Dubai</h1>

          <ul className="items">
            <li className="item">
              <span className="icon">No Deposit</span>
              <span className="icon">Fast Delivery</span>
              <span className="icon">Lowest Prices</span>
              <span className="icon">Largest Fleet</span>
              <span className="icon">24/7 Service</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="actions">
            <button className="btn primary">Browse Cars</button>
            <button className="btn secondary">Contact Us</button>
          </div>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section about">
        <h2>Why Choose Us?</h2>
        <p>
          We offer luxury and sports car rentals with the best prices,
          flexible plans, and premium customer service.
        </p>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">Luxury Cars</div>
          <div className="service-card">Sports Cars</div>
          <div className="service-card">SUV Cars</div>
          <div className="service-card">Airport Delivery</div>
        </div>
      </section>

      {/* ===== CARS SECTION ===== */}
      <section className="section cars">
        <h2>Popular Cars</h2>

        <div className="car-card">
            <img src="https://media.architecturaldigest.com/photos/55e76f1e302ba71f3016bc4f/master/pass/dam-images-daily-2013-03-laferrari-laferrari-01.jpg" />
            <h3>Ferrari</h3>
        </div>
        <div className="car-card">
            <img src="https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2560%2Cc_limit/DSC_5903.jpg" />
            <h3>Lamborghini</h3>
        </div>
        <div className="car-card">
            <img src="https://porschepictures.flowcenter.de/pmdb/thumbnail.cgi?id=283830&w=1080&h=609&crop=1&public=1&cs=52a3e16ebeee6f12" />
            <h3>Porsche</h3>
        </div>



      </section>

    </>
  );
}

export default Home;
