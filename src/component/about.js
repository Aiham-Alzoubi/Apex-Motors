import "../style/about.css";

function About(){
    return(
       
        <div className="about-page">

        {/* HERO */}
        <div className="about-hero">
            <h1 className="txt">About Rent A Car</h1>
            <p className="txt">Luxury & Sports Car Rental in Dubai</p>
        </div>

        {/* WHO WE ARE */}
        <section className="about-section">
            <h2>Who We Are</h2>
            <p>
            We are a premium car rental company in Dubai providing luxury,
            sports, and SUV vehicles with world-class customer service.
            </p>
        </section>

        {/* MISSION */}
        <section className="about-section dark">
            <h2>Our Mission</h2>
            <p>
            To deliver unforgettable driving experiences with affordable
            prices and outstanding service.
            </p>
        </section>

        {/* WHY CHOOSE US */}
        <section className="about-section">
            <h2>Why Choose Us</h2>

            <div className="features">
            <div className="feature">No Deposit</div>
            <div className="feature">24/7 Support</div>
            <div className="feature">Latest Models</div>
            <div className="feature">Fast Delivery</div>
            <div className="feature">Best Prices</div>
            </div>
        </section>

        {/* OUR FLEET */}
        <section className="about-section dark">
            <h2>Our Fleet</h2>
            <div className="brands">
            <span>Ferrari</span>
            <span>Lamborghini</span>
            <span>Porsche</span>
            <span>Bentley</span>
            <span>Rolls Royce</span>
            <span>BMW</span>
            </div>
        </section>

        {/* CTA */}
        <section className="about-section">
            <h2>Ready To Drive?</h2>
            <button className="about-btn">Browse Cars</button>
        </section>

        </div>
  );
}

export default About;


