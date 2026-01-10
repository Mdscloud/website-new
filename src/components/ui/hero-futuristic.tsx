'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Server Rack 3D Component
const ServerRack = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Main server body */}
      <mesh 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 3, 0.8]} />
        <meshStandardMaterial 
          color={hovered ? "#3a4a8a" : "#202755"} 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Server slots */}
      {[-0.9, -0.3, 0.3, 0.9].map((y, i) => (
        <group key={i} position={[0, y, 0.41]}>
          <mesh>
            <boxGeometry args={[1.6, 0.4, 0.02]} />
            <meshStandardMaterial color="#0B123B" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* LED lights */}
          <mesh position={[0.7, 0, 0.02]}>
            <circleGeometry args={[0.05]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#4ade80" : "#FE8B36"} />
          </mesh>
          <mesh position={[0.55, 0, 0.02]}>
            <circleGeometry args={[0.05]} />
            <meshBasicMaterial color="#4ade80" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Floating Particles
const Particles = ({ count = 100 }: { count?: number }) => {
  const particles = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.05;
      particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#5a7aff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Connection Lines - Data flowing
const DataFlow = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshBasicMaterial;
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3;
      });
    }
  });

  const lines = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      positions.push([
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2 - 1
      ]);
    }
    return positions;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="#FE8B36" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

// Hexagonal Grid
const HexGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={gridRef} position={[0, 0, -3]}>
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 3 + Math.sin(i * 0.5) * 0.5;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            rotation={[0, 0, angle]}
          >
            <ringGeometry args={[0.2, 0.25, 6]} />
            <meshBasicMaterial color="#202755" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
};

// Scene Component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#FE8B36" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#5a7aff" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <ServerRack position={[0, 0, 0]} />
      <Particles count={150} />
      <DataFlow />
      <HexGrid />
    </>
  );
};

export const HeroFuturistic = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;
