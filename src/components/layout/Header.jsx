import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // Links ka array
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About Us", path: "/about" },
        { name: "Locations", path: "/locations" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        // Bootstrap Navbar classes use kiye
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                {/* Logo Section */}
                <Link className="navbar-brand text-danger fw-bold fs-4" to="/">
                    MOTI MAHAL
                </Link>

                {/* Toggler Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.name}>
                                <Link
                                    className="nav-link text-dark fw-medium"
                                    aria-current="page"
                                    to={link.path}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Reservation Button */}
                    <button className="btn btn-danger rounded-pill px-4">
                        Book A Table
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;