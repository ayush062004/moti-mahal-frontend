// src/pages/Contact.jsx

import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page">
            
            {/* Title Banner */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-danger">
                        Get In Touch
                    </h1>
                    <p className="lead text-muted mt-3">
                        We are happy to answer your questions and assist with reservations.
                    </p>
                </div>
            </section>

            {/* Main Contact Section (Two Columns) */}
            <section className="container my-5 py-5">
                <div className="row g-5">
                    
                    {/* Left Column: Contact Details & Map */}
                    <div className="col-lg-5">
                        <h2 className="fw-bold mb-4 text-dark">
                            Reach Out To Us
                        </h2>
                        
                        {/* Contact Info */}
                        <div className="mb-4">
                            <h5 className="fw-bold text-danger">Head Office</h5>
                            <p className="text-muted mb-1">
                                <i className="bi bi-geo-alt-fill me-2"></i> 3704, Netaji Subhash Marg, Daryaganj, New Delhi
                            </p>
                            <p className="text-muted mb-1">
                                <i className="bi bi-envelope-fill me-2"></i> info@motimahal.com
                            </p>
                            <p className="text-muted mb-1">
                                <i className="bi bi-telephone-fill me-2"></i> +91-11-2327-3073 (General Inquiries)
                            </p>
                        </div>

                        {/* Hours of Operation */}
                        <div className="mb-4">
                            <h5 className="fw-bold text-danger">Hours of Operation</h5>
                            <p className="text-muted mb-1">
                                <i className="bi bi-clock-fill me-2"></i> Lunch: 12:30 PM – 4:00 PM
                            </p>
                            <p className="text-muted mb-1">
                                <i className="bi bi-clock-fill me-2"></i> Dinner: 7:00 PM – 11:30 PM
                            </p>
                            <p className="text-muted">
                                (Hours may vary by location)
                            </p>
                        </div>
                        
                        {/* Map Embed Placeholder */}
                        <div className="mt-5">
                            <h5 className="fw-bold mb-3 text-dark">Find Our Original Location</h5>
                            <div className="ratio ratio-16x9 shadow-sm">
                                <iframe
                                    src="http://googleusercontent.com/maps.google.com/4"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Moti Mahal Daryaganj Map"
                                ></iframe>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Contact Form Placeholder */}
                    <div className="col-lg-7">
                        <div className="card shadow-lg p-4 bg-light border-0">
                            <h3 className="fw-bold mb-4 text-center">
                                Send Us a Message
                            </h3>
                            <form>
                                {/* Name Field */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-medium">Full Name</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                {/* Email Field */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                {/* Subject/Query Type */}
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label fw-medium">Subject</label>
                                    <select className="form-select" id="subject">
                                        <option>Reservation Inquiry</option>
                                        <option>Franchise Opportunity</option>
                                        <option>General Feedback</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                {/* Message Field */}
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-medium">Your Message</label>
                                    <textarea className="form-control" id="message" rows="4" required></textarea>
                                </div>
                                
                                {/* Static Submit Button */}
                                <div className="d-grid mt-4">
                                    <button type="submit" className="btn btn-danger btn-lg fw-bold">
                                        Submit Inquiry (Static)
                                    </button>
                                </div>
                                <p className="text-center small text-muted mt-2">
                                    *Note: This form is currently static and does not send data.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;