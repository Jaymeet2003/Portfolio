import React from 'react';
import { motion } from 'framer-motion';
import Team3DLogos from '../components/Team3DLogos';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Home() {
  // Refs for each SVG
  const redRef = useRef(null);
  const blueRef = useRef(null);
  const purpleRef = useRef(null);
  const greenRef = useRef(null);

  // 3D tilt handler
  function handleTilt(ref) {
    return (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      gsap.to(ref.current, {
        rotateY: dx * 18,
        rotateX: -dy * 18,
        scale: 1.12,
        transformPerspective: 600,
        transformOrigin: '50% 50%',
        duration: 0.3,
        ease: 'power2.out',
    });
    };
  }
  function handleReset(ref) {
    return () => {
      gsap.to(ref.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
    });
    };
  }
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32 sm:pt-20">
      <div className="max-w-3xl w-full flex flex-col items-center text-center z-10">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-white"
        >
          Hi, I'm{' '}
          <motion.span
            className="cool-cursive-name"
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              fontFamily: "'Snell Roundhand', 'Apple Chancery', cursive",
              display: 'inline-block',
              color: '#A259F7',
              letterSpacing: '0.04em',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Jaymeet Patel
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-200 mb-4 font-light"
        >
          A cybersecurity student with hands-on experience in penetration testing, threat modeling, and network security.
        </motion.p>
        {/* Tagline with Cyber Effects */}
        <motion.div className="mb-2 relative">
          <motion.p
            className="text-lg sm:text-xl text-[#CBA0E3] font-mono tracking-wider"
            animate={{
              textShadow: [
                '0 0 4px #CBA0E3, 0 0 8px #CBA0E3',
                '0 0 8px #A259F7, 0 0 16px #A259F7',
                '0 0 4px #CBA0E3, 0 0 8px #CBA0E3',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="inline-block mr-2">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[#00FF00]"
              >
                █
              </motion.span>
            </span>
            Skilled in red, blue, and purple team techniques — blending offensive tactics with defensive strategies to secure real-world systems.
            <span className="inline-block ml-2">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                className="text-[#00FF00]"
              >
                █
              </motion.span>
            </span>
          </motion.p>
        </motion.div>
        {/* SVG Icons and Skill Text */}
        <div className="flex flex-row justify-center items-center gap-4 mb-6 py-2">
          <motion.div
            className="bg-gradient-to-r from-[#1a102b]/80 to-[#2a133a]/80 p-2 rounded-lg border border-purple-500/30 shadow-xl flex flex-col items-center justify-center"
            whileHover={{
              scale: 1.06,
              rotateY: 8,
              rotateX: 4,
              boxShadow: '0 0 24px 6px #FF6F61, 0 0 48px 12px #FF1744',
              transition: { duration: 0.03, ease: 'linear' }
            }}
            transition={{ duration: 0.03, ease: 'linear' }}
            style={{ boxShadow: 'none', borderRadius: 12 }}
          >
            <svg
              ref={redRef}
              className="w-14 h-14"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              onMouseMove={handleTilt(redRef)}
              onMouseLeave={handleReset(redRef)}
              style={{ willChange: 'transform' }}
            >
              <circle cx="32" cy="32" r="24" stroke="#FF1744" strokeWidth="4" fill="none"/>
              <circle cx="32" cy="32" r="8" fill="#FF1744"/>
              <line x1="32" y1="4" x2="32" y2="14" stroke="#FF1744" strokeWidth="2"/>
              <line x1="32" y1="50" x2="32" y2="60" stroke="#FF1744" strokeWidth="2"/>
              <line x1="4" y1="32" x2="14" y2="32" stroke="#FF1744" strokeWidth="2"/>
              <line x1="50" y1="32" x2="60" y2="32" stroke="#FF1744" strokeWidth="2"/>
            </svg>
            <span className="mt-1 text-xs font-bold text-[#FF1744] tracking-widest select-none">Red<br/>Team</span>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-[#1a102b]/80 to-[#2a133a]/80 p-2 rounded-lg border border-purple-500/30 shadow-xl flex flex-col items-center justify-center"
            whileHover={{
              scale: 1.06,
              rotateY: 8,
              rotateX: 4,
              boxShadow: '0 0 24px 6px #4B0082, 0 0 48px 12px #1976D2',
              transition: { duration: 0.03, ease: 'linear' }
            }}
            transition={{ duration: 0.03, ease: 'linear' }}
            style={{ boxShadow: 'none', borderRadius: 12 }}
          >
            <svg
              ref={blueRef}
              className="w-14 h-14"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              onMouseMove={handleTilt(blueRef)}
              onMouseLeave={handleReset(blueRef)}
              style={{ willChange: 'transform' }}
            >
              <path d="M32 4L12 12V28C12 42 22 52 32 60C42 52 52 42 52 28V12L32 4Z" fill="#1976D2"/>
            </svg>
            <span className="mt-1 text-xs font-bold text-[#1976D2] tracking-widest select-none">Blue<br/>Team</span>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-[#1a102b]/80 to-[#2a133a]/80 p-2 rounded-lg border border-purple-500/30 shadow-xl flex flex-col items-center justify-center"
            whileHover={{
              scale: 1.06,
              rotateY: 8,
              rotateX: 4,
              boxShadow: '0 0 24px 6px #CBA0E3, 0 0 48px 12px #B10DC9',
              transition: { duration: 0.03, ease: 'linear' }
            }}
            transition={{ duration: 0.03, ease: 'linear' }}
            style={{ boxShadow: 'none', borderRadius: 12 }}
          >
            <svg
              ref={purpleRef}
              className="w-14 h-14"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              onMouseMove={handleTilt(purpleRef)}
              onMouseLeave={handleReset(purpleRef)}
              style={{ willChange: 'transform' }}
            >
              <path d="M32,4 A28,28 0 1,1 32,60 A14,14 0 1,0 32,4Z" fill="#7B1FA2"/>
              <circle cx="32" cy="18" r="4" fill="#1976D2"/>
              <circle cx="32" cy="46" r="4" fill="#FF1744"/>
              <line x1="20" y1="20" x2="10" y2="10" stroke="#7B1FA2" strokeWidth="2"/>
              <line x1="44" y1="44" x2="54" y2="54" stroke="#7B1FA2" strokeWidth="2"/>
            </svg>
            <span className="mt-1 text-xs font-bold text-[#7B1FA2] tracking-widest select-none">Purple<br/>Team</span>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-[#1a102b]/80 to-[#2a133a]/80 p-2 rounded-lg border border-purple-500/30 shadow-xl flex flex-col items-center justify-center"
            whileHover={{
              scale: 1.06,
              rotateY: 8,
              rotateX: 4,
              boxShadow: '0 0 24px 6px #00FF99, 0 0 48px 12px #00C853',
              transition: { duration: 0.03, ease: 'linear' }
            }}
            transition={{ duration: 0.03, ease: 'linear' }}
            style={{ boxShadow: 'none', borderRadius: 12 }}
          >
            <svg
              ref={greenRef}
              className="w-14 h-14"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              onMouseMove={handleTilt(greenRef)}
              onMouseLeave={handleReset(greenRef)}
              style={{ willChange: 'transform' }}
            >
              <path d="M16 32C16 24 24 24 32 32C40 40 48 40 48 32C48 24 40 24 32 32C24 40 16 40 16 32Z" fill="none" stroke="#00C853" strokeWidth="4"/>
              <text x="22" y="60" fontSize="8" fill="#00C853" fontFamily="monospace">{ }</text>
            </svg>
            <span className="mt-1 text-xs font-bold text-[#00C853] tracking-widest select-none">Always<br/>Learning</span>
          </motion.div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
          <motion.a
            href="Jaymeet_Patel_Resume.pdf"
          download
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white rounded-lg shadow-lg border border-purple-500/30"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 20px 4px #A259F7, 0 0 40px 8px #CBA0E3',
              borderColor: '#A259F7',
              filter: 'brightness(1.1)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            whileTap={{
              scale: 0.98,
              filter: 'brightness(1.05)',
              transition: { duration: 0.2 },
            }}
            animate={{
              boxShadow: [
                '0 0 8px 2px #6A0DAD, 0 0 16px 4px #4B0082',
                '0 0 12px 4px #A259F7, 0 0 24px 8px #CBA0E3',
                '0 0 8px 2px #6A0DAD, 0 0 16px 4px #4B0082',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="relative z-10 flex items-center gap-3 font-semibold">
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-lg opacity-80"
        >
                ↓
              </motion.span>
          Download Resume
              <span className="text-xs opacity-60 font-mono">.pdf</span>
            </span>
          </motion.a>
          <motion.a
            href="#/about"
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white rounded-lg shadow-lg border border-purple-500/30"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 20px 4px #A259F7, 0 0 40px 8px #CBA0E3',
              borderColor: '#A259F7',
              filter: 'brightness(1.1)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            whileTap={{
              scale: 0.98,
              filter: 'brightness(1.05)',
              transition: { duration: 0.2 },
            }}
            animate={{
              boxShadow: [
                '0 0 8px 2px #6A0DAD, 0 0 16px 4px #4B0082',
                '0 0 12px 4px #A259F7, 0 0 24px 8px #CBA0E3',
                '0 0 8px 2px #6A0DAD, 0 0 16px 4px #4B0082',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="relative z-10 flex items-center gap-3 font-semibold">
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-lg opacity-80"
              >
                →
              </motion.span>
              Learn More
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
