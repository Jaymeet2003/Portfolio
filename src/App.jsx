import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import CyberBackgroundEffects from './components/CyberBackgroundEffects';
import EffectControlPanel from './components/EffectControlPanel';
import { CyberEffectsProvider, useCyberEffectsContext } from './contexts/CyberEffectsContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import EffectsDemo from './pages/EffectsDemo';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef(window.scrollY);
  const debounceRef = useRef(false);
  const [showMatrixTransition, setShowMatrixTransition] = useState(false);
  const [matrixTransitionDir, setMatrixTransitionDir] = useState('toAbout'); // 'toAbout' | 'toHome'
  const [aboutReady, setAboutReady] = useState(true);
  const [homeReady, setHomeReady] = useState(true);
  const [lastPath, setLastPath] = useState(location.pathname);
  const [homeTransitioning, setHomeTransitioning] = useState(false);
  const [showMatrixBg, setShowMatrixBg] = useState(location.pathname !== '/');

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Define the navigation order
  const pageOrder = ['/', '/about', '/projects', '/contact'];

  useEffect(() => {
    // Mouse wheel overscroll (works even if no scroll event fires)
    const handleWheel = (e) => {
      if (debounceRef.current) return;
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const atTop = scrollY <= 0;
      const atBottom = scrollY + clientHeight >= scrollHeight - 2;
      const currentIdx = pageOrder.indexOf(location.pathname);
      if (e.deltaY > 0 && atBottom && currentIdx < pageOrder.length - 1) {
        debounceRef.current = true;
        navigate(pageOrder[currentIdx + 1]);
        setTimeout(() => { debounceRef.current = false; }, 1200);
      } else if (e.deltaY < 0 && atTop && currentIdx > 0) {
        debounceRef.current = true;
        navigate(pageOrder[currentIdx - 1]);
        setTimeout(() => { debounceRef.current = false; }, 1200);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Touch overscroll for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const atTop = scrollY <= 0;
      const atBottom = scrollY + clientHeight >= scrollHeight - 2;
      const currentIdx = pageOrder.indexOf(location.pathname);
      if (deltaY > 60 && atBottom && currentIdx < pageOrder.length - 1 && !debounceRef.current) {
        debounceRef.current = true;
        navigate(pageOrder[currentIdx + 1]);
        setTimeout(() => { debounceRef.current = false; }, 1200);
      } else if (deltaY < -60 && atTop && currentIdx > 0 && !debounceRef.current) {
        debounceRef.current = true;
        navigate(pageOrder[currentIdx - 1]);
        setTimeout(() => { debounceRef.current = false; }, 1200);
      }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  // Ensure About page is ready on direct navigation
  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutReady(true);
    }
    if (location.pathname === '/') {
      setHomeReady(true);
    }
  }, [location.pathname]);

  // Intercept scroll navigation for Home <-> About
  useEffect(() => {
    const handleWheel = (e) => {
      if (location.pathname === '/' && e.deltaY > 0) {
        // At bottom of Home, trigger transition to About
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
          setHomeTransitioning(true);
          setAboutReady(false);
          e.preventDefault();
        }
      } else if (location.pathname === '/about' && e.deltaY < 0) {
        // At top of About, trigger transition to Home
        if (window.scrollY <= 0) {
          // For About -> Home, keep old overlay for now or implement similar logic if needed
          setShowMatrixTransition(true);
          setMatrixTransitionDir('toHome');
          // Do not setHomeReady(false); Always keep Home ready
          e.preventDefault();
        }
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      setShowMatrixBg(false);
      const timeout = setTimeout(() => setShowMatrixBg(true), 400);
      return () => clearTimeout(timeout);
    } else {
      setShowMatrixBg(true);
    }
  }, [location.pathname]);

  // After transition, switch route
  const handleHomeTransitionComplete = () => {
    setHomeTransitioning(false);
    setAboutReady(true);
    navigate('/about', { replace: true });
  };

  // Render background effect for each route directly
  const renderBackgroundEffect = () => {
    if (location.pathname === '/') {
      return showMatrixBg ? <CyberBackgroundEffects effect="matrix" className="cyber-effect" /> : null;
    }
    if (location.pathname === '/projects') {
      return <CyberBackgroundEffects effect="neural" className="cyber-effect" />;
    }
    if (location.pathname === '/contact') {
      return <CyberBackgroundEffects effect="terminal" className="cyber-effect" />;
    }
    if (location.pathname === '/effects') {
      return <CyberBackgroundEffects effect="particles" className="cyber-effect" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Only on home/about page */}
      {renderBackgroundEffect()}
      {/* Control Panel - Only on effects demo page */}
      {location.pathname === '/effects' && <EffectControlPanel />}
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition>{homeReady ? <Home transitioning={homeTransitioning} onTransitionComplete={handleHomeTransitionComplete} /> : null}</PageTransition>} />
            <Route path="/about" element={<PageTransition>{aboutReady ? <About /> : null}</PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/effects" element={<PageTransition><EffectsDemo /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CyberEffectsProvider initialEffect="particles">
      <AppContent />
    </CyberEffectsProvider>
  );
}
