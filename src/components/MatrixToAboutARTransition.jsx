import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const MATRIX_COLOR = '#00ffff';
const CYBER_WORDS = ['intrusion', 'hack', 'virus'];

export default function MatrixToAboutARTransition({ direction = 'toAbout', onComplete }) {
  const [phase, setPhase] = useState('mask'); // 'mask' | 'spray' | 'done'
  const [words, setWords] = useState([]);
  const maskRef = useRef(null);

  // Animate the CSS mask (clip-path) to create the "suck-in" effect
  useEffect(() => {
    if (phase !== 'mask') return;
    const mask = maskRef.current;
    if (!mask) return;
    // Start with a full rectangle, animate to a small circle at the vortex
    const W = window.innerWidth;
    const H = window.innerHeight;
    const vortexX = direction === 'toAbout' ? 80 : 80;
    const vortexY = direction === 'toAbout' ? H - 80 : 80;
    // Initial: full rect
    mask.style.clipPath = `circle(${Math.max(W, H) * 1.2}px at ${W / 2}px ${H / 2}px)`;
    mask.style.transition = 'clip-path 1.1s cubic-bezier(0.7,0.1,0.2,1)';
    setTimeout(() => {
      mask.style.clipPath = `circle(0px at ${vortexX}px ${vortexY}px)`;
    }, 30);
    // After animation, show spray
    setTimeout(() => setPhase('spray'), 1200);
  }, [phase, direction]);

  // Spray cyber words or matrix code
  useEffect(() => {
    if (phase !== 'spray') return;
    if (direction === 'toAbout') {
      // Split words into letters and assign each a random destination on the opposite end
      const W = window.innerWidth;
      const H = window.innerHeight;
      const vortexX = 40;
      const vortexY = direction === 'toAbout' ? H - 60 : 60;
      // Opposite region: top half if vortex is bottom, bottom half if vortex is top
      const targetRegion = direction === 'toAbout' ? { xMin: W * 0.5, xMax: W - 80, yMin: 40, yMax: H * 0.4 } : { xMin: W * 0.5, xMax: W - 80, yMin: H * 0.6, yMax: H - 40 };
      let letterParticles = [];
      CYBER_WORDS.forEach((word, wi) => {
        word.split('').forEach((char, li) => {
          // Random destination in the target region
          const tx = targetRegion.xMin + Math.random() * (targetRegion.xMax - targetRegion.xMin);
          const ty = targetRegion.yMin + Math.random() * (targetRegion.yMax - targetRegion.yMin);
          letterParticles.push({
            text: char,
            x: vortexX,
            y: vortexY,
            tx,
            ty,
            color: MATRIX_COLOR,
            opacity: 1,
            t: 0,
            delay: Math.random() * 0.2 + (wi * 0.05), // slight stagger per word
          });
        });
      });
      setWords(letterParticles);
    } else {
      // Matrix code spray for reverse
      setWords(Array.from({ length: 30 }, () => ({
        text: String.fromCharCode(0x30A0 + Math.random() * 96),
        x: 40,
        y: 60,
        vx: 8 + Math.random() * 8,
        vy: 2 + Math.random() * 4,
        color: MATRIX_COLOR,
        opacity: 1,
        t: 0,
      })));
    }
    let start = null;
    const duration = 1200;
    function animateLetters(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      setWords(ws => ws.map(w => {
        // Add a delay per letter for stagger
        const localElapsed = Math.max(0, elapsed - w.delay * 1000);
        const prog = Math.min(1, localElapsed / duration);
        // Jitter for cyber look
        const jitter = (Math.random() - 0.5) * 8 * (1 - prog);
        return {
          ...w,
          x: w.x + (w.tx - w.x) * prog + jitter,
          y: w.y + (w.ty - w.y) * prog + jitter,
          opacity: 1 - prog,
        };
      }));
      if (elapsed < duration + 400) {
        requestAnimationFrame(animateLetters);
      } else {
        setPhase('done');
        setTimeout(onComplete, 600);
      }
    }
    if (direction === 'toAbout') {
      requestAnimationFrame(animateLetters);
    } else {
      // Keep old interval for matrix code spray
      const start = Date.now();
      const duration = 1200;
      const interval = setInterval(() => {
        setWords(ws => ws.map(w => ({
          ...w,
          x: w.x + w.vx,
          y: w.y + w.vy + Math.sin(w.t) * 2,
          opacity: Math.max(0, 1 - (Date.now() - start) / duration),
          t: w.t + 0.18,
        })));
      }, 16);
      setTimeout(() => {
        clearInterval(interval);
        setPhase('done');
        setTimeout(onComplete, 600);
      }, duration + 400);
      return () => clearInterval(interval);
    }
    // No cleanup needed for requestAnimationFrame
  }, [phase, direction, onComplete]);

  // Overlay
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: 1000,
      pointerEvents: 'none',
      background: 'rgba(0,0,0,0.92)',
      transition: 'opacity 0.5s',
      opacity: phase === 'done' ? 0 : 1,
    }}>
      {/* Masked page content */}
      <div
        ref={maskRef}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1001,
          background: 'transparent',
          pointerEvents: 'none',
        }}
      />
      {/* Spray words or code */}
      {phase === 'spray' && words.map((w, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: w.x,
          top: w.y,
          color: w.color,
          fontWeight: 900,
          fontSize: 38,
          textShadow: `0 0 16px ${w.color}, 0 0 32px #fff2` ,
          opacity: w.opacity,
          pointerEvents: 'none',
          userSelect: 'none',
          fontFamily: 'monospace',
        }}>{w.text}</span>
      ))}
      {/* Vortex spray device (bottom left or top left) */}
      <svg style={{ position: 'absolute', left: 0, [direction === 'toAbout' ? 'bottom' : 'top']: 0, width: 120, height: 120, zIndex: 10 }}>
        <defs>
          <radialGradient id="vortexGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#00ffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <ellipse cx="60" cy={direction === 'toAbout' ? 100 : 20} rx="32" ry="18" fill="url(#vortexGlow)" filter="url(#blur)" />
        <circle cx="60" cy={direction === 'toAbout' ? 60 : 60} r="32" fill="url(#vortexGlow)" />
        <rect x="52" y={direction === 'toAbout' ? 20 : 60} width="16" height="40" rx="8" fill="#00ffff" opacity="0.7" />
        <ellipse cx="60" cy={direction === 'toAbout' ? 20 : 100} rx="12" ry="8" fill="#00ffff" opacity="0.5" />
      </svg>
    </div>
  );
} 