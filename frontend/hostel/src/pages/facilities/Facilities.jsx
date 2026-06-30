import React, { useEffect } from 'react';
import './Facilities.css';

const Facilities = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="blob blob-peach"></div>
        <div className="blob blob-mint"></div>
        <div className="page-hero-content reveal">
          <h1>Facilities & Amenities</h1>
          <p>Everything you need for a comfortable and productive stay</p>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <span>Facilities</span>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-label">Amenities</span>
            <h2>All-Inclusive Living</h2>
            <p>We've thought of every detail so you don't have to</p>
          </div>
          <div className="facilities-grid">
            <div className="facility-card reveal stagger-1">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--peach),var(--peach-dark))' }}
              >
                <i className="fas fa-wifi"></i>
              </div>
              <h3>High-Speed WiFi</h3>
              <p>100 Mbps fiber connection for seamless classes and streaming</p>
            </div>
            <div className="facility-card reveal stagger-2">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--mint),var(--mint-dark))' }}
              >
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Healthy Meals</h3>
              <p>Fresh breakfast, lunch & dinner with special diet options</p>
            </div>
            <div className="facility-card reveal stagger-3">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--lavender),var(--lavender-dark))' }}
              >
                <i className="fas fa-tshirt"></i>
              </div>
              <h3>Laundry Service</h3>
              <p>In-house machines and ironing available daily</p>
            </div>
            <div className="facility-card reveal stagger-4">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--peach),var(--lavender))' }}
              >
                <i className="fas fa-snowflake"></i>
              </div>
              <h3>AC & Coolers</h3>
              <p>Air conditioning in single/double rooms, coolers in triple</p>
            </div>
            <div className="facility-card reveal stagger-1">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--mint),var(--lavender))' }}
              >
                <i className="fas fa-video"></i>
              </div>
              <h3>CCTV Security</h3>
              <p>24/7 surveillance across all common areas and entrances</p>
            </div>
            <div className="facility-card reveal stagger-2">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--peach-dark),var(--lavender-dark))' }}
              >
                <i className="fas fa-fingerprint"></i>
              </div>
              <h3>Biometric Entry</h3>
              <p>Secure fingerprint access for residents only</p>
            </div>
            <div className="facility-card reveal stagger-3">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--peach),var(--mint))' }}
              >
                <i className="fas fa-book"></i>
              </div>
              <h3>Study Room</h3>
              <p>Quiet dedicated space with desks, lamps, and charging</p>
            </div>
            <div className="facility-card reveal stagger-4">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--mint),var(--peach))' }}
              >
                <i className="fas fa-tv"></i>
              </div>
              <h3>Recreation Area</h3>
              <p>TV lounge, indoor games, and cozy reading corners</p>
            </div>
            <div className="facility-card reveal stagger-1">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--lavender),var(--peach))' }}
              >
                <i className="fas fa-hot-tub"></i>
              </div>
              <h3>Hot Water</h3>
              <p>Geysers in every bathroom, available 24/7</p>
            </div>
            <div className="facility-card reveal stagger-2">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--peach-light),var(--peach))' }}
              >
                <i className="fas fa-broom"></i>
              </div>
              <h3>Housekeeping</h3>
              <p>Daily cleaning and weekly deep cleaning of all spaces</p>
            </div>
            <div className="facility-card reveal stagger-3">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--mint-light),var(--mint))' }}
              >
                <i className="fas fa-car"></i>
              </div>
              <h3>Parking</h3>
              <p>Secure covered parking for two-wheelers and cars</p>
            </div>
            <div className="facility-card reveal stagger-4">
              <div
                className="facility-icon"
                style={{ background: 'linear-gradient(135deg,var(--lavender-light),var(--lavender))' }}
              >
                <i className="fas fa-first-aid"></i>
              </div>
              <h3>Medical Support</h3>
              <p>First aid, tie-up with hospitals, and on-call doctor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="daylife-section">
        <div className="section-container">
          <div className="daylife-grid">
            <div className="daylife-image reveal-left">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop"
                alt="Day at Serene Stay"
              />
            </div>
            <div className="daylife-content reveal-right">
              <span className="section-label">Daily Life</span>
              <h2>A Day at Serene Stay</h2>
              <p>Experience what a typical day looks like for our residents</p>

              <div className="daylife-item">
                <span className="daylife-time">7:00 AM</span>
                <div className="daylife-text">
                  <h4>Wake Up & Breakfast</h4>
                  <p>Freshly prepared breakfast with options for every diet. From poha to pancakes!</p>
                </div>
              </div>

              <div className="daylife-item mint">
                <span className="daylife-time">9:00 AM</span>
                <div className="daylife-text">
                  <h4>Classes & Study</h4>
                  <p>Head to college or settle into our quiet study room with high-speed WiFi</p>
                </div>
              </div>

              <div className="daylife-item lavender">
                <span className="daylife-time">1:00 PM</span>
                <div className="daylife-text">
                  <h4>Lunch Break</h4>
                  <p>Homestyle lunch with rice, dal, seasonal vegetables, and fresh rotis</p>
                </div>
              </div>

              <div className="daylife-item">
                <span className="daylife-time">6:00 PM</span>
                <div className="daylife-text">
                  <h4>Evening Tea & Chill</h4>
                  <p>Tea and snacks in the common area. Time to catch up with friends!</p>
                </div>
              </div>

              <div className="daylife-item mint">
                <span className="daylife-time">8:00 PM</span>
                <div className="daylife-text">
                  <h4>Dinner & Wind Down</h4>
                  <p>Hearty dinner followed by movie nights, study groups, or peaceful reading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meal-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-label">Food</span>
            <h2>Meal Plans Upcoming</h2>
            <p>Nutritious, delicious, and made with love</p>
          </div>
          <div className="meal-grid">
            <div className="meal-card reveal stagger-1">
              <div className="meal-img">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=300&fit=crop"
                  alt="Breakfast"
                />
              </div>
              <div className="meal-content">
                <h3>Breakfast</h3>
                <p>Poha, parathas, idli, toast, eggs, fresh fruits, and juice. Served 7:00 - 9:30 AM</p>
                <div className="meal-tags">
                  <span className="meal-tag">Veg</span>
                  <span className="meal-tag">Non-Veg</span>
                  <span className="meal-tag">Jain</span>
                </div>
              </div>
            </div>

            <div className="meal-card reveal stagger-2">
              <div className="meal-img">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=300&fit=crop"
                  alt="Lunch"
                />
              </div>
              <div className="meal-content">
                <h3>Lunch</h3>
                <p>Rice, dal, 2 vegetables, roti, salad, raita, and dessert. Served 12:00 - 2:00 PM</p>
                <div className="meal-tags">
                  <span className="meal-tag">North Indian</span>
                  <span className="meal-tag">South Indian</span>
                </div>
              </div>
            </div>

            <div className="meal-card reveal stagger-3">
              <div className="meal-img">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=300&fit=crop"
                  alt="Dinner"
                />
              </div>
              <div className="meal-content">
                <h3>Dinner</h3>
                <p>Roti, rice, curry, paneer/chicken, dal, and a sweet dish. Served 7:30 - 9:00 PM</p>
                <div className="meal-tags">
                  <span className="meal-tag">Special Friday</span>
                  <span className="meal-tag">Festival Menu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;