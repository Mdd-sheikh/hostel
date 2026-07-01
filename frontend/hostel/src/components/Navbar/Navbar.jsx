import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    // Close mobile menu
    function closeMobileMenu() {
        document.getElementById('mobileMenu').classList.remove('active');
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        document.getElementById('mobileMenu').classList.toggle('active');
    }

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate')
            .forEach(el => observer.observe(el));

        // Smooth scroll
        const anchorClickHandler = function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => anchor.addEventListener('click', anchorClickHandler));

        // cleanup on unmount
        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
            anchors.forEach(anchor => anchor.removeEventListener('click', anchorClickHandler));
        };
    }, []);

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
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>

            <div className="mobile-menu" id="mobileMenu">
                <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                    <i className="fas fa-times"></i>
                </button>
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
                <Link to="/rooms" onClick={closeMobileMenu}>Rooms</Link>
                <Link to="/facilities" onClick={closeMobileMenu}>Facilities</Link>
                <Link to="/safety" onClick={closeMobileMenu}>Safety</Link>
                <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
                <Link to="/blog" onClick={closeMobileMenu}>Community</Link>
                <Link to="/contact" onClick={closeMobileMenu}>Book a Visit</Link>
            </div>
        </>
    );
};

export default Navbar;