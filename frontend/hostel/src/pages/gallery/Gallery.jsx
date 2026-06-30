import React, { useEffect, useState, useCallback } from 'react';
import './Gallery.css';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=400&fit=crop',
    alt: 'Exterior',
    title: 'Hostel Exterior',
    desc: 'Beautiful green building',
    category: 'rooms',
    className: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=800&fit=crop',
    alt: 'Room',
    title: 'Single Room',
    desc: 'Cozy and private',
    category: 'rooms',
    className: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop',
    alt: 'Common',
    title: 'Common Room',
    desc: 'Relax and unwind',
    category: 'common',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
    alt: 'Food',
    title: 'Breakfast Spread',
    desc: 'Fresh and healthy',
    category: 'food',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
    alt: 'Study',
    title: 'Study Room',
    desc: 'Quiet and focused',
    category: 'common',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop',
    alt: 'Event',
    title: 'Festival Celebration',
    desc: 'Diwali at Serene Stay',
    category: 'events',
    className: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop',
    alt: 'Room',
    title: 'Double Room',
    desc: 'Perfect for friends',
    category: 'rooms',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=800&fit=crop',
    alt: 'Kitchen',
    title: 'Kitchen',
    desc: 'Where the magic happens',
    category: 'common',
    className: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
    alt: 'Event',
    title: 'Birthday Party',
    desc: 'Celebrating together',
    category: 'events',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop',
    alt: 'Lunch',
    title: 'Lunch Time',
    desc: 'Homestyle cooking',
    category: 'food',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop',
    alt: 'Dining',
    title: 'Dining Hall',
    desc: 'Community meals',
    category: 'common',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop',
    alt: 'Bathroom',
    title: 'Modern Bathroom',
    desc: 'Clean and hygienic',
    category: 'rooms',
    className: '',
  },
];

const instaImages = [
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop',
];

const filters = ['all', 'rooms', 'common', 'food', 'events'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const changeImage = useCallback((dir) => {
    setCurrentIndex((prev) => (prev + dir + galleryItems.length) % galleryItems.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') changeImage(-1);
      if (e.key === 'ArrowRight') changeImage(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, changeImage]);

  return (
    <>
      <section className="page-hero">
        <div className="blob blob-peach"></div>
        <div className="blob blob-mint"></div>
        <div className="page-hero-content reveal">
          <h1>Our Gallery</h1>
          <p>A visual journey through life at Serene Stay</p>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="section-label">Photos</span>
            <h2>Explore Our Spaces</h2>
            <p>Click on any image to view in full size</p>
          </div>

          <div className="gallery-filter reveal">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'common' ? 'Common Areas' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="gallery-masonry">
            {galleryItems.map((item, index) => {
              const visible = activeFilter === 'all' || item.category === activeFilter;
              return (
                <div
                  key={index}
                  className={`gallery-item ${item.className}`}
                  style={{ display: visible ? 'block' : 'none', opacity: visible ? 1 : 0 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.src} alt={item.alt} />
                  <div className="gallery-overlay">
                    <div className="zoom-icon">
                      <i className="fas fa-search-plus"></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insta-feed">
        <div className="section-container">
          <div className="insta-header reveal">
            <i className="fab fa-instagram"></i>
            <div>
              <h3>@serenestay</h3>
              <span>Follow us on Instagram for daily updates</span>
            </div>
          </div>
          <div className="insta-grid">
            {instaImages.map((src, index) => (
              <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
                <img src={src} alt="Instagram post" />
                <div className="gallery-overlay">
                  <div className="zoom-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className={`lightbox ${lightboxOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <button className="lightbox-close" onClick={closeLightbox}>
          <i className="fas fa-times"></i>
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={() => changeImage(-1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <img src={galleryItems[currentIndex]?.src} alt="Gallery" />
        <button className="lightbox-nav lightbox-next" onClick={() => changeImage(1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default Gallery;