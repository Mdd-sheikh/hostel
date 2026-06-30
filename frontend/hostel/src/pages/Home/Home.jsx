import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import { useEffect } from "react";
import { assests } from "../../assets/Assests";

const Home = () => {
    useEffect(() => {
        // Navbar scroll state
        const navbar = document.getElementById("navbar");
        const handleScroll = () => {
            navbar?.classList.toggle("scrolled", window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const revealEls = document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate"
        );
        revealEls.forEach((el) => observer.observe(el));

        // Smooth scroll for in-page anchor links
        const anchors = document.querySelectorAll('a[href^="#"]');
        const handleAnchorClick = function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        anchors.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
            anchors.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
        };
    }, []);
    return (
        <>


            {/* Hero Section */}
            <section className="hero-home">
                <div className="blob blob-peach"></div>
                <div className="blob blob-mint"></div>
                <div className="blob blob-lavender"></div>
                <div className="deco-circle deco-1"></div>
                <div className="deco-circle deco-2"></div>
                <div className="deco-star star-1"><i className="fas fa-star"></i></div>
                <div className="deco-star star-2"><i className="fas fa-star"></i></div>
                <div className="deco-star star-3"><i className="fas fa-star"></i></div>

                <div className="hero-container">
                    <div className="hero-content">
                        <div className="trust-badges">
                            <div className="badge"><i className="fas fa-shield-alt"></i><span>Safety Certified</span></div>
                            <div className="badge"><i className="fas fa-star"></i><span>4.9 Rating</span></div>
                            <div className="badge"><i className="fas fa-check-circle"></i><span>Verified</span></div>
                        </div>
                        <p className="hero-handwritten">Welcome to your second home...</p>
                        <h1>A Safe <span>Home</span> Away From Home</h1>
                        <p className="hero-description">Experience comfort, security, and a warm sisterhood at Serene Stay. Premium girls' hostel designed for modern young women who dream big.</p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary"><i className="fas fa-calendar-check"></i>Book a Visit</Link>
                            <Link to="/rooms" className="btn btn-white"><i className="fas fa-bed"></i>Explore Rooms</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-img-main">
                            <img src={assests.building} alt="Serene Stay Hostel" />
                        </div>
                        <div className="hero-float-card card-1">
                            <div className="float-icon peach"><i className="fas fa-users"></i></div>
                            <div className="float-text"><strong>500+</strong>Happy Residents</div>
                        </div>
                        <div className="hero-float-card card-2">
                            <div className="float-icon mint"><i className="fas fa-heart"></i></div>
                            <div className="float-text"><strong>8+ Years</strong>Of Trust</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Why Us</span>
                        <h2>Why Girls Love Serene Stay</h2>
                        <p>More than just a place to sleep — it's a community that cares</p>
                    </div>
                    <div className="why-grid">
                        <div className="why-card reveal stagger-1">
                            <div className="why-icon peach"><i className="fas fa-shield-heart"></i></div>
                            <h3>Top-Notch Safety</h3>
                            <p>24/7 security, biometric access, and CCTV so you and your parents sleep peacefully</p>
                        </div>
                        <div className="why-card reveal stagger-2">
                            <div className="why-icon mint"><i className="fas fa-utensils"></i></div>
                            <h3>Homely Meals</h3>
                            <p>Fresh, nutritious food prepared with love. Special dietary needs always accommodated</p>
                        </div>
                        <div className="why-card reveal stagger-3">
                            <div className="why-icon lavender"><i className="fas fa-wifi"></i></div>
                            <h3>High-Speed WiFi</h3>
                            <p>Blazing fast internet for your classes, Netflix, and late-night video calls with mom</p>
                        </div>
                        <div className="why-card reveal stagger-4">
                            <div className="why-icon coral"><i className="fas fa-heart"></i></div>
                            <h3>Sisterhood Vibes</h3>
                            <p>Make lifelong friends in our recreation areas, study groups, and weekend events</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms */}
            <section className="rooms-preview">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Rooms</span>
                        <h2>Your Perfect Space Awaits</h2>
                        <p>Choose from our thoughtfully designed room options</p>
                    </div>
                    <div className="room-preview-grid">
                        <div className="room-preview-card reveal stagger-1">
                            <div className="room-preview-img">
                                <img src={assests.double_bed} />
                                <span className="room-badge">Most Popular</span>
                            </div>
                            <div className="room-preview-content">
                                <h3>Single Sharing</h3>
                                <p>Complete privacy with your own personal sanctuary</p>
                                <div className="room-price-tag">
                                    <span className="amount">₹7,000</span>
                                    <span className="period">/ month</span>
                                </div>
                                <Link to="/rooms" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>View Details</Link>
                            </div>
                        </div>
                        <div className="room-preview-card reveal stagger-2">
                            <div className="room-preview-img">
                                <img src={assests.single_bed} alt="Double Room" />
                                <span className="room-badge" style={{ background: "linear-gradient(135deg,var(--mint),var(--mint-dark))" }}>Best Value</span>
                            </div>
                            <div className="room-preview-content">
                                <h3>Double Sharing</h3>
                                <p>Share with a roommate and save without compromising comfort</p>
                                <div className="room-price-tag">
                                    <span className="amount">₹6,000</span>
                                    <span className="period">/ month</span>
                                </div>
                                <Link to="/rooms" className="btn btn-mint" style={{ width: "100%", justifyContent: "center" }}>View Details</Link>
                            </div>
                        </div>
                        <div className="room-preview-card reveal stagger-3">
                            <div className="room-preview-img">
                                <img src={assests.triple_bed} alt="Triple Room" />
                            </div>
                            <div className="room-preview-content">
                                <h3>Triple Sharing</h3>
                                <p>Affordable and fun with a friendly community atmosphere</p>
                                <div className="room-price-tag">
                                    <span className="amount">₹5,000</span>
                                    <span className="period">/ month</span>
                                </div>
                                <Link to="/rooms" className="btn btn-lavender" style={{ width: "100%", justifyContent: "center" }}>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Gallery Preview */}
            <section className="insta-section">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Gallery</span>
                        <h2>Life at Serene Stay</h2>
                        <p>Peek into our aesthetic spaces and happy moments</p>
                    </div>
                    <div className="insta-grid">
                        <div className="insta-item reveal stagger-1"><img src={assests.double_bed} alt="Exterior" /><div className="insta-overlay"><i className="fas fa-heart"></i></div></div>
                        <div className="insta-item reveal stagger-2"><img src={assests.room_five} alt="Common" /><div className="insta-overlay"><i className="fas fa-heart"></i></div></div>
                        <div className="insta-item reveal stagger-3"><img src={assests.room_four} alt="Room" /><div className="insta-overlay"><i className="fas fa-heart"></i></div></div>
                        <div className="insta-item reveal stagger-4"><img src={assests.single_bed} alt="Kitchen" /><div className="insta-overlay"><i className="fas fa-heart"></i></div></div>
                        <div className="insta-item reveal stagger-5"><img src={assests.triple_bed} alt="Study" /><div className="insta-overlay"><i className="fas fa-heart"></i></div></div>
                        <div className="insta-item reveal stagger-6"><img src={assests.room_five} alt="Lounge" /><div className="insta-overlay"><i className="fas fa-heart"></i></div></div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                        <Link to="/gallery" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "var(--peach-light)" }}><i className="fas fa-images"></i>View Full Gallery</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-home">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Reviews</span>
                        <h2>What Our Girls Say</h2>
                        <p>Real stories from real residents</p>
                    </div>
                    <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))", gap: "2rem" }}>
                        <div className="testimonial-card glass-card reveal stagger-1">
                            <div style={{ fontSize: "3rem", color: "var(--peach)", opacity: 0.5, fontFamily: "'Playfair Display',serif", marginBottom: "-1rem" }}>"</div>
                            <div style={{ color: "#FFD700", fontSize: "0.9rem", marginBottom: "1rem" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <p style={{ color: "var(--text-medium)", lineHeight: 1.8, marginBottom: "1.5rem" }}>Serene Stay has been my home for 2 years. The warden is like a second mother, and I've made my best friends here. The study room is perfect for exam prep!</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(135deg,var(--peach),var(--lavender))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--white)", fontWeight: 700, fontSize: "1.2rem" }}>A</div>
                                <div><strong style={{ color: "var(--text-dark)" }}>Ananya Sharma</strong><p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Medical Student, 2nd Year</p></div>
                            </div>
                        </div>
                        <div className="testimonial-card glass-card reveal stagger-2">
                            <div style={{ fontSize: "3rem", color: "var(--peach)", opacity: 0.5, fontFamily: "'Playfair Display',serif", marginBottom: "-1rem" }}>"</div>
                            <div style={{ color: "#FFD700", fontSize: "0.9rem", marginBottom: "1rem" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <p style={{ color: "var(--text-medium)", lineHeight: 1.8, marginBottom: "1.5rem" }}>As a parent from a small town, I was worried. But Serene Stay's daily updates and strict security made this the best decision. My daughter loves it here!</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(135deg,var(--mint),var(--mint-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--white)", fontWeight: 700, fontSize: "1.2rem" }}>R</div>
                                <div><strong style={{ color: "var(--text-dark)" }}>Rajesh Kumar</strong><p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Father of Resident</p></div>
                            </div>
                        </div>
                        <div className="testimonial-card glass-card reveal stagger-3">
                            <div style={{ fontSize: "3rem", color: "var(--peach)", opacity: 0.5, fontFamily: "'Playfair Display',serif", marginBottom: "-1rem" }}>"</div>
                            <div style={{ color: "#FFD700", fontSize: "0.9rem", marginBottom: "1rem" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div>
                            <p style={{ color: "var(--text-medium)", lineHeight: 1.8, marginBottom: "1.5rem" }}>The food is amazing! As someone with dietary restrictions, the kitchen staff has been incredibly accommodating. The weekend movie nights are my favorite!</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(135deg,var(--lavender),var(--lavender-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--white)", fontWeight: 700, fontSize: "1.2rem" }}>P</div>
                                <div><strong style={{ color: "var(--text-dark)" }}>Priya Mehta</strong><p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Software Engineer</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="section-container">
                    <div className="cta-content reveal">
                        <h2>Ready to Find Your Home?</h2>
                        <p>Book a visit today and experience the Serene Stay difference. Limited rooms available for the upcoming semester!</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "1.2rem 2.5rem" }}><i className="fas fa-calendar-check"></i>Schedule a Visit</Link>
                            <a href="tel:+919831268634" className="btn btn-secondary" style={{ fontSize: "1.1rem", padding: "1.2rem 2.5rem" }}><i className="fas fa-phone"></i>Call Us Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter">
                <div className="newsletter-box reveal">
                    <h3>Join Our Community</h3>
                    <p>Get tips for hostel life, exclusive offers, and resident stories delivered to your inbox</p>
                    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Welcome to the Serene Stay family!'); }}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i>Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Home;