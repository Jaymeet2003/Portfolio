import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Text, Tube } from '@react-three/drei';
import * as THREE from 'three';

function GlowMaterial({ color }) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.7}
      metalness={0.3}
      roughness={0.2}
    />
  );
}

// Add a digital grid floor for AR/cyber effect
function CyberGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.55, 0]}>
      <planeGeometry args={[4, 1.2, 16, 8]} />
      <meshBasicMaterial color="#00fff7" wireframe opacity={0.18} transparent />
    </mesh>
  );
}

// Add scanline/flicker effect as a transparent overlay
function ScanlineOverlay() {
  return (
    <mesh position={[0, 0, 0.7]}>
      <planeGeometry args={[4, 1.2]} />
      <meshBasicMaterial color="#00fff7" transparent opacity={0.07} />
    </mesh>
  );
}

// 3D Blue Team Shield (defensive, classic shield)
function BlueShield() {
  return (
    <group>
      {/* Shield base */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshPhysicalMaterial color="#00CFFF" transmission={0.7} transparent opacity={0.7} roughness={0.1} metalness={0.7} clearcoat={0.5} clearcoatRoughness={0.1} />
      </mesh>
      {/* Shield overlay */}
      <mesh position={[0, 0, 0.04]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.38, 0.06, 16, 64]} />
        <meshPhysicalMaterial color="#00FFFF" transmission={0.8} transparent opacity={0.4} />
      </mesh>
      {/* Shield "cut" for classic look */}
      <mesh position={[0, -0.18, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.08, 32, 1, false, 0, Math.PI]} />
        <meshPhysicalMaterial color="#001F3F" transmission={0.5} transparent opacity={0.3} metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
}

// 3D Red Team Shield (offensive, angular, aggressive)
function RedShield() {
  return (
    <group>
      {/* Shield base */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.36, 0]} />
        <meshPhysicalMaterial color="#FF2D2D" transmission={0.6} transparent opacity={0.7} metalness={0.7} roughness={0.15} />
      </mesh>
      {/* Shield border */}
      <mesh position={[0, 0, 0.04]}>
        <torusGeometry args={[0.36, 0.05, 8, 32]} />
        <meshPhysicalMaterial color="#FF4500" transmission={0.7} transparent opacity={0.4} />
      </mesh>
      {/* Center line */}
      <mesh position={[0, 0, 0.08]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.7, 16]} />
        <meshPhysicalMaterial color="#FF6F61" transmission={0.5} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// 3D Purple Team: Atom/Neural Node
function PurpleAtom() {
  return (
    <group>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#CBA0E3" emissive="#B10DC9" emissiveIntensity={1.2} metalness={0.7} roughness={0.18} />
      </mesh>
      {/* Orbits */}
      {[0, Math.PI / 3, (2 * Math.PI) / 3].map((angle, i) => (
        <mesh key={i} rotation={[angle, angle, 0]}>
          <torusGeometry args={[0.32, 0.03, 16, 64]} />
          <meshBasicMaterial color="#B10DC9" transparent opacity={0.5} />
        </mesh>
      ))}
      {/* Node connections */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.cos(i * 2 * Math.PI / 3) * 0.32, Math.sin(i * 2 * Math.PI / 3) * 0.32, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#B10DC9" emissive="#CBA0E3" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// 3D Terminal Window for "Always Learning"
function TerminalLogo() {
  return (
    <group>
      {/* Terminal window */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.36, 0.08]} />
        <meshStandardMaterial color="#222222" emissive="#00fff7" emissiveIntensity={0.18} metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Terminal header bar */}
      <mesh position={[0, 0.18, 0.045]}>
        <boxGeometry args={[0.6, 0.06, 0.01]} />
        <meshStandardMaterial color="#3B0A57" emissive="#6A0DAD" emissiveIntensity={0.3} />
      </mesh>
      {/* Prompt symbol ">_" */}
      <Html position={[-0.18, 0, 0.05]} center style={{ fontFamily: 'monospace', color: '#00fff7', fontSize: 24, fontWeight: 700, textShadow: '0 0 8px #00fff7' }}>
        {'>'}_
      </Html>
    </group>
  );
}

function AnimatedLogo({ children, position, rotationSpeed = 0.5 }) {
  const ref = React.useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * rotationSpeed;
      ref.current.rotation.x += delta * (rotationSpeed / 2);
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.08;
    }
  });
  return <group ref={ref} position={position}>{children}</group>;
}

// Red Team: Angular star/mask
function RedTeamLogo() {
  // Star points as thin boxes
  const points = [
    [0, 0.32, 0], [0.18, 0.18, 0], [0.32, 0, 0], [0.18, -0.18, 0], [0, -0.32, 0],
    [-0.18, -0.18, 0], [-0.32, 0, 0], [-0.18, 0.18, 0]
  ];
  return (
    <group>
      {/* Center diamond */}
      <mesh>
        <boxGeometry args={[0.18, 0.18, 0.06]} />
        <meshStandardMaterial color="#D32F2F" emissive="#D90429" emissiveIntensity={0.7} metalness={0.7} roughness={0.18} />
      </mesh>
      {/* Star points */}
      {points.map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0]} rotation={[0, 0, (Math.PI / 4) * i]}>
          <boxGeometry args={[0.08, 0.025, 0.06]} />
          <meshStandardMaterial color="#D32F2F" emissive="#FF2D55" emissiveIntensity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

// Blue Team: Shield
function BlueTeamLogo() {
  return (
    <group>
      {/* Shield base (squashed sphere) */}
      <mesh scale={[1, 1.2, 0.5]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#1976D2" emissive="#00CFFF" emissiveIntensity={0.5} metalness={0.7} roughness={0.18} />
      </mesh>
      {/* Shield outline (torus arc) */}
      <mesh rotation={[0, 0, Math.PI]}> 
        <torusGeometry args={[0.18, 0.01, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#1976D2" emissive="#00CFFF" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

// Purple Team: Interlocking circles
function PurpleTeamLogo() {
  return (
    <group>
      {/* Left circle */}
      <mesh position={[-0.08, 0, 0]}>
        <torusGeometry args={[0.12, 0.02, 32, 100]} />
        <meshStandardMaterial color="#8E24AA" emissive="#A259F7" emissiveIntensity={0.7} />
      </mesh>
      {/* Right circle */}
      <mesh position={[0.08, 0, 0]}>
        <torusGeometry args={[0.12, 0.02, 32, 100]} />
        <meshStandardMaterial color="#8E24AA" emissive="#A259F7" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

// Always Learning: Sine wave + code braces
function AlwaysLearningLogo() {
  // Sine wave curve for TubeGeometry
  const curve = React.useMemo(() => {
    class SineCurve extends THREE.Curve {
      getPoint(t) {
        const x = -0.16 + 0.32 * t;
        const y = 0.08 * Math.sin(2 * Math.PI * t);
        return new THREE.Vector3(x, y, 0);
      }
    }
    return new SineCurve();
  }, []);
  return (
    <group>
      {/* Sine wave */}
      <Tube args={[curve, 64, 0.02, 8, false]}>
        <meshStandardMaterial color="#00C853" emissive="#00FFB3" emissiveIntensity={0.7} />
      </Tube>
      {/* Code braces as 3D text */}
      <Text position={[0, -0.13, 0]} fontSize={0.08} color="#00C853" anchorX="center" anchorY="middle" font="monospace">
        {'{ }'}
      </Text>
    </group>
  );
}

export default function Team3DLogos() {
  return (
    <div style={{ width: '100%', height: 120, position: 'relative', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 2]} intensity={1.2} color="#FFFFFF" />
        {/* No logos rendered */}
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
      </Canvas>
    </div>
  );
} 