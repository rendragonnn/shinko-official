import React, { useState, useEffect } from 'react';

export default function BootScreen({ onComplete }) {
  const [text, setText] = useState('');
  const fullText = `[SYS.BOOT] INITIALIZING SHINKO PROTOCOL...\n[SYS.AUTH] IDENTITY CONFIRMED.\n[SYS.EXEC] OVERRIDING MAINFRAME...\n[OK] WELCOME TO THE UNDERGROUND.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 400); // Wait shortly after done typing
      }
    }, 15); // Fast typing speed
    
    // Prevent scrolling and body actions while booting
    document.body.style.overflow = 'hidden';
    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [fullText, onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#060606', color: 'var(--accent)',
      fontFamily: '"Courier New", Courier, monospace', 
      padding: 'clamp(20px, 5vw, 40px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      pointerEvents: 'all'
    }}>
      <pre style={{ 
        margin: 0, 
        whiteSpace: 'pre-wrap', 
        fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
        fontWeight: 700,
        textShadow: '0 0 10px rgba(200, 255, 0, 0.4)',
        lineHeight: 1.5
      }}>
        {text}
        <span className="blinking-cursor">_</span>
      </pre>
    </div>
  );
}
