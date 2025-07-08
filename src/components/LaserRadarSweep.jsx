import React, { useRef, useEffect } from 'react';

export default function LaserRadarSweep({ size = 180 }) {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    let running = true;
    function draw() {
      ctx.clearRect(0, 0, size, size);
      // Radar circle
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = '#A259F7';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2-6, 0, 2*Math.PI);
      ctx.stroke();
      ctx.restore();
      // Sweep
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.translate(size/2, size/2);
      ctx.rotate((frame/60) % (2*Math.PI));
      const grad = ctx.createRadialGradient(0,0,0, 0,0,size/2-6);
      grad.addColorStop(0, '#fff0');
      grad.addColorStop(0.7, '#A259F7cc');
      grad.addColorStop(1, '#fff0');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.arc(0,0,size/2-6, 0, Math.PI/4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      // Blips
      ctx.save();
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = '#CBA0E3';
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI/2) + Math.sin(frame/40 + i)*0.2;
        const r = size/2-24 + Math.sin(frame/30 + i)*8;
        ctx.beginPath();
        ctx.arc(size/2 + Math.cos(angle)*r, size/2 + Math.sin(angle)*r, 7, 0, 2*Math.PI);
        ctx.fill();
      }
      ctx.restore();
      if (running) {
        frame++;
        requestAnimationFrame(draw);
      }
    }
    draw();
    return () => { running = false; };
  }, [size]);
  return (
    <canvas ref={ref} width={size} height={size} style={{ width: size, height: size, borderRadius: '50%', background: 'rgba(24,24,40,0.7)', boxShadow: '0 0 24px #A259F7cc', pointerEvents: 'none' }} />
  );
} 