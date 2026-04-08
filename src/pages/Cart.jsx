import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../lib/data';
import { motion } from 'framer-motion';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  
  const formatPrice = (num) => 'IDR ' + num.toLocaleString('id-ID');

  return (
    <div style={{ paddingTop: '120px', minHeight: '80vh', padding: '120px clamp(24px, 5vw, 80px) 60px' }}>
      <h1 className="section__title" style={{ fontSize: '3rem', marginBottom: '40px' }}>YOUR CART</h1>
      
      {cartItems.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p style={{ color: 'var(--grey)', marginBottom: '24px' }}>YOUR CART IS CURRENTLY EMPTY.</p>
          <Link to="/collection" className="hero__cta">CONTINUE SHOPPING</Link>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '60px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {cartItems.map((item, index) => {
              const product = PRODUCTS.find(p => p.id === item.id);
              if (!product) return null;
              return (
                <div key={`${item.id}-${item.size}`} style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--grey-border)', paddingBottom: '24px' }}>
                  <img src={product.image} alt={product.name} style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{product.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--grey)', marginBottom: '4px' }}>SIZE: {item.size}</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>{product.priceDisplay}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid var(--grey-border)', padding: '8px 16px', borderRadius: '24px' }}>
                      <button onClick={() => updateQuantity(item.id, item.size, item.qty - 1)} style={{ background: 'none', border: 'none', color: '#fff' }}>−</button>
                      <span style={{ fontSize: '0.9rem' }}>{item.qty}</span>
                      <button onClick={() => updateQuantity(item.id, item.size, item.qty + 1)} style={{ background: 'none', border: 'none', color: '#fff' }}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id, item.size)} style={{ background: 'none', border: 'none', color: 'var(--red)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                      REMOVE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div style={{ background: 'var(--grey-dark)', padding: '32px', borderRadius: '4px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', borderBottom: '1px solid var(--grey-border)', paddingBottom: '12px' }}>SUMMARY</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--grey)' }}>
              <span>SUBTOTAL</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', fontWeight: 700, fontSize: '1.2rem' }}>
              <span>TOTAL</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
            <button className="hero__cta" style={{ width: '100%', textAlign: 'center' }}>CHECKOUT</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
