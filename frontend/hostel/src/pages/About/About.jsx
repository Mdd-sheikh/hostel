import React from 'react'
import './About.css'

const About = () => {

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
    function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('active'); }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
    return (
        <>
            <nav class="navbar" id="navbar">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <div class="logo-icon"><i class="fas fa-home"></i></div>Serene Stay
                    </a>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html" class="active">About</a></li>
                        <li><a href="rooms.html">Rooms</a></li>
                        <li><a href="facilities.html">Facilities</a></li>
                        <li><a href="safety.html">Safety</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="blog.html">Community</a></li>
                        <li><a href="contact.html" class="nav-cta">Book a Visit</a></li>
                    </ul>
                    <button class="mobile-menu-btn" onclick="toggleMobileMenu()"><i class="fas fa-bars"></i></button>
                </div>
            </nav>

            <div class="mobile-menu" id="mobileMenu">
                <button class="mobile-menu-close" onclick="toggleMobileMenu()"><i class="fas fa-times"></i></button>
                <a href="index.html">Home</a><a href="about.html">About</a><a href="rooms.html">Rooms</a>
                <a href="facilities.html">Facilities</a><a href="safety.html">Safety</a><a href="gallery.html">Gallery</a>
                <a href="blog.html">Community</a><a href="contact.html">Book a Visit</a>
            </div>

            <section class="page-hero">
                <div class="blob blob-peach"></div>
                <div class="blob blob-mint"></div>
                <div class="page-hero-content reveal">
                    <h1>Our Story</h1>
                    <p>From a dream to a home for hundreds of young women</p>
                    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><span>About Us</span></div>
                </div>
            </section>

            <section class="story-section">
                <div class="section-container">
                    <div class="story-grid">
                        <div class="story-images reveal-left">
                            <div class="story-img-main">
                                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=500&fit=crop" alt="Our Story">
                            </div>
                            <div class="story-img-float">
                                <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&h=300&fit=crop" alt="Community">
                            </div>
                        </div>
                        <div class="story-content reveal-right">
                            <span class="section-label">Our Story</span>
                            <p class="handwritten">It all started with a mother's love...</p>
                            <h2>Creating Safe Spaces for Dreamers</h2>
                            <p>In 2015, Mrs. Priya Sharma, a former social worker and mother of two daughters, noticed a gap in quality, safe accommodation for young women in the city. She envisioned a place that wasn't just a room, but a home where girls could grow, learn, and thrive.</p>
                            <p>What started as a small 20-bed hostel has now grown into a beloved community of over 500 residents. Every brick, every meal, every rule has been crafted with a mother's care and a professional's precision.</p>
                            <p>Today, Serene Stay stands as a testament to what happens when safety meets warmth. We're not just a PG — we're a family that celebrates your victories, supports you through challenges, and watches you blossom into the woman you're meant to be.</p>
                            <a href="contact.html" class="btn btn-primary" style="margin-top:1rem;"><i class="fas fa-heart"></i>Join Our Family</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="values-section">
                <div class="section-container">
                    <div class="section-header reveal">
                        <span class="section-label">Values</span>
                        <h2>What We Stand For</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div class="values-grid">
                        <div class="value-card reveal stagger-1">
                            <div class="value-icon" style="background:linear-gradient(135deg,var(--peach),var(--peach-dark));"><i class="fas fa-shield-heart"></i></div>
                            <h3>Safety First</h3>
                            <p>Every decision we make starts with one question: "Is this safe for our girls?" Your security is non-negotiable.</p>
                        </div>
                        <div class="value-card reveal stagger-2">
                            <div class="value-icon" style="background:linear-gradient(135deg,var(--mint),var(--mint-dark));"><i class="fas fa-hand-holding-heart"></i></div>
                            <h3>Motherly Care</h3>
                            <p>We treat every resident like our own daughter. From homemade remedies when you're sick to birthday celebrations.</p>
                        </div>
                        <div class="value-card reveal stagger-3">
                            <div class="value-icon" style="background:linear-gradient(135deg,var(--lavender),var(--lavender-dark));"><i class="fas fa-seedling"></i></div>
                            <h3>Growth Mindset</h3>
                            <p>We create an environment that encourages learning, independence, and personal development for every resident.</p>
                        </div>
                        <div class="value-card reveal stagger-1">
                            <div class="value-icon" style="background:linear-gradient(135deg,var(--peach),var(--lavender));"><i class="fas fa-users"></i></div>
                            <h3>Inclusive Community</h3>
                            <p>We celebrate diversity and create a space where every girl feels welcome, respected, and valued.</p>
                        </div>
                        <div class="value-card reveal stagger-2">
                            <div class="value-icon" style="background:linear-gradient(135deg,var(--mint),var(--lavender));"><i class="fas fa-leaf"></i></div>
                            <h3>Sustainability</h3>
                            <p>From solar water heaters to waste segregation, we're committed to being kind to our planet.</p>
                        </div>
                        <div class="value-card reveal stagger-3">
                            <div class="value-icon" style="background:linear-gradient(135deg,var(--peach-dark),var(--lavender-dark));"><i class="fas fa-graduation-cap"></i></div>
                            <h3>Academic Support</h3>
                            <p>Quiet study zones, high-speed internet, and a distraction-free environment for your academic success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team-section">
                <div class="section-container">
                    <div class="section-header reveal">
                        <span class="section-label">Team</span>
                        <h2>Meet the People Behind Serene Stay</h2>
                        <p>Dedicated professionals who make this house a home</p>
                    </div>
                    <div class="team-grid">
                        <div class="team-card reveal stagger-1">
                            <div class="team-img">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Mrs. Priya Sharma">
                                    <div class="team-img-overlay">
                                        <div class="team-social">
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                            </div>
                            <div class="team-info">
                                <h3>Mrs. Priya Sharma</h3>
                                <p>Founder & Chief Warden</p>
                                <p class="bio">15+ years of experience in student welfare. A mother figure to all 500+ residents. Believes every girl deserves a safe space to dream.</p>
                            </div>
                        </div>
                        <div class="team-card reveal stagger-2">
                            <div class="team-img">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" alt="Dr. Anjali Gupta">
                                    <div class="team-img-overlay">
                                        <div class="team-social">
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                            </div>
                            <div class="team-info">
                                <h3>Dr. Anjali Gupta</h3>
                                <p>Resident Counselor</p>
                                <p class="bio">Clinical psychologist specializing in young adult mental health. Available for one-on-one sessions every Tuesday and Thursday.</p>
                            </div>
                        </div>
                        <div class="team-card reveal stagger-3">
                            <div class="team-img">
                                <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop" alt="Sunita Devi">
                                    <div class="team-img-overlay">
                                        <div class="team-social">
                                            <a href="#"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                            </div>
                            <div class="team-info">
                                <h3>Sunita Devi</h3>
                                <p>Head of Housekeeping</p>
                                <p class="bio">Ensures every corner sparkles. Her attention to detail and warm smile make Serene Stay feel like a five-star home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="timeline-section">
                <div class="section-container">
                    <div class="section-header reveal">
                        <span class="section-label">Journey</span>
                        <h2>Our Timeline</h2>
                        <p>Key milestones in our journey of growth</p>
                    </div>
                    <div class="timeline">
                        <div class="timeline-item reveal">
                            <div class="timeline-content">
                                <span class="timeline-year">2015</span>
                                <h3>The Beginning</h3>
                                <p>Opened our first 20-bed hostel with a vision to create safe spaces for young women.</p>
                            </div>
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-item reveal">
                            <div class="timeline-content">
                                <span class="timeline-year">2017</span>
                                <h3>Expansion</h3>
                                <p>Grew to 100 beds and introduced biometric security and 24/7 CCTV surveillance.</p>
                            </div>
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-item reveal">
                            <div class="timeline-content">
                                <span class="timeline-year">2019</span>
                                <h3>Award Winning</h3>
                                <p>Recognized as "Best Girls' Hostel" by the City Education Board.</p>
                            </div>
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-item reveal">
                            <div class="timeline-content">
                                <span class="timeline-year">2021</span>
                                <h3>Community Focus</h3>
                                <p>Launched mental health support program and resident-led community events.</p>
                            </div>
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-item reveal">
                            <div class="timeline-content">
                                <span class="timeline-year">2024</span>
                                <h3>500+ Strong</h3>
                                <p>Now home to 500+ happy residents with plans for a new eco-friendly wing.</p>
                            </div>
                            <div class="timeline-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="stats-banner">
                <div class="stats-grid">
                    <div class="stat-item reveal stagger-1">
                        <div class="stat-number">8+</div>
                        <div class="stat-label">Years of Excellence</div>
                    </div>
                    <div class="stat-item reveal stagger-2">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">Happy Residents</div>
                    </div>
                    <div class="stat-item reveal stagger-3">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Safety Record</div>
                    </div>
                    <div class="stat-item reveal stagger-4">
                        <div class="stat-number">4.9</div>
                        <div class="stat-label">Average Rating</div>
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <h3>Serene Stay</h3>
                        <p>A safe and welcoming home for young women. We combine comfort, security, and community to create an environment where you can focus on your dreams.</p>
                        <div class="footer-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-column"><h4>Explore</h4><ul><li><a href="about.html">About Us</a></li><li><a href="rooms.html">Our Rooms</a></li><li><a href="facilities.html">Facilities</a></li><li><a href="gallery.html">Gallery</a></li></ul></div>
                    <div class="footer-column"><h4>Information</h4><ul><li><a href="safety.html">Safety Measures</a></li><li><a href="blog.html">Community Blog</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="contact.html#faq">FAQs</a></li></ul></div>
                    <div class="footer-column"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li><li><a href="#">Cancellation Policy</a></li><li><a href="#">House Rules</a></li></ul></div>
                </div>
                <div class="footer-bottom"><p> 2024 Serene Stay. All rights reserved. | Made with <i class="fas fa-heart" style="color:var(--peach);"></i> for you</p></div>
            </footer>
        </>
    )
}

export default About