import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const jRef = useRef(null);
  useEffect(() => {
    if (jRef.current) {
      // Continuous live effect: gentle floating, pulsing, and glow
      gsap.to(jRef.current, {
        y: -4,
        scale: 1.08,
        textShadow: '0 0 24px #A259F7, 0 0 48px #CBA0E3',
        duration: 1.2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
      gsap.to(jRef.current, {
        scale: 1,
        duration: 1.2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.2,
      });
    }
  }, []);
  function handleJHover() {
    if (jRef.current) {
      gsap.to(jRef.current, {
        scale: 1.22,
        rotate: 8,
        textShadow: '0 0 24px #A259F7, 0 0 48px #CBA0E3',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }
  function handleJLeave() {
    if (jRef.current) {
      gsap.to(jRef.current, {
        scale: 1,
        rotate: 0,
        textShadow: '0 0 16px #A259F7, 0 0 32px #CBA0E3',
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'backOut' }}
      className="w-full flex items-center justify-between px-8 py-4 bg-[#000000] bg-opacity-100 shadow-lg fixed top-0 left-0 z-30 backdrop-blur-md"
    >
      <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
        <motion.div
          className="text-2xl font-bold tracking-widest bg-gradient-to-r from-[#A259F7] via-[#CBA0E3] to-[#6A0DAD] bg-clip-text text-transparent"
          initial={{ textShadow: '0 0 0px #A259F7' }}
          animate={{
            textShadow: [
              '0 0 8px #A259F7, 0 0 16px #CBA0E3',
              '0 0 16px #A259F7, 0 0 32px #CBA0E3',
              '0 0 8px #A259F7, 0 0 16px #CBA0E3',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#A259F7', fontFamily: "'Snell Roundhand', 'Apple Chancery', cursive", fontWeight: 700 }}
        >
          <span
            ref={jRef}
            onMouseEnter={handleJHover}
            onMouseLeave={handleJLeave}
            style={{ display: 'inline-block', cursor: 'pointer', color: 'inherit' }}
          >
            J
          </span>
          aymeet
        </motion.div>
      </Link>
      <div className="flex gap-3 text-sm font-semibold">
        {navLinks.map(link => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={isActive ? 'block' : 'block'}
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 12px 2px #B10DC9, 0 0 24px 4px #CBA0E3',
                  borderColor: '#B10DC9',
                  background: isActive ? 'rgba(75,0,130,0.10)' : 'rgba(44,44,44,0.65)',
                  color: isActive ? '#A259F7' : '#fff',
                }}
                transition={{ type: 'spring', stiffness: 1200, damping: 30, duration: 0.08 }}
                className={
                  'transition-all duration-75 px-3 py-1 border-2 font-bold select-none shadow-none ' +
                  (isActive
                    ? 'bg-[rgba(75,0,130,0.10)] border-[#B10DC9] text-[#A259F7]'
                    : 'bg-[rgba(44,44,44,0.65)] text-white border-[#B10DC9]')
                }
                style={{
                  boxShadow: 'none',
                  background: isActive ? 'rgba(75,0,130,0.10)' : 'rgba(44,44,44,0.65)',
                  borderColor: '#B10DC9',
                  borderRadius: 12,
                  borderWidth: 2,
                  fontFamily: 'monospace',
                  color: isActive ? '#A259F7' : '#fff',
                  minWidth: 56,
                  minHeight: 28,
                  fontSize: 14,
                  letterSpacing: '0.04em',
                  WebkitBackdropFilter: 'blur(8px)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.25rem 0.75rem',
                  transition: 'background 75ms, color 75ms, border-color 75ms',
                  cursor: 'pointer',
                }}
              >
                <span className="w-full h-full text-center flex items-center justify-center">
                  {link.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}