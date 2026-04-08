import React from 'react';
import { motion } from 'framer-motion';

const sizeData = {
  tops: {
    title: 'TOPS (TEE, HOODIE, LONGSLEEVE)',
    headers: ['SIZE', 'CHEST (cm)', 'LENGTH (cm)', 'SHOULDER (cm)', 'SLEEVE (cm)'],
    rows: [
      ['S', '54', '70', '48', '21'],
      ['M', '57', '72', '50', '22'],
      ['L', '60', '74', '52', '23'],
      ['XL', '63', '76', '54', '24'],
    ]
  },
  bottoms: {
    title: 'BOTTOMS (CARGO, JOGGER, SHORTS)',
    headers: ['SIZE', 'WAIST (cm)', 'HIP (cm)', 'LENGTH (cm)', 'THIGH (cm)'],
    rows: [
      ['S', '72-76', '100', '100', '60'],
      ['M', '76-80', '104', '102', '62'],
      ['L', '80-84', '108', '104', '64'],
      ['XL', '84-88', '112', '106', '66'],
    ]
  }
};

function SizeTable({ data }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '0.05em' }}>{data.title}</h3>
      <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid var(--grey-border)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
          <thead>
            <tr>{data.headers.map(h => (
              <th key={h} style={{
                padding: '14px 20px', textAlign: 'left',
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em',
                color: 'var(--accent)', borderBottom: '1px solid var(--grey-border)',
                background: 'var(--bg-card)'
              }}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < data.rows.length - 1 ? '1px solid var(--grey-border)' : 'none' }}>
                {row.map((cell, j) => (
                  <td key={j} style={{
                    padding: '14px 20px', fontSize: '0.8rem',
                    color: j === 0 ? 'var(--white)' : 'var(--grey-light)',
                    fontWeight: j === 0 ? 700 : 400,
                    background: i % 2 === 0 ? 'transparent' : 'var(--bg-card)'
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SizeGuide() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ padding: '0 clamp(24px, 5vw, 80px)', marginBottom: '60px' }}
      >
        <span className="section__label">FIT REFERENCE</span>
        <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>SIZE GUIDE</h1>
        <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--grey)', maxWidth: '500px', lineHeight: 1.7 }}>
          All SHINKO pieces feature an oversized / relaxed fit. We recommend choosing your regular size for the intended look.
        </p>
      </motion.div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <SizeTable data={sizeData.tops} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <SizeTable data={sizeData.bottoms} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--grey-border)', borderRadius: 'var(--radius)', padding: '28px 32px' }}
        >
          <h3 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '12px' }}>💡 HOW TO MEASURE</h3>
          <ul style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 2, paddingLeft: '20px' }}>
            <li><strong style={{ color: 'var(--white)' }}>Chest:</strong> Measure across the fullest part of your chest.</li>
            <li><strong style={{ color: 'var(--white)' }}>Length:</strong> Measure from the highest point of the shoulder to the bottom hem.</li>
            <li><strong style={{ color: 'var(--white)' }}>Waist:</strong> Measure around your natural waistline.</li>
            <li><strong style={{ color: 'var(--white)' }}>Hip:</strong> Measure around the fullest part of your hips.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
