import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css'; // Optional: if you want custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-info" href="#hero">
          MyPortfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            {/* Navigation Links */}
            <li className="nav-item">
              <a className="nav-link text-info fw-semibold" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info fw-semibold" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info fw-semibold" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
