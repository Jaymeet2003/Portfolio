import React from 'react';
import { motion } from 'framer-motion';
import { useCyberEffectsContext } from '../contexts/CyberEffectsContext';

const EffectsDemo = () => {
  const { currentEffect, switchEffect, getAllEffects, getEffectInfo, effects } = useCyberEffectsContext();

  const effectCategories = {
    'Matrix & Code': ['matrix', 'ascii', 'terminal'],
    'Network & Security': ['particles', 'neural', 'lock'],
    'Surveillance & Detection': ['radar', 'glitch', 'heatmap'],
    '3D & Advanced': ['globe']
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-400 mb-4 font-mono">
            🔐 Cybersecurity Background Effects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of advanced cybersecurity-themed background animations
            designed to create an immersive cyber experience.
          </p>
        </motion.div>

        {/* Current Effect Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                {getEffectInfo().name}
              </h2>
              <p className="text-gray-300 mb-3">{getEffectInfo().description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Intensity:</span>
                <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-xs">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getEffectInfo().intensity * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-green-400">
                  {Math.round(getEffectInfo().intensity * 100)}%
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-6xl mb-2">🔐</div>
              <div className="text-xs text-gray-500 font-mono">ACTIVE</div>
            </div>
          </div>
        </motion.div>

        {/* Effect Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(effectCategories).map(([category, effectNames], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                {category}
              </h3>
              <div className="space-y-3">
                {effectNames.map((effectName) => {
                  const effect = effects[effectName];
                  const isActive = effectName === currentEffect;
                  
                  return (
                    <motion.button
                      key={effectName}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => switchEffect(effectName, 1)}
                      className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                        isActive
                          ? 'bg-green-500/20 border-green-500/50 text-green-400'
                          : 'bg-black/50 border-green-500/20 text-gray-300 hover:bg-black/70 hover:border-green-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            {isActive && (
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            )}
                            <span className="font-mono font-semibold">{effect.name}</span>
                            {isActive && (
                              <span className="text-xs bg-green-500/20 px-2 py-1 rounded">ACTIVE</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{effect.description}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <span className="text-xs text-gray-500 mr-2">I:</span>
                            <div className="w-12 bg-gray-700 rounded-full h-1">
                              <div 
                                className="bg-green-400 h-1 rounded-full transition-all duration-300"
                                style={{ width: `${effect.intensity * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="text-2xl">
                            {getEffectIcon(effectName)}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
            🛠️ Technical Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Animation Libraries</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• GSAP for smooth transitions</li>
                <li>• Framer Motion for UI animations</li>
                <li>• Three.js for 3D effects</li>
                <li>• Anime.js for complex animations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Performance</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Canvas-based rendering</li>
                <li>• Optimized particle systems</li>
                <li>• Efficient memory management</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Features</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Real-time switching</li>
                <li>• Intensity controls</li>
                <li>• Smooth transitions</li>
                <li>• Mobile responsive</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Usage Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
            📖 How to Use
          </h3>
          <div className="text-gray-300 space-y-2">
            <p>• Click on any effect above to switch the background animation</p>
            <p>• Use the control panel in the top-right corner for quick access</p>
            <p>• Effects automatically adjust to screen size and performance</p>
            <p>• Each effect has different intensity levels for optimal visibility</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper function to get icons for effects
const getEffectIcon = (effectName) => {
  const icons = {
    matrix: '🔢',
    glitch: '📺',
    particles: '🌐',
    terminal: '💻',
    radar: '📡',
    neural: '🧠',
    lock: '🔒',
    globe: '🌍',
    ascii: '📝',
    heatmap: '📊'
  };
  return icons[effectName] || '🔐';
};

export default EffectsDemo; 