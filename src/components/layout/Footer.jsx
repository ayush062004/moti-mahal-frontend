// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row">
                    {/* Brand Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-danger fw-bold">MOTI MAHAL</h5>
                        <p className="small text-muted">
                            The Authentic Taste of India since 1947. <br />
                            Pioneers of Butter Chicken and Dal Makhani.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/menu" className="text-white text-decoration-none small">Menu</Link></li>
                            <li><Link to="/about" className="text-white text-decoration-none small">Our Story</Link></li>
                            <li><Link to="/locations" className="text-white text-decoration-none small">Locations</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                        <p className="small mb-1">
                            <i className="bi bi-geo-alt-fill me-2"></i> Find a Branch Near You
                        </p>
                        <p className="small mb-1">
                            <i className="bi bi-envelope-fill me-2"></i> info@motimahal.com
                        </p>
                        <p className="small">
                            <i className="bi bi-phone-fill me-2"></i> +91-XXX-XXXXXX
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-twitter fs-5"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="my-3 text-muted" />
                <div className="text-center small text-muted">
                    &copy; {new Date().getFullYear()} Moti Mahal. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;