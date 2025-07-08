import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ARScrollAnimator({ children, className = '' }) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(el, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' });
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
} 