import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { PRODUCTS } from '../lib/data';

function RevealOnScroll({ children, delay = 0, className, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
}

export default function NewArrival() {
  const newProducts = PRODUCTS.filter(p => p.isNew);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Split into hero product and the rest
  const heroProduct = newProducts[0];
  const gridProducts = newProducts.slice(1);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

      {/* ========== CINEMATIC HERO ========== */}
      <section ref={heroRef} style={{
        position: 'relative', height: '100vh', minHeight: '600px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background with parallax */}
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY }}>
          <img src={heroProduct.image} alt="" style={{
            width: '100%', height: '120%', objectFit: 'cover',
            filter: 'brightness(0.3) saturate(0.6) blur(2px)'
          }} />
        </motion.div>

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(6,6,6,0.4) 0%, rgba(6,6,6,0.2) 40%, rgba(6,6,6,0.95) 100%)'
        }} />

        {/* Scanlines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)'
        }} />

        {/* Content */}
        <motion.div style={{ position: 'relative', zIndex: 3, textAlign: 'center', opacity: heroOpacity, padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              display: 'inline-block', padding: '8px 24px',
              border: '1px solid var(--accent)', borderRadius: '100px',
              marginBottom: '28px'
            }}
          >
            <span style={{
              fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.4em',
              color: 'var(--accent)', textTransform: 'uppercase'
            }}>
              ● JUST DROPPED
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em',
              marginBottom: '20px',
              textShadow: '0 4px 80px rgba(0,0,0,0.5)'
            }}
          >
            NEW<br />ARRIVAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              fontSize: '0.85rem', letterSpacing: '0.3em',
              color: 'var(--grey-light)', fontWeight: 400, marginBottom: '36px'
            }}
          >
            SS26 — FRESH OFF THE LINE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a href="#drops" style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '18px 48px', background: 'var(--accent)', color: '#000',
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em',
              border: 'none', textDecoration: 'none', transition: 'all 0.3s',
              boxShadow: '0 0 40px rgba(200, 255, 0, 0.2)'
            }}>
              EXPLORE DROPS ↓
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <span>SCROLL</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ========== FEATURED NEW PIECE (Large Spotlight) ========== */}
      <section id="drops" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)' }}>
        <RevealOnScroll>
          <span className="section__label">SS26 — HERO PIECE</span>
          <h2 className="section__title" style={{ marginBottom: '48px' }}>THE DROP</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <Link to={`/product/${heroProduct.id}`} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px', textDecoration: 'none', color: 'inherit',
            background: 'var(--bg-card)', border: '1px solid var(--grey-border)',
            borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            transition: 'border-color 0.4s, box-shadow 0.4s'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 80px rgba(200, 255, 0, 0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--grey-border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
              <img src={heroProduct.image} alt={heroProduct.name} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.8s ease'
              }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{
              padding: 'clamp(32px, 4vw, 60px)', display: 'flex',
              flexDirection: 'column', justifyContent: 'center'
            }}>
              <span style={{
                display: 'inline-block', background: 'var(--accent)', color: '#000',
                padding: '6px 14px', fontSize: '0.55rem', fontWeight: 800,
                letterSpacing: '0.2em', borderRadius: '2px', marginBottom: '20px',
                width: 'fit-content'
              }}>NEW DROP</span>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                {heroProduct.name}
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '24px' }}>
                {heroProduct.priceDisplay}
              </p>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--grey-light)', marginBottom: '32px', maxWidth: '440px' }}>
                {heroProduct.desc}
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                color: 'var(--accent)', textTransform: 'uppercase'
              }}>
                SHOP NOW →
              </div>
            </div>
          </Link>
        </RevealOnScroll>
      </section>

      {/* ========== REMAINING NEW ARRIVALS GRID ========== */}
      <section style={{ padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)' }}>
        <RevealOnScroll>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '48px', flexWrap: 'wrap', gap: '16px'
          }}>
            <div>
              <span className="section__label">MORE NEW DROPS</span>
              <h2 className="section__title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                FRESH<br />ARRIVALS
              </h2>
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--grey)', letterSpacing: '0.15em' }}>
              {gridProducts.length} NEW PIECES
            </span>
          </div>
        </RevealOnScroll>

        <div className="product-grid">
          {gridProducts.map((product, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div key={product.id} ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/product/${product.id}`} className="product-card">
                  <div className="product-card__image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: 'var(--accent)', color: '#000', padding: '4px 10px',
                      fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.15em',
                      borderRadius: '2px', zIndex: 2
                    }}>NEW</span>
                  </div>
                  <div className="product-card__info">
                    <h3>{product.name}</h3>
                    <p>{product.priceDisplay}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <RevealOnScroll>
        <section style={{
          margin: '0 clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)',
          padding: 'clamp(48px, 6vw, 80px)',
          background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(200,255,0,0.03) 100%)',
          border: '1px solid var(--grey-border)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glow orb */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900,
              marginBottom: '16px', letterSpacing: '-0.02em'
            }}>
              DON'T MISS THE DROP
            </h2>
            <p style={{
              fontSize: '0.85rem', color: 'var(--grey-light)',
              marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px'
            }}>
              New pieces sell out fast. Browse the full collection before they're gone.
            </p>
            <Link to="/collection" className="hero__cta">VIEW FULL COLLECTION</Link>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
