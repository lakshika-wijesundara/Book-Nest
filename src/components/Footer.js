import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h1>BookNest</h1>
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Discover and share the joy of reading. Our platform connects book
            lovers and fosters a community built on stories and imagination.
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/browse">Browse Books</a></li>
            <li><a href="/write">Write</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <ul>
            <li><a href="mailto:support@bookshare.com">✉ Email: support@bookshare.com</a></li>
            <li>📞 Phone: +1 (555) 123-4567</li>
            <li>🌍 Location: 123 Book Street, Library City, World</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>© 2025 BookNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
