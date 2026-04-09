import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [step, setStep] = useState(1); // 1 = Form, 2 = Success
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    setStep(2);
    // Clear cart or trigger context dispatch in a real app
  };

  if (step === 2) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', background: 'var(--bg-elevated)', padding: '60px 40px', border: '1px solid var(--accent)', maxWidth: '500px', width: '100%' }}
        >
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>✓</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', letterSpacing: '-0.02em', color: 'var(--accent)' }}>ORDER CONFIRMED</h2>
          <p style={{ color: 'var(--grey-light)', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '32px' }}>
            Thank you for securing your piece. <br/> Your order #SH-{Math.floor(Math.random() * 9000) + 1000} is being processed.
          </p>
          <button onClick={() => navigate('/')} className="hero__cta" style={{ width: '100%' }}>
            RETURN TO HOMEPAGE
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="section" style={{ marginTop: '80px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="section__label">SECURE CHECKOUT</span>
        <h1 className="section__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '40px' }}>
          DELIVERY DETAILS
        </h1>
        
        <form onSubmit={handleCheckout} style={{ display: 'grid', gap: '24px', background: 'var(--bg-card)', padding: '40px', border: '1px solid var(--grey-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="community__input-group" style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--grey)', marginBottom: '8px' }}>FIRST NAME</label>
              <input type="text" required placeholder="John" style={{ width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--grey-dark)', color: 'var(--white)', outline: 'none' }} />
            </div>
            <div className="community__input-group" style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--grey)', marginBottom: '8px' }}>LAST NAME</label>
              <input type="text" required placeholder="Doe" style={{ width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--grey-dark)', color: 'var(--white)', outline: 'none' }} />
            </div>
          </div>
          
          <div className="community__input-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--grey)', marginBottom: '8px' }}>EMAIL ADDRESS</label>
            <input type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--grey-dark)', color: 'var(--white)', outline: 'none' }} />
          </div>

          <div className="community__input-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--grey)', marginBottom: '8px' }}>SHIPPING ADDRESS</label>
            <input type="text" required placeholder="123 Streetwear Ave" style={{ width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--grey-dark)', color: 'var(--white)', outline: 'none' }} />
          </div>

          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--grey-border)' }}>
            <button type="submit" className="hero__cta" style={{ width: '100%' }}>
              PLACE ORDER (MOCK)
            </button>
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.65rem', color: 'var(--grey)' }}>
              Disclaimer: This is a concept project. No real transactions will occur.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
