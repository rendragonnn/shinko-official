import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

export default function ProductCard({ product, index, margin = "-60px", delayMult = 0.08 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 4) * delayMult, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/product/${product.id}`} className="product-card">
        <div className="product-card__image">
          <img src={product.image} alt={product.name} loading="lazy" />
          {product.isNew && (
            <span style={{
              position: 'absolute', top: '12px', left: '12px',
              background: 'var(--accent)', color: '#000', padding: '4px 10px',
              fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.15em',
              borderRadius: '2px', zIndex: 2
            }}>NEW</span>
          )}
        </div>
        <div className="product-card__info">
          <h3>{product.name}</h3>
          <p>{product.priceDisplay}</p>
        </div>
      </Link>
    </motion.div>
  );
}
