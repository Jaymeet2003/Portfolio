import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: 'mailto:jaymeet5087d@gmail.com', label: 'Email', external: true },
  { to: 'tel:+16304644830', label: 'Phone', external: true },
  { to: 'https://linkedin.com/in/jaymeet2003', label: 'LinkedIn', external: true },
];

export default function Footer() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        boxShadow: [
          '0 0 16px 4px #A259F7, 0 0 32px 8px #CBA0E3',
          '0 0 32px 8px #6A0DAD, 0 0 64px 16px #4B0082',
          '0 0 16px 4px #A259F7, 0 0 32px 8px #CBA0E3',
        ],
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: 'power1.inOut',
      });
    }
  }, []);

    return (
    <motion.footer
      ref={glowRef}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'backOut' }}
      className="w-full px-6 py-6 bg-[#181828]/80 backdrop-blur-md border-t border-[#4B0082]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 fixed bottom-0 left-0 z-20"
      style={{ fontFamily: 'monospace', boxShadow: '0 0 16px 4px #A259F7, 0 0 32px 8px #CBA0E3' }}
    >
      <motion.div
        className="text-lg font-bold tracking-widest text-[#A259F7] select-none"
        animate={{
          textShadow: [
            '0 0 8px #A259F7, 0 0 16px #CBA0E3',
            '0 0 16px #A259F7, 0 0 32px #CBA0E3',
            '0 0 8px #A259F7, 0 0 16px #CBA0E3',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        © {new Date().getFullYear()} Jimmy Patel
      </motion.div>
      <nav className="flex gap-6 flex-wrap items-center justify-center">
        {footerLinks.map((link) => (
          link.external ? (
            <motion.a
              key={link.label}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CBA0E3] hover:text-[#FF6F61] transition-colors duration-200 font-semibold text-base px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A259F7]"
              whileHover={{ scale: 1.1, textShadow: '0 0 16px #FF6F61, 0 0 32px #CBA0E3' }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ) : (
            <motion.div
              key={link.label}
              className="inline-block"
              whileHover={{ scale: 1.1, textShadow: '0 0 16px #6A0DAD, 0 0 32px #A259F7' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className="text-[#CBA0E3] hover:text-[#FF6F61] transition-colors duration-200 font-semibold text-base px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A259F7]"
              >
                {link.label}
              </Link>
            </motion.div>
          )
        ))}
      </nav>
    </motion.footer>
    );
} 