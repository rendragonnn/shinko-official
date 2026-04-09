import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { PRODUCTS } from '../lib/data';
import ProductCard from '../components/ProductCard';

function RevealSection({ children, className, style, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}



export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const dropProducts = PRODUCTS.filter(p =>
    ["shadow-hoodie", "core-tee", "tactical-cargo", "noir-bomber"].includes(p.id)
  );

  return (
    <>
      {/* ========== BENTO HERO ========== */}
      <section id="hero" style={{ paddingTop: '90px', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
        <div className="bento-grid bento-grid--hero" style={{ flex: 1, margin: '0 var(--side-pad)', borderRight: '1px solid var(--grey-dark)' }}>
          <div className="bento-cell bento-cell--dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.5em', marginBottom: '24px' }}>DROP 001 // SS26</p>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 120px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
                SHINKO<br/>OFFICIAL<br/>
                <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)' }}>IDENTITY.</span>
              </h1>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} style={{ marginTop: '40px' }}>
              <p style={{ maxWidth: '400px', fontSize: '0.8rem', color: 'var(--white)', lineHeight: 1.6, marginBottom: '32px' }}>
                Born from the streets. A premium label for those who refuse to blend in. Uncompromising aesthetic.
              </p>
              <Link to="/collection" className="hero__cta" style={{ border: '1px solid var(--accent)', background: 'var(--bg-primary)', color: 'var(--accent)' }}>SHOP COLLECTION</Link>
            </motion.div>
          </div>
          
          <div className="bento-cell bento-cell--image">
            <motion.div style={{ width: '100%', height: '100%', position: 'relative' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
              <img src="/images/hero.png" alt="Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) grayscale(0.3)' }} />
              <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--accent)', color: '#000', padding: '12px 24px', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em' }}>
                LIVE NOW
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE BRUTAL ========== */}
      <div className="marquee">
        <div className="marquee__track" style={{ borderTop: '1px solid var(--grey-dark)', borderBottom: '1px solid var(--grey-dark)', background: 'var(--accent)', color: '#000', padding: '8px 0', fontSize: '1.2rem', fontWeight: 900 }}>
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>SHINKO OFFICIAL // NO COMPROMISE // DEFINE YOUR IDENTITY // </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ========== STATEMENT ========== */}
      <div className="statement">
        <p className="statement__text revealed">DEFINE YOUR IDENTITY</p>
      </div>

      {/* ========== NEW DROP ========== */}
      <section id="new-drop" className="section" style={{ background: 'var(--bg-primary)' }}>
        <RevealSection>
          <div className="section__header">
            <span className="section__label">001 — NEW DROP</span>
            <h2 className="section__title">LATEST<br />COLLECTION</h2>
          </div>
        </RevealSection>
        <div className="product-grid">
          {dropProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <RevealSection style={{ textAlign: 'center', marginTop: '56px' }} delay={0.3}>
          <Link to="/collection" className="hero__cta cta--outline">BROWSE ALL</Link>
        </RevealSection>
      </section>

      <div className="section-divider"></div>

      {/* ========== LOOKBOOK TEASER ========== */}
      <section id="lookbook" className="section lookbook">
        <RevealSection>
          <div className="section__header">
            <span className="section__label">002 — LOOKBOOK</span>
            <h2 className="section__title">SS26<br />CAMPAIGN</h2>
          </div>
        </RevealSection>
        <div className="lookbook__grid">
          {[
            { img: '/images/lookbook-1.png', title: 'URBAN IDENTITY' },
            { img: '/images/lookbook-2.png', title: 'SHADOW SERIES' },
            { img: '/images/lookbook-3.png', title: 'NIGHT PROTOCOL' },
          ].map((item, i) => (
            <RevealSection
              key={i}
              className={`lookbook__item ${i === 0 ? 'lookbook__item--large' : ''}`}
              delay={i * 0.15}
            >
              <img src={item.img} alt={`Lookbook ${item.title}`} loading="lazy" />
              <div className="lookbook__overlay-text">
                <span>{item.title}</span>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ========== BRAND QUOTE ========== */}
      <section style={{
        position: 'relative', minHeight: '80vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '0 var(--side-pad)'
      }}>
        <div style={{
          position: 'absolute', inset: 0
        }}>
          <img
            src="/images/brand-story-bg.png"
            alt=""
            style={{
              width: '100%', height: '130%',
              objectFit: 'cover', opacity: 0.2,
              position: 'absolute', top: '-15%',
              filter: 'brightness(0.6) saturate(0.5)'
            }}
          />
        </div>
        <RevealSection style={{
          position: 'relative', zIndex: 1,
          maxWidth: '800px', textAlign: 'center',
          padding: '60px 0'
        }}>
          <span className="section__label">003 — OUR STORY</span>
          <blockquote style={{ margin: '32px 0' }}>
            <p style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.01em'
            }}>
              "Streetwear is more<br />than clothing.<br />
              <strong style={{ color: 'var(--accent)' }}>It is identity.</strong>"
            </p>
          </blockquote>
          <p style={{
            fontSize: '0.85rem', lineHeight: 1.8,
            color: 'var(--grey)', fontWeight: 400, maxWidth: '560px', margin: '0 auto'
          }}>
            Born from the streets, SHINKO OFFICIAL is a premium label for those
            who refuse to blend in. Every piece is crafted with intention —
            merging urban culture, minimal design, and uncompromising quality.
          </p>
        </RevealSection>
      </section>

      {/* ========== COMMUNITY ========== */}
      <section id="community" className="section community">
        <RevealSection>
          <div className="community__content">
            <span className="section__label">005 — COMMUNITY</span>
            <h2 className="community__title">JOIN THE<br />SHINKO<br />COMMUNITY</h2>
            <p className="community__subtitle">Be the first to access exclusive drops, campaigns, and events.</p>
            <form className="community__form" onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
            }}>
              <div className="community__input-group">
                <input type="email" placeholder="YOUR EMAIL" required />
                <button type="submit">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
