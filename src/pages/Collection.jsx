import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { PRODUCTS } from '../lib/data';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];



export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div style={{ paddingTop: '130px', paddingBottom: '80px', minHeight: '100vh' }}>
      {/* Hero Header */}
      <div style={{ padding: '0 clamp(24px, 5vw, 80px)', marginBottom: '20px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="section__label">ALL PRODUCTS</span>
          <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>COLLECTION</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--grey)', maxWidth: '500px', lineHeight: 1.7 }}
        >
          Explore the complete SHINKO OFFICIAL catalog — from signature silhouettes to limited drops.
        </motion.p>
      </div>

      {/* Stats + Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        style={{
          padding: '0 clamp(24px, 5vw, 80px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '20px', marginBottom: '48px'
        }}
      >
        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '10px 22px',
              background: activeCategory === cat ? 'var(--accent)' : 'transparent',
              color: activeCategory === cat ? '#000' : 'var(--grey-light)',
              border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid var(--grey-dark)',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em',
              cursor: 'pointer', transition: 'all 0.3s', borderRadius: '100px',
              textTransform: 'uppercase'
            }}>
              {cat}
            </button>
          ))}
        </div>
        <span style={{ fontSize: '0.7rem', color: 'var(--grey)', letterSpacing: '0.15em' }}>
          {filtered.length} PRODUCT{filtered.length !== 1 ? 'S' : ''}
        </span>
      </motion.div>

      {/* Product Grid */}
      <div className="product-grid" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--grey)' }}>
          <p style={{ fontSize: '1rem', marginBottom: '16px' }}>No products found in this category.</p>
          <button onClick={() => setActiveCategory('All')} className="hero__cta cta--outline">VIEW ALL</button>
        </div>
      )}
    </div>
  );
}
