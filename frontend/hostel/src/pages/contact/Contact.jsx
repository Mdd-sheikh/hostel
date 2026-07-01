import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const faqData = [
    {
        question: "What is the security deposit?",
        answer:
            "The security deposit varies by room type: Single (₹15,000), Double (₹10,000), and Triple (₹8,000). This is fully refundable when you move out, subject to room condition and notice period compliance.",
    },
    {
        question: "Can parents visit anytime?",
        answer:
            "Parents are welcome to visit during office hours (9 AM - 7 PM). We have a dedicated guest room wing for parents who wish to stay overnight. Prior intimation is appreciated.",
    },
    {
        question: "What is the curfew timing?",
        answer:
            "The main gate closes at 10:00 PM. Late entry requires prior permission from the warden and a notification to parents. We maintain this for the safety and well-being of all residents.",
    },
    {
        question: "Are meals included in the rent?",
        answer:
            "Yes! All our room prices include breakfast, lunch, and dinner. We serve fresh, homestyle food with options for vegetarian, non-vegetarian, and Jain diets. Special festival menus are a bonus!",
    },
    {
        question: "Can I choose my roommate?",
        answer:
            "Absolutely! If you have a friend who also wants to stay, we can arrange for you to share a room. If not, we match roommates based on compatibility factors like course, schedule, and preferences.",
    },
    {
        question: "What is the notice period?",
        answer:
            "We require a 30-day written notice before vacating. This helps us manage room allocations and ensures a smooth transition for both you and incoming residents.",
    },
];

const Contact = () => {
    const formRef = useRef(null);
    const [activeFaq, setActiveFaq] = useState(null);

    // Reveal Animation + Form Submit
    useEffect(() => {
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
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your enquiry! We will contact you within 24 hours.");
        e.target.reset();
    };

    const toggleFaq = (index) => {
        setActiveFaq((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <section className="page-hero">
                <div className="blob blob-peach"></div>
                <div className="blob blob-mint"></div>
                <div className="page-hero-content reveal">
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you. Book a visit or ask us anything!</p>
                    <div className="breadcrumb">
                        <a href="index.html">Home</a>
                        <span>/</span>
                        <span>Contact</span>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="section-container">
                    <div className="contact-grid">
                        <div className="contact-form-wrapper reveal-left">
                            <h3>Book a Visit</h3>
                            <p>Fill out the form and we'll get back to you within 24 hours</p>
                            <form id="enquiryForm" ref={formRef} onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="Your phone" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="Your email" required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="roomType">Preferred Room</label>
                                        <select id="roomType" required defaultValue="">
                                            <option value="">Select room type</option>
                                            <option value="single">Single Sharing</option>
                                            <option value="double">Double Sharing</option>
                                            <option value="triple">Triple Sharing</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="moveIn">Move-in Date</label>
                                        <input type="date" id="moveIn" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Any questions or special requirements..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn submit-btn">
                                    <i className="fas fa-paper-plane"></i>Submit Enquiry
                                </button>
                            </form>
                        </div>
                        <div className="contact-info reveal-right">
                            <h3>Contact Information</h3>
                            <p>Reach out to us directly. We're here to help!</p>
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div
                                        className="contact-method-icon"
                                        style={{
                                            background:
                                                "linear-gradient(135deg,var(--peach),var(--peach-dark))",
                                        }}
                                    >
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-method-text">
                                        <strong>Phone</strong>
                                        <span>+91 9831268634</span>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div
                                        className="contact-method-icon"
                                        style={{
                                            background:
                                                "linear-gradient(135deg,var(--mint),var(--mint-dark))",
                                        }}
                                    >
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-method-text">
                                        <strong>Email</strong>
                                        <span>sealdahgirlspg@gmail.com</span>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div
                                        className="contact-method-icon"
                                        style={{
                                            background:
                                                "linear-gradient(135deg,var(--lavender),var(--lavender-dark))",
                                        }}
                                    >
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-method-text">
                                        <strong>Address</strong>
                                        <span>
                                            65A Pataldanga Street Kolkata - 700009 ( Near Surendranath College) kol-700009
                                        </span>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div
                                        className="contact-method-icon"
                                        style={{
                                            background: "linear-gradient(135deg,var(--peach),var(--lavender))",
                                        }}
                                    >
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="contact-method-text">
                                        <strong>Office Hours</strong>
                                        <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-buttons">
                                <a
                                    href="https://wa.me/919831268634"
                                    className="btn whatsapp-btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-whatsapp"></i>WhatsApp Us
                                </a>
                                <a href="tel:+919831268634" className="btn call-btn">
                                    <i className="fas fa-phone"></i>Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="section-container">
                    <div className="map-grid">
                        <div className="map-container reveal-left">
                            <iframe
                                title="Serene Stay location map"
                                src="https://www.google.com/maps?q=65A+Pataldanga+Street,+Kolkata+-+700009+(Near+Surendranath+College)&output=embed"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="location-info reveal-right">
                            <span className="section-label">Location</span>
                            <h3>Find Us Here</h3>
                            <p>Conveniently located near major institutions and transit</p>
                            <ul className="nearby-list">
                                <li>
                                    <div className="nearby-icon">
                                        <i className="fas fa-university"></i>
                                    </div>
                                    <div className="nearby-text">
                                        <strong>Surendranath College</strong>
                                        <span>100 m away</span>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="nearby-icon">
                                        <i className="fas fa-subway"></i>
                                    </div>
                                    <div className="nearby-text">
                                        <strong>Metro Station</strong>
                                        <span>500 m away</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="nearby-icon">
                                        <i className="fas fa-shopping-bag"></i>
                                    </div>
                                    <div className="nearby-text">
                                        <strong>Shopping Complex</strong>
                                        <span>1.0 km away</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="nearby-icon">
                                        <i className="fas fa-hospital"></i>
                                    </div>
                                    <div className="nearby-text">
                                        <strong>City Hospital</strong>
                                        <span>1.5 km away</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section" id="faq">
                <div className="section-container">
                    <div className="section-header reveal">
                        <span className="section-label">FAQ</span>
                        <h2>Frequently Asked Questions</h2>
                        <p>Got questions? We've got answers</p>
                    </div>
                    <div className="faq-grid">
                        {faqData.map((faq, index) => (
                            <div
                                className={`faq-item reveal stagger-${(index % 3) + 1}${activeFaq === index ? " active" : ""
                                    }`}
                                key={index}
                            >
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="faq-answer">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;