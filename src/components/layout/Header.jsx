import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // 👇 navbar close function
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm w-100">
      <div className="container">
        <Link className="navbar-brand text-danger fw-bold fs-4" to="/" onClick={closeNavbar}>
          MOTI MAHAL
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  className="nav-link text-dark fw-medium"
                  to={link.path}
                  onClick={closeNavbar}   // 👈 MAGIC LINE
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/booktable" onClick={closeNavbar}>
            <button className="btn btn-danger rounded-pill px-4">
              Book A Table
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
