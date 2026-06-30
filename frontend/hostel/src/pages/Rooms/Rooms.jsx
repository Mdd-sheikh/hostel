import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { assests } from '../../assets/Assests'; // adjust path to your actual assets file
import './Rooms.css';

const Rooms = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    // Reveal-on-scroll animation, replicates the original IntersectionObserver logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealEls = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openTour = () => setIsTourOpen(true);
  const closeTour = () => setIsTourOpen(false);

  // Close on Escape key
  useEffect(() => {
    if (!isTourOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeTour();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isTourOpen]);

  return (
    <>
      <section className="page-hero">
        <div className="blob blob-peach"></div>
        <div className="blob blob-mint"></div>
        <div className="page-hero-content reveal">
          <h1>Rooms & Pricing</h1>
          <p>Choose a space that fits your lifestyle and budget</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Rooms</span>
          </div>
        </div>
      </section>

      <section className="rooms-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-label">Accommodation</span>
            <h2>Find Your Perfect Room</h2>
            <p>All rooms include meals, WiFi, housekeeping, and access to common facilities</p>
          </div>
          <div className="rooms-grid">
            <div className="room-card reveal stagger-1">
              <div className="room-image">
                <img
                  src={assests.single_bed}
                  alt="Girls PG Room in Sealdah Kolkata"
                />
                <span className="room-badge">Most Popular</span>
              </div>
              <div className="room-content">
                <h3>Single Sharing</h3>
                <p>Your own private sanctuary with complete privacy and comfort</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fas fa-bed"></i> Single Bed</span>
                  <span className="room-feature"><i className="fas fa-bath"></i> Attached Bath</span>
                  <span className="room-feature"><i className="fas fa-desk"></i> Study Table</span>
                  <span className="room-feature"><i className="fas fa-wardrobe"></i> Wardrobe</span>
                  <span className="room-feature"><i className="fas fa-snowflake"></i> Ceiling Fan</span>
                  <span className="room-feature"><i className="fas fa-sun"></i> Natural Light</span>
                  <span className="room-feature"><i className="fas fa-sun"></i> If You want Option (Air Conditioning)</span>
                </div>
                <div className="room-price">
                  <span className="amount">₹7,000</span>
                  <span className="period">/ month</span>
                </div>
                <Link to="/contact" className="btn btn-primary room-btn">
                  <i className="fas fa-calendar-check"></i>Check Availability
                </Link>
              </div>
            </div>

            <div className="room-card reveal stagger-2">
              <div className="room-image">
                <img
                  src={assests.double_bed}
                  alt="Girls PG Room in Sealdah Kolkata"
                />
                <span
                  className="room-badge"
                  style={{ background: 'linear-gradient(135deg,var(--mint),var(--mint-dark))' }}
                >
                  Best Value
                </span>
              </div>
              <div className="room-content">
                <h3>Double Sharing</h3>
                <p>Share with one roommate — perfect balance of privacy and companionship</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fas fa-bed"></i> 2 Beds</span>
                  <span className="room-feature"><i className="fas fa-bath"></i> Shared Bath</span>
                  <span className="room-feature"><i className="fas fa-desk"></i> Study Tables</span>
                  <span className="room-feature"><i className="fas fa-wardrobe"></i> Wardrobes</span>
                  <span className="room-feature"><i className="fas fa-snowflake"></i> ceiling fan</span>
                  <span className="room-feature"><i className="fas fa-couch"></i> Mini Sofa</span>
                </div>
                <div className="room-price">
                  <span className="amount">₹6,000</span>
                  <span className="period">/ month</span>
                </div>
                <Link to="/contact" className="btn btn-mint room-btn">
                  <i className="fas fa-calendar-check"></i>Check Availability
                </Link>
              </div>
            </div>

            <div className="room-card reveal stagger-3">
              <div className="room-image">
                <img
                  src={assests.triple_bed}
                  alt="Girls PG Room in Sealdah Kolkata"
                />
              </div>
              <div className="room-content">
                <h3>Triple Sharing</h3>
                <p>Affordable and fun — make friends for life in our triple rooms</p>
                <div className="room-features">
                  <span className="room-feature"><i className="fas fa-bed"></i> 3 Beds</span>
                  <span className="room-feature"><i className="fas fa-bath"></i> Shared Bath</span>
                  <span className="room-feature"><i className="fas fa-desk"></i> Study Tables</span>
                  <span className="room-feature"><i className="fas fa-wardrobe"></i> Wardrobes</span>
                  <span className="room-feature"><i className="fas fa-fan"></i> Ceiling Fan</span>
                  <span className="room-feature"><i className="fas fa-window-maximize"></i> Large Windows</span>
                </div>
                <div className="room-price">
                  <span className="amount">₹5,000</span>
                  <span className="period">/ month</span>
                </div>
                <Link to="/contact" className="btn btn-lavender room-btn">
                  <i className="fas fa-calendar-check"></i>Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compare-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-label">Compare</span>
            <h2>Room Comparison</h2>
            <p>See what's included in each room type at a glance</p>
          </div>
          <div className="reveal">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Single Sharing</th>
                  <th>Double Sharing</th>
                  <th>Triple Sharing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monthly Rent</strong></td>
                  <td className="price-cell">₹12,000</td>
                  <td className="price-cell">₹8,500</td>
                  <td className="price-cell">₹6,500</td>
                </tr>
                <tr>
                  <td>Attached Bathroom</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                </tr>
                <tr>
                  <td>Air Conditioning If You Want It</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-times"></i></td>
                </tr>
                <tr>
                  <td>Study Table</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Wardrobe</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>WiFi</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Meals Included</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Laundry</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Housekeeping</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Security Deposit</td>
                  <td>₹7,000</td>
                  <td>₹6,000</td>
                  <td>₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="tour-cta">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal">
            <h2>Take a Virtual Tour</h2>
            <p>Can't visit in person? Explore our spaces from the comfort of your home</p>
            <div className="video-placeholder" onClick={openTour}>
              <div className="play-btn">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isTourOpen && (
        <div className="video-modal-overlay" onClick={closeTour}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeTour} aria-label="Close video">
              <i className="fas fa-times"></i>
            </button>
            <video
              src={assests.roomTour_video}
              controls
              autoPlay
              className="video-modal-player"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Rooms;