import React, { useState, useRef, useEffect } from 'react';
import { LOOKBOOK_CHAPTERS } from '../lib/data';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

function Reveal({ children, delay = 0, style, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  );
}

export default function Lookbook() {
  const [activeChapter, setActiveChapter] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ========== CINEMATIC HERO ========== */}
      <section ref={heroRef} style={{
        position: 'relative', height: '100vh', minHeight: '600px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
      }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY }}>
          <img src="/images/lookbook-1.png" alt="" style={{
            width: '100%', height: '130%', objectFit: 'cover',
            filter: 'brightness(0.25) saturate(0.4)'
          }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,6,0.4), rgba(6,6,6,0.15) 50%, rgba(6,6,6,0.95))' }} />
        <motion.div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            style={{ display: 'inline-block', padding: '8px 24px', border: '1px solid var(--accent)', borderRadius: '100px', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.4em', color: 'var(--accent)' }}>● 6 CHAPTERS</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}
          >LOOK<br />BOOK</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ fontSize: '0.85rem', letterSpacing: '0.4em', color: 'var(--grey-light)', marginTop: '20px' }}
          >SS26 CAMPAIGN</motion.p>
        </motion.div>
        <div className="hero__scroll-indicator"><span>SCROLL</span><div className="hero__scroll-line"></div></div>
      </section>

      {/* ========== INTRO TEXT ========== */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)', textAlign: 'center' }}>
        <Reveal>
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: 300, lineHeight: 1.6,
            maxWidth: '800px', margin: '0 auto', color: 'var(--grey-light)'
          }}>
            Six chapters exploring <strong style={{ color: 'var(--white)', fontWeight: 800 }}>urban identity</strong>,{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 800 }}>shadow</strong>, and the relentless pursuit of{' '}
            <strong style={{ color: 'var(--accent)', fontWeight: 800 }}>authenticity</strong>. Click any chapter to explore.
          </p>
        </Reveal>
      </section>

      {/* ========== CHAPTERS ========== */}
      <section style={{ padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {LOOKBOOK_CHAPTERS.map((ch, i) => (
            <ChapterRow
              key={ch.id}
              chapter={ch}
              index={i}
              isActive={activeChapter?.id === ch.id}
              onClick={() => setActiveChapter(activeChapter?.id === ch.id ? null : ch)}
            />
          ))}
        </div>
      </section>

      {/* ========== GALLERY OVERLAY ========== */}
      <AnimatePresence>
        {activeChapter && (
          <GalleryOverlay chapter={activeChapter} onClose={() => setActiveChapter(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========== CHAPTER ROW ========== */
function ChapterRow({ chapter, index, isActive, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onClick={onClick}
      style={{
        display: 'grid', gridTemplateColumns: 'minmax(160px, 300px) 1fr',
        gap: '0', cursor: 'pointer', overflow: 'hidden',
        border: isActive ? '1px solid var(--accent)' : '1px solid var(--grey-border)',
        borderRadius: 'var(--radius-lg)',
        transition: 'border-color 0.4s, box-shadow 0.4s',
        boxShadow: isActive ? '0 0 60px rgba(200,255,0,0.08)' : 'none',
        background: 'var(--bg-card)'
      }}
      whileHover={{ borderColor: 'rgba(200,255,0,0.5)' }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <motion.img src={chapter.heroImage} alt={chapter.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: isActive ? 'brightness(1)' : 'brightness(0.6) saturate(0.7)',
            transition: 'filter 0.5s'
          }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6 }}
        />
        {/* Chapter Number */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          background: isActive ? 'var(--accent)' : 'rgba(6,6,6,0.7)',
          backdropFilter: 'blur(10px)',
          color: isActive ? '#000' : 'var(--accent)',
          padding: '6px 14px', borderRadius: '100px',
          fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em',
          border: '1px solid var(--accent)',
          transition: 'all 0.3s'
        }}>
          CH.{chapter.chapter}
        </div>
      </div>

      {/* Info */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(20px, 3vw, 40px)', gap: '10px'
      }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.3em', color: 'var(--grey)' }}>
          {chapter.subtitle}
        </span>
        <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: 900, letterSpacing: '-0.01em' }}>
          {chapter.title}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.6, maxWidth: '500px' }}>
          {chapter.description.slice(0, 120)}...
        </p>
        <motion.span
          animate={{ opacity: isActive ? 0.5 : [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: isActive ? 0 : Infinity }}
          style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginTop: '6px' }}
        >
          {isActive ? 'VIEWING ●' : 'EXPLORE →'}
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ========== GALLERY FULLSCREEN OVERLAY ========== */
function GalleryOverlay({ chapter, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);

  // Captions for each image in the gallery
  const captions = [
    'Opening shot — setting the tone for the entire chapter. Every detail is intentional.',
    'Exploring texture and silhouette. The interplay of light and fabric creates depth.',
    'Movement captured in stillness. The garments come alive in their natural environment.',
    'The closing frame — a final statement that lingers long after the last look.',
  ];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentImg(p => Math.min(p + 1, chapter.images.length - 1));
      if (e.key === 'ArrowLeft') setCurrentImg(p => Math.max(p - 1, 0));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, chapter.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(6,6,6,0.97)', backdropFilter: 'blur(30px)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px clamp(24px, 4vw, 60px)',
        borderBottom: '1px solid var(--grey-border)', flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            background: 'var(--accent)', color: '#000',
            padding: '6px 14px', borderRadius: '100px',
            fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.2em'
          }}>CH.{chapter.chapter}</span>
          <h3 style={{ fontSize: '1rem', fontWeight: 900 }}>{chapter.title}</h3>
        </div>
        <button onClick={onClose} style={{
          background: 'none', border: '1px solid var(--grey-dark)',
          color: 'var(--white)', width: '44px', height: '44px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', cursor: 'pointer', borderRadius: '50%',
          transition: 'border-color 0.3s'
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--grey-dark)'}
        >✕</button>
      </div>

      {/* Main content: image + editorial text */}
      <div style={{
        flex: 1, display: 'grid',
        gridTemplateColumns: '1fr minmax(280px, 380px)',
        overflow: 'hidden'
      }}>
        {/* Left — Image */}
        <div style={{
          position: 'relative', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', background: 'rgba(0,0,0,0.3)'
        }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={chapter.images[currentImg]}
              alt={`${chapter.title} — ${currentImg + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: '90%', maxHeight: '80vh', objectFit: 'contain',
                borderRadius: 'var(--radius)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.5)'
              }}
            />
          </AnimatePresence>

          {/* Nav arrows */}
          {currentImg > 0 && (
            <button onClick={() => setCurrentImg(p => p - 1)} style={{
              position: 'absolute', left: 'clamp(12px, 2vw, 30px)', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(6,6,6,0.6)', backdropFilter: 'blur(10px)',
              border: '1px solid var(--grey-dark)', color: 'var(--white)',
              width: '48px', height: '48px', borderRadius: '50%',
              fontSize: '1.1rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--grey-dark)'}
            >←</button>
          )}
          {currentImg < chapter.images.length - 1 && (
            <button onClick={() => setCurrentImg(p => p + 1)} style={{
              position: 'absolute', right: 'clamp(12px, 2vw, 30px)', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(6,6,6,0.6)', backdropFilter: 'blur(10px)',
              border: '1px solid var(--grey-dark)', color: 'var(--white)',
              width: '48px', height: '48px', borderRadius: '50%',
              fontSize: '1.1rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--grey-dark)'}
            >→</button>
          )}
        </div>

        {/* Right — Editorial Text Panel */}
        <div style={{
          borderLeft: '1px solid var(--grey-border)',
          padding: 'clamp(28px, 3vw, 48px)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', overflow: 'auto'
        }}>
          {/* Chapter Info */}
          <div>
            <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.3em', color: 'var(--grey)' }}>
              {chapter.subtitle}
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 900, margin: '8px 0 20px', letterSpacing: '-0.01em' }}>
              {chapter.title}
            </h2>

            {/* Big image counter */}
            <div style={{ marginBottom: '28px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                {String(currentImg + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '1.2rem', color: 'var(--grey-dark)', margin: '0 8px', fontWeight: 300 }}>/</span>
              <span style={{ fontSize: '1.2rem', color: 'var(--grey)', fontWeight: 600 }}>
                {String(chapter.images.length).padStart(2, '0')}
              </span>
            </div>

            {/* Chapter description */}
            <p style={{ fontSize: '0.85rem', color: 'var(--grey-light)', lineHeight: 1.8, marginBottom: '24px' }}>
              {chapter.description}
            </p>

            {/* Per-image caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '16px 20px', background: 'var(--bg-card)',
                  border: '1px solid var(--grey-border)', borderRadius: 'var(--radius)',
                  marginBottom: '24px'
                }}
              >
                <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '6px' }}>
                  IMAGE {String(currentImg + 1).padStart(2, '0')}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  {captions[currentImg] || captions[0]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom: thumbnails + credits */}
          <div>
            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              {chapter.images.map((img, i) => (
                <div key={i} onClick={() => setCurrentImg(i)} style={{
                  flex: 1, aspectRatio: '1', borderRadius: '6px',
                  overflow: 'hidden', cursor: 'pointer',
                  border: i === currentImg ? '2px solid var(--accent)' : '2px solid transparent',
                  opacity: i === currentImg ? 1 : 0.4, transition: 'all 0.3s'
                }}>
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Credits */}
            <div style={{
              padding: '14px 0', borderTop: '1px solid var(--grey-border)'
            }}>
              <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '4px' }}>
                CREDITS
              </p>
              <p style={{ fontSize: '0.7rem', color: 'var(--grey)', lineHeight: 1.6 }}>
                {chapter.credits}
              </p>
            </div>

            <p style={{ fontSize: '0.55rem', color: 'var(--grey)', letterSpacing: '0.15em', marginTop: '8px' }}>
              USE ← → ARROW KEYS · ESC TO CLOSE
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

