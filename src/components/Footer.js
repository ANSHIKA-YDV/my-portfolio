import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-info py-4 mt-auto shadow-sm">
      <div className="container">
        {/* Social Links */}
        <div className="mb-3 d-flex justify-content-center gap-4 fs-4">
          <a
            href="https://github.com/ANSHIKA-YDV"
            target="_blank"
            rel="noreferrer"
            className="text-info"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anshika-yadav-aa4263257/"
            target="_blank"
            rel="noreferrer"
            className="text-info"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <p className="mb-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="mb-0">Developed by Anshika Yadav</p>
      </div>
    </footer>
  );
}

export default Footer;
