# 🔐 Cybersecurity Portfolio

A modern, interactive cybersecurity portfolio built with React, featuring advanced background animations and effects inspired by cyber security themes.

## ✨ Features

### 🎨 Background Effects
The portfolio includes 10 different cybersecurity-themed background animations:

#### Matrix & Code Effects
- **Matrix Rain** - Falling green code symbols with hex values and cyber commands
- **ASCII Background** - Real-time moving ASCII art terminal
- **Terminal Window** - Auto-typing terminal commands in background

#### Network & Security Effects
- **Particle Network** - Connected particles like a network graph with pulsing data packets
- **Neural Network** - Glowing neural net mesh representing AI x cybersecurity
- **Lock & Circuit** - Stylized lock with branching circuits

#### Surveillance & Detection Effects
- **Radar Pulse** - Circular radar sweep with pinging targets
- **Glitch & Scanlines** - Subtle screen glitches and horizontal scanlines
- **Heatmap Grid** - Live updating data grid for packet inspection

#### 3D & Advanced Effects
- **Globe Attacks** - 3D globe with cyber attack visualizations (inspired by Norse Attack Map)

### 🛠️ Technical Stack
- **React 19** - Modern React with hooks
- **Framer Motion** - Smooth page transitions and UI animations
- **GSAP** - Advanced animations and transitions
- **Three.js** - 3D graphics and effects
- **Anime.js** - Complex animation sequences
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast development and building

### 🎯 Key Features
- **Real-time Effect Switching** - Switch between effects instantly
- **Performance Optimized** - Canvas-based rendering for smooth animations
- **Responsive Design** - Works on all screen sizes
- **Interactive Controls** - Easy-to-use effect control panel
- **Smooth Transitions** - GSAP-powered effect transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd cyber-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📱 Usage

### Switching Background Effects
1. **Control Panel** - Click the "Effects" button in the top-right corner
2. **Demo Page** - Visit `/effects` to see all effects with descriptions
3. **Programmatic** - Use the `useCyberEffects` hook in your components

### Effect Control Panel
The control panel provides:
- Current effect information
- Effect intensity indicators
- Quick switching between effects
- Effect descriptions and categories

### Custom Effects
To add custom effects:
1. Add your effect to `CyberBackgroundEffects.jsx`
2. Update the `useCyberEffects` hook
3. Add effect metadata and configuration

## 🎨 Effect Details

### Matrix Rain
- **Technology**: Canvas + JavaScript
- **Features**: Falling cyber commands, hex values, IP addresses
- **Performance**: Optimized for 60fps

### Particle Network
- **Technology**: Canvas + Three.js
- **Features**: Connected nodes, pulsing animations, hover interactions
- **Performance**: Adaptive particle count based on device

### Neural Network
- **Technology**: Three.js + GSAP
- **Features**: 3D neural mesh, glowing connections, dynamic animations
- **Performance**: GPU-accelerated rendering

### Globe Attacks
- **Technology**: Three.js + Custom shaders
- **Features**: 3D globe, attack visualization, curved trajectories
- **Performance**: Optimized geometry and materials

## 🔧 Configuration

### Effect Intensity
Each effect has configurable intensity levels:
```javascript
const { switchEffect, getEffectConfig } = useCyberEffects();

// Get effect configuration
const config = getEffectConfig('matrix');
console.log(config.intensity); // 0.7
```

### Custom Effect Parameters
```javascript
// Switch to effect with custom duration
switchEffect('neural', 2.0); // 2 second transition

// Get all available effects
const allEffects = getAllEffects();
```

## 📁 Project Structure
```
src/
├── components/
│   ├── CyberBackgroundEffects.jsx  # Main effects component
│   ├── GlobeAttacks.jsx           # 3D globe visualization
│   ├── EffectControlPanel.jsx     # Effect switching UI
│   └── ...
├── hooks/
│   └── useCyberEffects.js         # Effect management hook
├── pages/
│   ├── EffectsDemo.jsx            # Effects showcase page
│   └── ...
└── ...
```

## 🎯 Performance Optimization

### Canvas Rendering
- Efficient canvas clearing and redrawing
- Optimized particle systems
- Adaptive quality based on device performance

### Memory Management
- Proper cleanup of animation loops
- Disposal of Three.js resources
- Event listener cleanup

### Responsive Design
- Adaptive effect parameters
- Mobile-optimized animations
- Touch-friendly controls

## 🔒 Security Features
- No external dependencies for core effects
- Secure animation implementations
- Performance monitoring and throttling

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Add your cybersecurity-themed effect
4. Submit a pull request

## 📄 License
This project is licensed under the MIT License.

## 🙏 Acknowledgments
- Inspired by Norse Attack Map
- Matrix rain effect inspired by The Matrix
- Three.js community for 3D graphics examples
- GSAP team for animation library

---

**Built with ❤️ for the cybersecurity community**
