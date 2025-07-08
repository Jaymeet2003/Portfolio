import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Generate random network nodes
function generateNodes(count, spread = 3) {
  return Array.from({ length: count }, () => [
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread
  ]);
}

function NetworkLines({ nodes }) {
  // Connect each node to a few others
  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() < 0.18) {
        lines.push([nodes[i], nodes[j]]);
      }
    }
  }
  return (
    <>
      {lines.map((line, idx) => (
        <Line
          key={idx}
          points={line}
          color="#00ffff"
          lineWidth={1}
          transparent
          opacity={0.18}
        />
      ))}
    </>
  );
}

function FloatingParticles({ count = 40 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });
  const positions = generateNodes(count, 3.5);
  return (
    <Points ref={mesh} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        color="#00ffff"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </Points>
  );
}

function NetworkNodes({ nodes }) {
  return (
    <>
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.7}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </>
  );
}

export default function CyberProjects3DBackground() {
  const nodes = React.useMemo(() => generateNodes(18, 3), []);
  const group = useRef();
  // Parallax effect
  const handlePointerMove = (e) => {
    if (group.current) {
      group.current.rotation.y = (e.clientX / window.innerWidth - 0.5) * 0.5;
      group.current.rotation.x = (e.clientY / window.innerHeight - 0.5) * 0.3;
    }
  };
  React.useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.7} />
        <group ref={group}>
          <NetworkLines nodes={nodes} />
          <NetworkNodes nodes={nodes} />
          <FloatingParticles />
        </group>
      </Canvas>
    </div>
  );
} 