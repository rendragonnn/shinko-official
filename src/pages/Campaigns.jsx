import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const campaigns = [
  { id: 1, title: 'SS26 — URBAN IDENTITY', image: '/images/lookbook-1.png', desc: 'The city is our canvas. Shot across Jakarta\'s most iconic streets.' },
  { id: 2, title: 'SS26 — SHADOW SERIES', image: '/images/lookbook-2.png', desc: 'When light fades, identity sharpens. A monochrome exploration.' },
  { id: 3, title: 'SS26 — NIGHT PROTOCOL', image: '/images/lookbook-3.png', desc: 'The night belongs to those who refuse to rest.' },
  { id: 4, title: 'SS26 — THE CAMPAIGN', image: '/images/hero.png', desc: 'Our definitive statement. Shot across three cities.' },
  { id: 5, title: 'SS26 — STREET CULTURE', image: '/images/brand-story-bg.png', desc: 'Culture is not consumed — it is lived.' },
];

function CampaignCard({ campaign, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 'var(--radius)', border: '1px solid var(--grey-border)',
        cursor: 'pointer', transition: 'border-color 0.4s'
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--grey-border)'}
    >
      <img src={campaign.image} alt={campaign.title} style={{
        width: '100%', aspectRatio: index === 0 || index === 3 ? '21/9' : '16/10',
        objectFit: 'cover', filter: 'brightness(0.7)',
        transition: 'transform 0.6s ease, filter 0.4s'
      }}
        onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.filter = 'brightness(0.9)'; }}
        onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'brightness(0.7)'; }}
      />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '32px',
        background: 'linear-gradient(to top, rgba(6,6,6,0.9), transparent)'
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '8px' }}>{campaign.title}</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)' }}>{campaign.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Campaigns() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ padding: '0 clamp(24px, 5vw, 80px)', marginBottom: '60px' }}
      >
        <span className="section__label">VISUAL STORIES</span>
        <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>CAMPAIGNS</h1>
        <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--grey)', maxWidth: '500px', lineHeight: 1.7 }}>
          Every season tells a story. Explore our campaigns — visual narratives that define the SHINKO universe.
        </p>
      </motion.div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '16px', padding: '0 clamp(24px, 5vw, 80px)'
      }}>
        {campaigns.map((c, i) => (
          <div key={c.id} style={(i === 0 || i === 3) ? { gridColumn: '1 / -1' } : {}}>
            <CampaignCard campaign={c} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
