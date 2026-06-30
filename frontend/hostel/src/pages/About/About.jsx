import React from "react";
import { Link } from "react-router-dom";
import './About.css'
import { assests } from "../../assets/Assests";
import {useEffect} from "react";


const About = () => {
    useEffect(() => {
        const navbar = document.getElementById("navbar");

        const handleScroll = () => {
            navbar?.classList.toggle("scrolled", window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        const elements = document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale"
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);
    return (
        <>


            <section className="page-hero">
                <div className="blob blob-peach"></div>
                <div className="blob blob-mint"></div>
                <div className="page-hero-content reveal">
                    <h1>Our Story</h1>
                    <p>From a dream to a home for hundreds of young women</p>
                    <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>About Us</span></div>
                </div>
            </section>

            <section className="story-section">
                <div className="section-container">
                    <div className="story-grid">
                        <div className="story-images reveal-left">
                            <div className="story-img-main">
                                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=500&fit=crop" alt="Our Story" />
                            </div>
                            <div className="story-img-float">
                                <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&h=300&fit=crop" alt="Community" />
                            </div>
                        </div>
                        <div className="story-content reveal-right">
                            <span className="section-label">Our Story</span>
                            <p className="handwritten">It all started with a mother's love...</p>
                            <h2>Creating Safe Spaces for Dreamers</h2>
                            <p>In 2015, Mrs. Priya Sharma, a former social worker and mother of two daughters, noticed a gap in quality, safe accommodation for young women in the city. She envisioned a place that wasn't just a room, but a home where girls could grow, learn, and thrive.</p>
                            <p>What started as a small 20-bed hostel has now grown into a beloved community of over 500 residents. Every brick, every meal, every rule has been crafted with a mother's care and a professional's precision.</p>
                            <p>Today, Serene Stay stands as a testament to what happens when safety meets warmth. We're not just a PG — we're a family that celebrates your victories, supports you through challenges, and watches you blossom into the woman you're meant to be.</p>
                            <Link to="/contact" className="btn btn-primary" style={{ marginTop: "1rem" }}><i className="fas fa-heart"></i>Join Our Family</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Values</span>
                        <h2>What We Stand For</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card reveal stagger-1">
                            <div className="value-icon" style={{ background: "linear-gradient(135deg,var(--peach),var(--peach-dark))" }}><i className="fas fa-shield-heart"></i></div>
                            <h3>Safety First</h3>
                            <p>Every decision we make starts with one question: "Is this safe for our girls?" Your security is non-negotiable.</p>
                        </div>
                        <div className="value-card reveal stagger-2">
                            <div className="value-icon" style={{ background: "linear-gradient(135deg,var(--mint),var(--mint-dark))" }}><i className="fas fa-hand-holding-heart"></i></div>
                            <h3>Motherly Care</h3>
                            <p>We treat every resident like our own daughter. From homemade remedies when you're sick to birthday celebrations.</p>
                        </div>
                        <div className="value-card reveal stagger-3">
                            <div className="value-icon" style={{ background: "linear-gradient(135deg,var(--lavender),var(--lavender-dark))" }}><i className="fas fa-seedling"></i></div>
                            <h3>Growth Mindset</h3>
                            <p>We create an environment that encourages learning, independence, and personal development for every resident.</p>
                        </div>
                        <div className="value-card reveal stagger-1">
                            <div className="value-icon" style={{ background: "linear-gradient(135deg,var(--peach),var(--lavender))" }}><i className="fas fa-users"></i></div>
                            <h3>Inclusive Community</h3>
                            <p>We celebrate diversity and create a space where every girl feels welcome, respected, and valued.</p>
                        </div>
                        <div className="value-card reveal stagger-2">
                            <div className="value-icon" style={{ background: "linear-gradient(135deg,var(--mint),var(--lavender))" }}><i className="fas fa-leaf"></i></div>
                            <h3>Sustainability</h3>
                            <p>From solar water heaters to waste segregation, we're committed to being kind to our planet.</p>
                        </div>
                        <div className="value-card reveal stagger-3">
                            <div className="value-icon" style={{ background: "linear-gradient(135deg,var(--peach-dark),var(--lavender-dark))" }}><i className="fas fa-graduation-cap"></i></div>
                            <h3>Academic Support</h3>
                            <p>Quiet study zones, high-speed internet, and a distraction-free environment for your academic success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Team</span>
                        <h2>Meet the People Behind Serene Stay</h2>
                        <p>Dedicated professionals who make this house a home</p>
                    </div>
                    <div className="team-grid">
                        <div className="team-card reveal stagger-1">
                            <div className="team-img">
                                <img src={assests.faculty_primary} alt="Mrs. Priya Sharma" />
                                <div className="team-img-overlay">
                                    <div className="team-social">
                                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link to="#"><i className="fas fa-envelope"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Mrs. Priya Sharma</h3>
                                <p>Founder & Chief Warden</p>
                                <p className="bio">15+ years of experience in student welfare. A mother figure to all 500+ residents. Believes every girl deserves a safe space to dream.</p>
                            </div>
                        </div>
                        <div className="team-card reveal stagger-2">
                            <div className="team-img">
                                <img src={assests.faculty_one} alt="Dr. Anjali Gupta" />
                                <div className="team-img-overlay">
                                    <div className="team-social">
                                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link to="#"><i className="fas fa-envelope"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Dr. Anjali Gupta</h3>
                                <p>Resident Counselor</p>
                                <p className="bio">Clinical psychologist specializing in young adult mental health. Available for one-on-one sessions every Tuesday and Thursday.</p>
                            </div>
                        </div>
                        <div className="team-card reveal stagger-3">
                            <div className="team-img">
                                <img src={assests.faculty_two} alt="Sunita Devi" />
                                <div className="team-img-overlay">
                                    <div className="team-social">
                                        <Link to="#"><i className="fas fa-envelope"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>Sunita Devi</h3>
                                <p>Head of Housekeeping</p>
                                <p className="bio">Ensures every corner sparkles. Her attention to detail and warm smile make Serene Stay feel like a five-star home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline-section">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">Journey</span>
                        <h2>Our Timeline</h2>
                        <p>Key milestones in our journey of growth</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item reveal">
                            <div className="timeline-content">
                                <span className="timeline-year">2015</span>
                                <h3>The Beginning</h3>
                                <p>Opened our first 20-bed hostel with a vision to create safe spaces for young women.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-content">
                                <span className="timeline-year">2017</span>
                                <h3>Expansion</h3>
                                <p>Grew to 100 beds and introduced biometric security and 24/7 CCTV surveillance.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-content">
                                <span className="timeline-year">2019</span>
                                <h3>Award Winning</h3>
                                <p>Recognized as "Best Girls' Hostel" by the City Education Board.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-content">
                                <span className="timeline-year">2021</span>
                                <h3>Community Focus</h3>
                                <p>Launched mental health support program and resident-led community events.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-content">
                                <span className="timeline-year">2024</span>
                                <h3>500+ Strong</h3>
                                <p>Now home to 500+ happy residents with plans for a new eco-friendly wing.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-banner">
                <div className="stats-grid">
                    <div className="stat-item reveal stagger-1">
                        <div className="stat-number">8+</div>
                        <div className="stat-label">Years of Excellence</div>
                    </div>
                    <div className="stat-item reveal stagger-2">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Happy Residents</div>
                    </div>
                    <div className="stat-item reveal stagger-3">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Safety Record</div>
                    </div>
                    <div className="stat-item reveal stagger-4">
                        <div className="stat-number">4.9</div>
                        <div className="stat-label">Average Rating</div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;