import React from 'react';
import './Hero.css';  // Optional: for hover/animation styles

function Hero() {
  return (
    <div
      className="bg-dark text-white text-center d-flex align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="container hero-content">
        <h1 className="display-4 fw-bold hero-title">Hi, I'm Anshika Yadav</h1>
        <p className="lead hero-subtitle">
          Frontend Developer | Full Stack & DSA Learner | Passionate CSE Student 
        </p>

        {/* Buttons */}
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn btn-primary px-4 py-2 rounded-pill hero-btn">
            View My Work
          </a>
          <a
            href="/Anshika_Yadav_Resume.pdf"  // Replace with actual resume link
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary px-4 py-2 rounded-pill hero-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
