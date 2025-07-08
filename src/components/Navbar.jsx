import React from 'react';
import { motion as m } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const jRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
    // Close menu on route change
    setMenuOpen(false);
  }, [location.pathname]);
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
    <m.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'backOut' }}
      className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-[#000000] bg-opacity-100 shadow-lg fixed top-0 left-0 z-30 backdrop-blur-md"
    >
      <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
        <m.div
          className="text-2xl font-bold tracking-widest bg-gradient-to-r from-[#A259F7] via-[#CBA0E3] to-[#6A0DAD] bg-clip-text text-transparent whitespace-nowrap"
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
        </m.div>
      </Link>
      {/* Hamburger Icon for Mobile */}
      <m.button
        className="sm:hidden flex flex-col justify-center items-center w-12 h-12 rounded-xl border-2 border-[#A259F7] bg-gradient-to-br from-[#181828] to-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#A259F7] ml-2 shadow-md relative"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.92, rotateZ: menuOpen ? -10 : 10 }}
        whileHover={{ scale: 1.08, rotateZ: menuOpen ? 8 : -8 }}
        animate={{
          rotateY: menuOpen ? 20 : 0,
          scale: menuOpen ? 1.12 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ zIndex: 40, perspective: 400 }}
      >
        <m.span
          className={`block w-7 h-1 rounded-full bg-[#A259F7] mb-1`}
          animate={{
            rotate: menuOpen ? 45 : 0,
            y: menuOpen ? 8 : 0,
            scaleX: menuOpen ? 1.1 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
        <m.span
          className={`block w-7 h-1 rounded-full bg-[#A259F7] mb-1`}
          animate={{
            opacity: menuOpen ? 0 : 1,
            scaleX: menuOpen ? 0.7 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
        <m.span
          className={`block w-7 h-1 rounded-full bg-[#A259F7]`}
          animate={{
            rotate: menuOpen ? -45 : 0,
            y: menuOpen ? -8 : 0,
            scaleX: menuOpen ? 1.1 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </m.button>
      {/* Nav Links */}
      <div className="hidden sm:flex gap-3 text-sm font-semibold">
        {navLinks.map(link => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={isActive ? 'block' : 'block'}
              style={{ textDecoration: 'none' }}
            >
              <m.div
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
              </m.div>
            </Link>
          );
        })}
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
          <m.div className="sm:hidden fixed right-0 w-44 max-w-[95vw] mr-2 bg-[#181828] bg-opacity-95 shadow-2xl border-t-2 border-[#A259F7] flex flex-col items-center gap-1 py-3 z-30 animate-fadeInDown rounded-l-2xl mt-[3px]" style={{ top: '4.25rem' }}>
          {navLinks.map(link => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="w-full"
                style={{ textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)}
              >
                <m.div
                  whileHover={{
                    scale: 1.08,
                    boxShadow: '0 0 8px 1px #B10DC9, 0 0 16px 2px #CBA0E3',
                    borderColor: '#B10DC9',
                    background: isActive ? 'rgba(75,0,130,0.10)' : 'rgba(44,44,44,0.65)',
                    color: isActive ? '#A259F7' : '#fff',
                  }}
                  transition={{ type: 'spring', stiffness: 1200, damping: 30, duration: 0.08 }}
                  className={
                    'w-11/12 mx-auto mb-1 transition-all duration-75 px-2 py-2 border-2 font-bold select-none shadow-none text-base ' +
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
                    minWidth: 80,
                    minHeight: 36,
                    fontSize: 15,
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
                </m.div>
              </Link>
            );
          })}
        </m.div>
      )}
    </m.nav>
  );
}