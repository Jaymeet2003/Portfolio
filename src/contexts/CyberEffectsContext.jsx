import React, { createContext, useContext, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const CyberEffectsContext = createContext();

export const useCyberEffectsContext = () => {
  const context = useContext(CyberEffectsContext);
  if (!context) {
    throw new Error('useCyberEffectsContext must be used within a CyberEffectsProvider');
  }
  return context;
};

export const CyberEffectsProvider = ({ children, initialEffect = 'matrix' }) => {
  const [currentEffect, setCurrentEffect] = useState(initialEffect);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const effects = {
    matrix: {
      name: 'Matrix Rain',
      description: 'Falling green code symbols with hex values and cyber commands',
      intensity: 0.7
    },
    glitch: {
      name: 'Glitch & Scanlines',
      description: 'Subtle screen glitches and horizontal scanlines',
      intensity: 0.5
    },
    particles: {
      name: 'Particle Network',
      description: 'Connected particles like a network graph with pulsing data packets',
      intensity: 0.6
    },
    terminal: {
      name: 'Terminal Window',
      description: 'Auto-typing terminal commands in background',
      intensity: 0.4
    },
    radar: {
      name: 'Radar Pulse',
      description: 'Circular radar sweep with pinging targets',
      intensity: 0.5
    },
    neural: {
      name: 'Neural Network',
      description: 'Glowing neural net mesh representing AI x cybersecurity',
      intensity: 0.7
    },
    lock: {
      name: 'Lock & Circuit',
      description: 'Stylized lock with branching circuits',
      intensity: 0.6
    },
    globe: {
      name: 'Globe Attacks',
      description: '3D globe with cyber attack visualizations',
      intensity: 0.8
    },
    ascii: {
      name: 'ASCII Background',
      description: 'Real-time moving ASCII art terminal',
      intensity: 0.5
    },
    heatmap: {
      name: 'Heatmap Grid',
      description: 'Live updating data grid for packet inspection',
      intensity: 0.4
    }
  };

  const switchEffect = (newEffect, duration = 1) => {
    if (newEffect === currentEffect || isTransitioning) return;
    
    setCurrentEffect(newEffect);
  };

  const getEffectConfig = (effectName) => {
    return effects[effectName] || effects.matrix;
  };

  const getAllEffects = () => {
    return Object.keys(effects);
  };

  const getEffectInfo = () => {
    return effects[currentEffect];
  };

  // Track currentEffect changes
  useEffect(() => {
  }, [currentEffect]);

  const value = {
    currentEffect,
    switchEffect,
    getEffectConfig,
    getAllEffects,
    getEffectInfo,
    isTransitioning,
    effects
  };

  return (
    <CyberEffectsContext.Provider value={value}>
      {children}
    </CyberEffectsContext.Provider>
  );
}; 