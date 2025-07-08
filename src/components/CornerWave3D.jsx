import React, { useEffect, useRef } from 'react';

export default function CornerWave3D() {
  const ref = useRef();
  useEffect(() => {
    let frame = 0;
    let running = true;
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < 32; i++) {
        ctx.save();
        ctx.globalAlpha = 0.12 + 0.08 * Math.sin(frame/30 + i);
        ctx.strokeStyle = `hsl(${260 + i*4}, 80%, 60%)`;
        ctx.lineWidth = 2 + Math.sin(frame/40 + i/2);
        ctx.beginPath();
        for (let x = 0; x < W; x += 8) {
          const y = H - 80 - i*18 + Math.sin((x/90) + frame/30 + i)*18;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }
      if (running) {
        frame++;
        requestAnimationFrame(draw);
      }
    }
    draw();
    return () => { running = false; };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
        fontFamily: "'Great Vibes', cursive !important",
      }}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
    />
  );
} 