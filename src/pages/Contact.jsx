import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      {/* Header with Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        style={{ padding: '0 clamp(24px, 5vw, 80px)', marginBottom: '60px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <img src="/images/shinko-icon.png" alt="SHINKO" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
          <div>
            <span className="section__label">GET IN TOUCH</span>
            <h1 className="section__title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>CONTACT</h1>
          </div>
        </div>
      </motion.div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '60px', padding: '0 clamp(24px, 5vw, 80px)', maxWidth: '1100px', margin: '0 auto'
      }}>
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          {/* Logo card */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--grey-border)',
            borderRadius: 'var(--radius-lg)', padding: '40px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', marginBottom: '32px', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <img src="/images/shinko-icon.png" alt="SHINKO OFFICIAL" style={{
              width: '80px', height: '80px', objectFit: 'contain', marginBottom: '20px',
              position: 'relative', zIndex: 1
            }} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.05em', marginBottom: '8px', position: 'relative', zIndex: 1 }}>
              SHINKO OFFICIAL
            </h2>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--accent)', position: 'relative', zIndex: 1 }}>
              DEFINE YOUR IDENTITY
            </p>
          </div>

          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.1em' }}>REACH US</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'EMAIL', value: 'hello@shinko-official.com' },
              { label: 'INSTAGRAM', value: '@shinko.official' },
              { label: 'WHATSAPP', value: '+62 812 3456 7890' },
              { label: 'LOCATION', value: 'Jakarta, Indonesia' },
            ].map(item => (
              <div key={item.label} style={{
                padding: '16px 20px', background: 'var(--bg-card)',
                border: '1px solid var(--grey-border)', borderRadius: 'var(--radius)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--grey-light)' }}>{item.value}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '24px', padding: '20px 24px', background: 'var(--bg-card)',
            border: '1px solid var(--grey-border)', borderRadius: 'var(--radius)'
          }}>
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '10px' }}>
              BUSINESS HOURS
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--grey-light)', lineHeight: 1.8 }}>
              Monday — Friday: 09:00 — 18:00 WIB<br />
              Saturday: 10:00 — 15:00 WIB<br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>SEND A MESSAGE</h2>
          <form onSubmit={e => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); e.target.reset(); }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {[
              { name: 'name', placeholder: 'YOUR NAME', type: 'text' },
              { name: 'email', placeholder: 'YOUR EMAIL', type: 'email' },
            ].map(field => (
              <input key={field.name} type={field.type} placeholder={field.placeholder} required style={{
                padding: '16px 20px', background: 'var(--bg-card)', border: '1px solid var(--grey-border)',
                color: 'var(--white)', fontFamily: '"Poppins", sans-serif',
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', outline: 'none',
                borderRadius: '4px', transition: 'border-color 0.3s'
              }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--grey-border)'}
              />
            ))}
            <textarea placeholder="YOUR MESSAGE" required rows={5} style={{
              padding: '16px 20px', background: 'var(--bg-card)', border: '1px solid var(--grey-border)',
              color: 'var(--white)', fontFamily: '"Poppins", sans-serif',
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', outline: 'none', resize: 'vertical',
              borderRadius: '4px', transition: 'border-color 0.3s'
            }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--grey-border)'}
            />
            <button type="submit" className="hero__cta" style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}>
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
