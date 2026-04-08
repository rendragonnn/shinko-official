import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const navClass = `nav ${scrolled ? 'nav--scrolled' : ''}`;
  const cartCount = getCartCount();
  const isActive = (path) => location.pathname === path ? 'nav--active' : '';

  return (
    <>
      <nav id="main-nav" className={navClass}>
        <Link to="/" className="nav__logo">
          <img src="/images/shinko-icon.png" alt="SHINKO" className="nav__logo-icon" />
          SHINKO OFFICIAL
        </Link>
        <ul className="nav__links">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/collection" className={isActive('/collection')}>Collection</Link></li>
          <li><Link to="/new-arrival" className={isActive('/new-arrival')}>New Arrival</Link></li>
          <li><Link to="/lookbook" className={location.pathname.includes('/lookbook') ? 'nav--active' : ''}>Lookbook</Link></li>
          <li><Link to="/story" className={isActive('/story')}>Story</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
          <li>
            <Link to="/cart" className="nav__cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="nav__cart-badge visible">{cartCount}</span>}
            </Link>
          </li>
        </ul>
        <button className="nav__burger" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/new-arrival">New Arrival</Link></li>
          <li><Link to="/lookbook">Lookbook</Link></li>
          <li><Link to="/story">Story</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
        </ul>
      </div>

      {/* DISCLAIMER BANNER */}
      <Disclaimer />
    </>
  );
}

function Disclaimer() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100,
      background: 'linear-gradient(135deg, rgba(200,255,0,0.12) 0%, rgba(6,6,6,0.97) 40%)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(200,255,0,0.2)',
      padding: '14px clamp(24px, 5vw, 80px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '16px', flexWrap: 'wrap'
    }}>
      <p style={{ fontSize: '0.7rem', color: 'var(--grey-light)', lineHeight: 1.6, maxWidth: '800px' }}>
        <span style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.1em' }}>⚠ DISCLAIMER:</span>{' '}
        This website is a <strong style={{ color: 'var(--white)' }}>concept / portfolio project</strong> and is not a real e-commerce store. 
        All products, prices, and brand elements shown are fictional and for demonstration purposes only. No real transactions can be made.
      </p>
      <button onClick={() => setVisible(false)} style={{
        background: 'var(--accent)', color: '#000', border: 'none',
        padding: '8px 20px', fontSize: '0.6rem', fontWeight: 800,
        letterSpacing: '0.15em', cursor: 'pointer', flexShrink: 0,
        borderRadius: '2px'
      }}>
        UNDERSTOOD
      </button>
    </div>
  );
}
