import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Reveal({ children, delay = 0, style, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
}

const MILESTONES = [
  { year: '2022', title: 'THE SPARK', text: 'SHINKO OFFICIAL was born in a small Jakarta studio — a vision to redefine what Indonesian streetwear could be. No investors, no shortcuts. Just raw ambition.' },
  { year: '2023', title: 'FIRST DROP', text: 'Our debut "Shadow Series" sold out within 72 hours. The streets spoke and the message was clear — there was a hunger for something different.' },
  { year: '2024', title: 'GOING GLOBAL', text: 'International stockists began reaching out. SHINKO pieces appeared in Tokyo, Seoul, and Bangkok. The streets have no borders.' },
  { year: '2025', title: 'THE MOVEMENT', text: 'SHINKO became more than a brand — it became a community. Pop-up events, creative collaborations, and a growing tribe of like-minded individuals.' },
  { year: '2026', title: 'SS26 — NOW', text: 'Our most ambitious collection yet. SS26 represents everything we stand for: uncompromising quality, bold design, and the relentless pursuit of identity.' },
];

const VALUES = [
  { icon: '◆', title: 'QUALITY OVER QUANTITY', desc: 'Every piece is crafted with premium materials sourced from the finest mills. We produce in limited runs — because mass production kills meaning.' },
  { icon: '◈', title: 'CULTURE FIRST', desc: 'We don\'t follow trends — we grow with culture. Skateboarding, music, art, and the street itself are woven into every stitch.' },
  { icon: '◇', title: 'IDENTITY DRIVEN', desc: 'SHINKO exists so you can define yourself. Our clothes don\'t make you fit in — they help you stand out.' },
];

export default function Story() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ========== FULL-SCREEN HERO ========== */}
      <section ref={heroRef} style={{
        position: 'relative', height: '100vh', minHeight: '600px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY }}>
          <img src="/images/brand-story-bg.png" alt="" style={{
            width: '100%', height: '130%', objectFit: 'cover',
            filter: 'brightness(0.3) saturate(0.5)'
          }} />
        </motion.div>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(6,6,6,0.4), rgba(6,6,6,0.2) 50%, rgba(6,6,6,0.95))'
        }} />
        <motion.div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', opacity: heroOpacity }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="section__label" style={{ justifyContent: 'center' }}
          >ABOUT SHINKO</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}
          >OUR<br />STORY</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ fontSize: '0.85rem', letterSpacing: '0.4em', color: 'var(--grey-light)', marginTop: '20px' }}
          >BORN FROM THE STREETS</motion.p>
        </motion.div>
        <div className="hero__scroll-indicator">
          <span>SCROLL</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ========== MANIFESTO ========== */}
      <section style={{ padding: 'clamp(100px, 12vw, 180px) clamp(24px, 5vw, 80px)', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(200,255,0,0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <Reveal>
          <p style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 300,
            lineHeight: 1.5, maxWidth: '900px', margin: '0 auto',
            color: 'var(--grey-light)'
          }}>
            We believe what you wear is not just fabric — it is a{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 800 }}>declaration of who you are</strong>.
            SHINKO OFFICIAL was built for those who refuse to blend in. Every piece we create is a tool for{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 800 }}>self-expression</strong>.
          </p>
        </Reveal>
      </section>

      {/* ========== SPLIT IMAGE + VALUES ========== */}
      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '0', minHeight: '80vh'
      }}>
        {/* Left - Image */}
        <Reveal style={{ overflow: 'hidden', position: 'relative' }}>
          <img src="/images/lookbook-1.png" alt="SHINKO Craftsmanship" style={{
            width: '100%', height: '100%', minHeight: '500px', objectFit: 'cover',
            filter: 'brightness(0.7) contrast(1.1)'
          }} />
          <div style={{
            position: 'absolute', bottom: '40px', left: '40px', right: '40px'
          }}>
            <span style={{
              background: 'var(--accent)', color: '#000', padding: '6px 16px',
              fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em'
            }}>EST. 2022 — JAKARTA</span>
          </div>
        </Reveal>

        {/* Right - Values */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(48px, 6vw, 80px)', background: 'var(--bg-card)',
          borderLeft: '1px solid var(--grey-border)'
        }}>
          <Reveal>
            <span className="section__label">OUR VALUES</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '40px', lineHeight: 1 }}>
              WHAT WE<br />STAND FOR
            </h2>
          </Reveal>
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.12}>
              <div style={{
                padding: '28px 0',
                borderBottom: i < VALUES.length - 1 ? '1px solid var(--grey-border)' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>{v.icon}</span>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em' }}>{v.title}</h3>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.7, paddingLeft: '28px' }}>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========== TIMELINE ========== */}
      <section style={{ padding: 'clamp(100px, 12vw, 160px) clamp(24px, 5vw, 80px)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section__label" style={{ justifyContent: 'center' }}>THE JOURNEY</span>
            <h2 className="section__title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>MILESTONES</h2>
          </div>
        </Reveal>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, var(--accent), var(--grey-border), transparent)'
          }} />

          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.1}>
              <div style={{
                display: 'flex', gap: '32px', marginBottom: i < MILESTONES.length - 1 ? '48px' : 0,
                paddingLeft: '8px'
              }}>
                {/* Dot */}
                <div style={{ flexShrink: 0, position: 'relative' }}>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: i === MILESTONES.length - 1 ? 'var(--accent)' : 'var(--bg-primary)',
                    border: `2px solid ${i === MILESTONES.length - 1 ? 'var(--accent)' : 'var(--grey-dark)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.55rem', fontWeight: 800,
                    color: i === MILESTONES.length - 1 ? '#000' : 'var(--grey)'
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div style={{ paddingTop: '2px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', color: 'var(--accent)' }}>
                    {m.year}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: '6px 0 10px' }}>{m.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey-light)', lineHeight: 1.8, maxWidth: '550px' }}>{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========== BIG QUOTE ========== */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(100px, 12vw, 180px) clamp(24px, 5vw, 80px)',
        background: 'var(--bg-elevated)', textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <Reveal>
          <blockquote style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <span style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--accent)', opacity: 0.15, position: 'absolute', top: '-40px', left: '-10px', lineHeight: 1 }}>"</span>
            <p style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}>
              Streetwear is more than clothing.{' '}
              <span style={{ color: 'var(--accent)' }}>It is identity.</span>
            </p>
            <p style={{ marginTop: '24px', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'var(--grey)' }}>— SHINKO OFFICIAL, FOUNDER</p>
          </blockquote>
        </Reveal>
      </section>

      {/* ========== CTA ========== */}
      <Reveal>
        <section style={{
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '16px' }}>
            READY TO DEFINE<br />YOUR IDENTITY?
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--grey)', marginBottom: '36px' }}>
            Explore the SS26 collection and find your statement piece.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/collection" className="hero__cta">SHOP COLLECTION</Link>
            <Link to="/lookbook" className="hero__cta cta--outline">VIEW LOOKBOOK</Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
