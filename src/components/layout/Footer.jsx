// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container-fluid px-5 text-center">
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
                            <li><Link to="/location" className="text-white text-decoration-none small">Locations</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                        
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

  <div className="d-flex gap-4 ms-5 text-center align-items-start">
    
    <div>
      <a href="https://www.facebook.com/people/Moti-mahal-in-aonang-krabi-Thailand/100063633083009/#" className="text-decoration-none">
        <img
          src="https://cdn.simpleicons.org/facebook/ffffff"
          alt="Facebook"
          width="26"
          height="26"
        />
      </a>
      <div className="small text-muted mt-1">Facebook</div>
    </div>

    <div>
      <a href="#" className="text-decoration-none">
        <img
          src="https://cdn.simpleicons.org/instagram/ffffff"
          alt="Instagram"
          width="26"
          height="26"
        />
      </a>
      <div className="small text-muted mt-1">Instagram</div>
    </div>

    <div>
      <a href="https://share.google/z7bB2wiltr9mZIvB8" className="text-decoration-none">
        <img
          src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
          alt="Google"
          width="26"
          height="26"
        />
      </a>
      <div className="small text-muted mt-1">Twitter</div>
    </div>

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