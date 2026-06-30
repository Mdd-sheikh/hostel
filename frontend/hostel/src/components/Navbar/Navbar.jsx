import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);


    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    function toggleMobileMenu() {
        document.getElementById('mobileMenu').classList.toggle('active');
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate').forEach(el => observer.observe(el));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    return (
        <>
            {/* Navigation */}
            <nav className="navbar" id="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo">
                        <div className="logo-icon"><i className="fas fa-home"></i></div>
                       Sealdah
                    </Link>
                    <ul className="nav-links">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/facilities">Facilities</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/contact" className="nav-cta">Book a Visit</Link></li>
                    </ul>
                    <button className="mobile-menu-btn" onClick={() => toggleMobileMenu()}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>

            <div className="mobile-menu" id="mobileMenu">
                <button className="mobile-menu-close" onClick={() => toggleMobileMenu()}><i className="fas fa-times"></i></button>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/facilities">Facilities</Link>
                <Link to="/safety">Safety</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/blog">Community</Link>
                <Link to="/contact">Book a Visit</Link>
            </div>
        </>
    );
};

export default Navbar;