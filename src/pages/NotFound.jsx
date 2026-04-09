import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', color: 'var(--accent)', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
          ERROR 404
        </span>
        <h1 style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', lineHeight: 0.8, marginBottom: '24px', letterSpacing: '-0.05em' }}>
          NOT<br />FOUND
        </h1>
        <p style={{ color: 'var(--grey)', maxWidth: '400px', margin: '0 auto 40px', fontSize: '0.8rem', lineHeight: 1.6 }}>
          The item or page you are looking for has been dropped, moved, or does not exist in our current collection.
        </p>
        <Link to="/" className="hero__cta" style={{ display: 'inline-block' }}>
          RETURN TO ARCHIVE
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
