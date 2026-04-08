import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../lib/data';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const SIZE_CHARTS = {
  Tops: { headers: ['', 'S', 'M', 'L', 'XL'], rows: [['Chest', '54', '57', '60', '63'], ['Length', '70', '72', '74', '76'], ['Shoulder', '48', '50', '52', '54'], ['Sleeve', '21', '22', '23', '24']] },
  Bottoms: { headers: ['', 'S', 'M', 'L', 'XL'], rows: [['Waist', '72-76', '76-80', '80-84', '84-88'], ['Hip', '100', '104', '108', '112'], ['Length', '100', '102', '104', '106'], ['Thigh', '60', '62', '64', '66']] },
  Outerwear: { headers: ['', 'S', 'M', 'L', 'XL'], rows: [['Chest', '56', '59', '62', '65'], ['Length', '68', '70', '72', '74'], ['Shoulder', '50', '52', '54', '56'], ['Sleeve', '63', '65', '67', '69']] },
  Accessories: null
};

const MATERIAL_INFO = {
  '100% Premium Cotton Fleece': { weight: '380gsm', composition: 'Japanese organic cotton', texture: 'Ultra-soft brushed interior, structured exterior', sustainability: 'OEKO-TEX® Standard 100 certified' },
  '220gsm Combed Cotton': { weight: '220gsm', composition: 'Ring-spun combed cotton', texture: 'Smooth, breathable, pre-shrunk', sustainability: 'Sustainable farming certified' },
  'Ripstop Nylon Blend': { weight: '200gsm', composition: '65% Nylon / 35% Cotton ripstop', texture: 'Durable, lightweight, anti-tear', sustainability: 'Recycled nylon blend' },
  'Heavyweight Nylon Shell, Satin Lining': { weight: '280gsm shell', composition: 'Premium military-grade nylon', texture: 'Water-resistant shell, luxurious satin interior', sustainability: 'PFC-free DWR coating' },
};

const CARE = {
  Tops: ['Machine wash cold, inside out', 'Do not bleach', 'Tumble dry low', 'Iron on low heat if needed', 'Do not dry clean'],
  Bottoms: ['Machine wash cold', 'Do not bleach', 'Hang dry recommended', 'Iron on medium heat'],
  Outerwear: ['Spot clean recommended', 'Machine wash cold on delicate cycle', 'Hang dry only', 'Store on hanger'],
  Accessories: ['Spot clean with damp cloth', 'Air dry only', 'Store in dust bag'],
};

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [btnText, setBtnText] = useState('ADD TO CART');
  const [openAccordion, setOpenAccordion] = useState('description');

  // Scroll to a specific accordion and open it
  const scrollToAccordion = (accordionId) => {
    setOpenAccordion(accordionId);
    // Wait for the accordion to open/render, then scroll
    setTimeout(() => {
      const el = document.getElementById(`accordion-${accordionId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  useEffect(() => {
    if (!product) navigate('/collection');
    window.scrollTo(0, 0);
    setSelectedSize(null);
    setBtnText('ADD TO CART');
    setOpenAccordion('description');
  }, [id]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) { setBtnText('— SELECT A SIZE —'); setTimeout(() => setBtnText('ADD TO CART'), 2000); return; }
    addToCart(product.id, selectedSize);
    setBtnText('ADDED ✓');
    setTimeout(() => setBtnText('ADD TO CART'), 2500);
  };

  const matInfo = MATERIAL_INFO[product.material] || { weight: 'Premium', composition: product.material, texture: 'Premium hand-feel', sustainability: 'Quality-focused' };
  const careList = CARE[product.category] || CARE.Accessories;
  const sizeChart = SIZE_CHARTS[product.category];
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* ===== HERO / MAIN SECTION ===== */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.1fr 1fr',
        minHeight: '100vh', maxWidth: '1440px', margin: '0 auto'
      }}>
        {/* LEFT — IMAGE (sticky) */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          style={{
            position: 'sticky', top: 0, height: '100vh',
            overflow: 'hidden', background: 'var(--bg-card)'
          }}
        >
          <img src={product.image} alt={product.name} style={{
            width: '100%', height: '100%', objectFit: 'cover'
          }} />
          {product.isNew && (
            <span style={{
              position: 'absolute', top: '100px', left: '24px',
              background: 'var(--accent)', color: '#000', padding: '8px 18px',
              fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em', zIndex: 2
            }}>NEW DROP</span>
          )}
          {/* Image counter (fake — single image) */}
          <div style={{
            position: 'absolute', bottom: '24px', right: '24px',
            background: 'rgba(6,6,6,0.6)', backdropFilter: 'blur(10px)',
            padding: '8px 16px', borderRadius: '100px',
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--grey-light)'
          }}>01 / 01</div>
        </motion.div>

        {/* RIGHT — DETAILS (scrollable) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ padding: 'clamp(100px, 10vw, 140px) clamp(32px, 4vw, 60px) 80px' }}
        >
          {/* Breadcrumb */}
          <div style={{
            display: 'flex', gap: '8px', fontSize: '0.6rem', letterSpacing: '0.15em',
            color: 'var(--grey)', marginBottom: '32px', flexWrap: 'wrap'
          }}>
            <Link to="/" style={{ transition: 'color 0.3s' }}>HOME</Link>
            <span style={{ color: 'var(--grey-border)' }}>/</span>
            <Link to="/collection" style={{ transition: 'color 0.3s' }}>COLLECTION</Link>
            <span style={{ color: 'var(--grey-border)' }}>/</span>
            <span style={{ color: 'var(--accent)' }}>{product.name}</span>
          </div>

          {/* Category label */}
          <span style={{
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase'
          }}>{product.category}</span>

          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900,
            letterSpacing: '-0.03em', lineHeight: 1.05, margin: '12px 0 16px'
          }}>{product.name}</h1>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>{product.priceDisplay}</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--grey)', letterSpacing: '0.1em' }}>{product.sku}</span>
          </div>

          {/* Short description */}
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--grey-light)', marginBottom: '40px', maxWidth: '480px' }}>
            {product.desc}
          </p>

          {/* ---- SIZE SELECTOR ---- */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--grey-light)' }}>SIZE</span>
              <button onClick={() => scrollToAccordion('sizechart')}
                style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer', textDecoration: 'underline' }}>
                SIZE GUIDE
              </button>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['S', 'M', 'L', 'XL'].map(size => (
                <button key={size} onClick={() => setSelectedSize(size)} style={{
                  flex: 1, minWidth: '60px', padding: '16px 0', textAlign: 'center',
                  background: selectedSize === size ? 'var(--accent)' : 'transparent',
                  color: selectedSize === size ? '#000' : 'var(--white)',
                  border: selectedSize === size ? '1px solid var(--accent)' : '1px solid var(--grey-dark)',
                  fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em',
                  cursor: 'pointer', transition: 'all 0.25s ease', borderRadius: '4px'
                }}>{size}</button>
              ))}
            </div>
          </div>

          {/* ---- ADD TO CART ---- */}
          <button onClick={handleAddToCart} style={{
            width: '100%', padding: '22px', marginBottom: '16px',
            background: btnText.includes('ADDED') ? 'var(--accent)' : 'var(--accent)',
            color: '#000', border: 'none', fontSize: '0.8rem', fontWeight: 800,
            letterSpacing: '0.2em', cursor: 'pointer', borderRadius: '4px',
            transition: 'all 0.3s', position: 'relative', overflow: 'hidden'
          }}
            onMouseEnter={e => e.target.style.boxShadow = '0 8px 40px rgba(200,255,0,0.3)'}
            onMouseLeave={e => e.target.style.boxShadow = 'none'}
          >{btnText}</button>

          {/* Quick perks */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {['Free shipping 500K+', '7-Day returns', 'Premium quality'].map(t => (
              <span key={t} style={{
                fontSize: '0.6rem', color: 'var(--grey)', letterSpacing: '0.1em',
                display: 'flex', alignItems: 'center', gap: '6px'
              }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>●</span> {t}
              </span>
            ))}
          </div>

          {/* ========== ACCORDION SECTIONS ========== */}
          <div style={{ borderTop: '1px solid var(--grey-border)', display: 'flex', flexDirection: 'column' }}>
            {/* Description */}
            <AccordionItem id="accordion-description" title="DESCRIPTION" isOpen={openAccordion === 'description'} onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                {[
                  { l: 'FIT', v: 'Oversized / Relaxed' },
                  { l: 'SEASON', v: 'SS26 — Spring/Summer 2026' },
                  { l: 'CATEGORY', v: product.category },
                  { l: 'ORIGIN', v: 'Designed in Jakarta, ID' },
                ].map(d => (
                  <div key={d.l}>
                    <p style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '4px' }}>{d.l}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)' }}>{d.v}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.8 }}>
                Every SHINKO garment is built with intention — merging urban culture, minimal design, and uncompromising quality. This piece features premium construction, reinforced stitching at stress points, and a silhouette designed for the streets. Cut for layering and everyday wear with a confident, relaxed attitude.
              </p>
            </AccordionItem>

            {/* Material */}
            <AccordionItem id="accordion-material" title="MATERIAL & FABRIC" isOpen={openAccordion === 'material'} onClick={() => scrollToAccordion('material')}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '20px' }}>{product.material}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                {[
                  { l: 'WEIGHT', v: matInfo.weight },
                  { l: 'COMPOSITION', v: matInfo.composition },
                  { l: 'HAND FEEL', v: matInfo.texture },
                  { l: 'SUSTAINABILITY', v: matInfo.sustainability },
                ].map(d => (
                  <div key={d.l} style={{ padding: '16px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius)', border: '1px solid var(--grey-border)' }}>
                    <p style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '6px' }}>{d.l}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.5 }}>{d.v}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--grey)', lineHeight: 1.8 }}>
                We source only the finest materials from trusted mills worldwide. Each fabric is selected for durability, comfort, and a premium feel that lasts through years of wear. Pre-washed to minimize shrinkage and maintain color fastness.
              </p>
            </AccordionItem>

            {/* Size Chart */}
            <AccordionItem id="accordion-sizechart" title="SIZE CHART" isOpen={openAccordion === 'sizechart'} onClick={() => scrollToAccordion('sizechart')}>
              {sizeChart ? (
                <>
                  <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', marginBottom: '20px', lineHeight: 1.6 }}>
                    All measurements in <strong style={{ color: 'var(--white)' }}>centimeters (cm)</strong>. 
                    SHINKO pieces are designed with an oversized/relaxed fit. Choose your regular size for the intended look.
                    {selectedSize && <span style={{ color: 'var(--accent)', fontWeight: 700 }}> Your size ({selectedSize}) is highlighted.</span>}
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid var(--grey-border)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '360px' }}>
                      <thead>
                        <tr>{sizeChart.headers.map((h, i) => (
                          <th key={i} style={{
                            padding: '14px 16px', textAlign: i === 0 ? 'left' : 'center',
                            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em',
                            color: h === selectedSize ? '#000' : 'var(--accent)',
                            background: h === selectedSize ? 'var(--accent)' : 'var(--bg-card)',
                            borderBottom: '1px solid var(--grey-border)', transition: 'all 0.3s'
                          }}>{h}</th>
                        ))}</tr>
                      </thead>
                      <tbody>
                        {sizeChart.rows.map((row, ri) => (
                          <tr key={ri}>{row.map((cell, ci) => {
                            const isHighlighted = ci > 0 && sizeChart.headers[ci] === selectedSize;
                            return (
                              <td key={ci} style={{
                                padding: '14px 16px', textAlign: ci === 0 ? 'left' : 'center',
                                fontSize: '0.8rem', fontWeight: isHighlighted ? 800 : (ci === 0 ? 600 : 400),
                                color: isHighlighted ? 'var(--accent)' : (ci === 0 ? 'var(--white)' : 'var(--grey-light)'),
                                background: isHighlighted ? 'rgba(200,255,0,0.05)' : (ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'),
                                borderBottom: ri < sizeChart.rows.length - 1 ? '1px solid var(--grey-border)' : 'none',
                                transition: 'all 0.3s'
                              }}>{cell}</td>
                            );
                          })}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ marginTop: '20px', padding: '16px 20px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius)', border: '1px solid var(--grey-border)' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px', letterSpacing: '0.1em' }}>💡 HOW TO MEASURE</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--grey-light)', lineHeight: 1.8 }}>
                      <strong style={{ color: 'var(--white)' }}>Chest:</strong> Measure across the fullest part, armpit to armpit. ·{' '}
                      <strong style={{ color: 'var(--white)' }}>Length:</strong> From highest shoulder point to hem. ·{' '}
                      <strong style={{ color: 'var(--white)' }}>Waist:</strong> Around natural waistline.
                    </p>
                  </div>
                </>
              ) : (
                <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)' }}>This product is one-size-fits-all / adjustable.</p>
              )}
            </AccordionItem>

            {/* Care */}
            <AccordionItem id="accordion-care" title="CARE INSTRUCTIONS" isOpen={openAccordion === 'care'} onClick={() => scrollToAccordion('care')}>
              {careList.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 0',
                  borderBottom: i < careList.length - 1 ? '1px solid var(--grey-border)' : 'none'
                }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'var(--bg-elevated)', border: '1px solid var(--grey-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', fontWeight: 800, color: 'var(--accent)', flexShrink: 0
                  }}>{i + 1}</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)' }}>{item}</p>
                </div>
              ))}
            </AccordionItem>
          </div>
        </motion.div>
      </div>

      {/* ===== RELATED PRODUCTS ===== */}
      {related.length > 0 && (
        <Reveal>
          <div style={{
            padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px) 80px',
            borderTop: '1px solid var(--grey-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900 }}>YOU MAY ALSO LIKE</h3>
              <Link to="/collection" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)' }}>VIEW ALL →</Link>
            </div>
            <div className="product-grid">
              {related.map(rp => (
                <Link to={`/product/${rp.id}`} key={rp.id} className="product-card">
                  <div className="product-card__image"><img src={rp.image} alt={rp.name} loading="lazy" /></div>
                  <div className="product-card__info"><h3>{rp.name}</h3><p>{rp.priceDisplay}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}

/* ===== ACCORDION COMPONENT ===== */
function AccordionItem({ id, title, isOpen, onClick, children }) {
  return (
    <div id={id} style={{ borderBottom: '1px solid var(--grey-border)', scrollMarginTop: '20px' }}>
      <button onClick={onClick} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white)'
      }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em' }}>{title}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}
          style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 300 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: '28px' }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
