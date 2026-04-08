import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">SHINKO OFFICIAL</h2>
          <p className="footer__tagline">DEFINE YOUR IDENTITY</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>SHOP</h4>
            <Link to="/collection">Collection</Link>
            <Link to="/new-arrival">New Arrival</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="footer__col">
            <h4>BRAND</h4>
            <Link to="/lookbook">Lookbook</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/campaigns">Campaigns</Link>
          </div>
          <div className="footer__col">
            <h4>HELP</h4>
            <Link to="/size-guide">Size Guide</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="footer__divider"></div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} SHINKO OFFICIAL. All rights reserved.</p>
        <div className="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L20 4h-2l-5.2 6.3L9 4H4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
