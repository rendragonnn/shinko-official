import React from 'react';
import { motion } from 'framer-motion';

export default function Shipping() {
  const sections = [
    {
      title: 'DOMESTIC SHIPPING',
      items: [
        { label: 'JABODETABEK', value: '1-2 business days — FREE for orders above IDR 500.000' },
        { label: 'JAVA', value: '2-3 business days — IDR 15.000' },
        { label: 'OUTSIDE JAVA', value: '3-5 business days — IDR 25.000' },
        { label: 'REMOTE AREAS', value: '5-7 business days — IDR 35.000' },
      ]
    },
    {
      title: 'INTERNATIONAL SHIPPING',
      items: [
        { label: 'SOUTHEAST ASIA', value: '5-7 business days — IDR 150.000' },
        { label: 'REST OF WORLD', value: '7-14 business days — IDR 250.000' },
      ]
    },
    {
      title: 'ORDER TRACKING',
      items: [
        { label: 'TRACKING NUMBER', value: 'Will be sent to your email within 24 hours after shipment.' },
        { label: 'COURIER PARTNERS', value: 'JNE, J&T Express, SiCepat, DHL (International)' },
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ padding: '0 clamp(24px, 5vw, 80px)', marginBottom: '60px' }}
      >
        <span className="section__label">DELIVERY INFO</span>
        <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>SHIPPING</h1>
      </motion.div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
        {sections.map((section, si) => (
          <motion.div key={section.title}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.2, duration: 0.8 }}
            style={{ marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', color: 'var(--accent)' }}>{section.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {section.items.map(item => (
                <div key={item.label} style={{
                  padding: '20px 24px', background: 'var(--bg-card)',
                  border: '1px solid var(--grey-border)', borderRadius: 'var(--radius)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  flexWrap: 'wrap', gap: '12px'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>{item.label}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--grey-light)', textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
