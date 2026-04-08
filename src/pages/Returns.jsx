import React from 'react';
import { motion } from 'framer-motion';

export default function Returns() {
  const policies = [
    { icon: '📦', title: 'RETURN WINDOW', desc: 'Returns accepted within 7 days of delivery. Items must be unworn, unwashed, and in original packaging with all tags attached.' },
    { icon: '🔄', title: 'EXCHANGE', desc: 'We offer free size exchanges for domestic orders. Simply contact us within 7 days and we will arrange a pickup.' },
    { icon: '💰', title: 'REFUND', desc: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. Refund will be issued to original payment method.' },
    { icon: '🚫', title: 'NON-RETURNABLE', desc: 'Sale items, accessories (caps, bags), and items that have been worn, washed, or altered are not eligible for return.' },
  ];

  const steps = [
    'Contact us via email or WhatsApp with your order number.',
    'Receive a return authorization and shipping label.',
    'Pack item in original condition with tags attached.',
    'Ship the item back using the provided label.',
    'Receive your refund or exchange within 5-7 business days.',
  ];

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ padding: '0 clamp(24px, 5vw, 80px)', marginBottom: '60px' }}
      >
        <span className="section__label">POLICY</span>
        <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>RETURNS</h1>
      </motion.div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
        {/* Policy Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '60px' }}>
          {policies.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              style={{
                padding: '28px', background: 'var(--bg-card)',
                border: '1px solid var(--grey-border)', borderRadius: 'var(--radius)'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.7 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '24px', color: 'var(--accent)' }}>RETURN PROCESS</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: '20px 0',
                borderBottom: i < steps.length - 1 ? '1px solid var(--grey-border)' : 'none'
              }}>
                <span style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--accent)', color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 800, flexShrink: 0
                }}>{i + 1}</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--grey-light)', lineHeight: 1.6, paddingTop: '4px' }}>{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
