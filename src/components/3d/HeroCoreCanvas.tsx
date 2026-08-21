import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Metallic Core Sphere with interactive rotation and distortion
const CoreSphere = ({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef1 = useRef<THREE.Group>(null!);
  const outerRingRef2 = useRef<THREE.Group>(null!);
  const outerRingRef3 = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
      // Gentle mouse tracking reaction
      meshRef.current.rotation.y += (mousePos.current.x * 0.5 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (mousePos.current.y * 0.5 - meshRef.current.rotation.x) * 0.05;
    }
    if (outerRingRef1.current) {
      outerRingRef1.current.rotation.z += delta * 0.3;
      outerRingRef1.current.rotation.x += delta * 0.1;
    }
    if (outerRingRef2.current) {
      outerRingRef2.current.rotation.y += delta * 0.4;
      outerRingRef2.current.rotation.z -= delta * 0.2;
    }
    if (outerRingRef3.current) {
      outerRingRef3.current.rotation.x -= delta * 0.35;
      outerRingRef3.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group>
      {/* Central Glowing Tech Core */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <Sphere ref={meshRef} args={[1.25, 64, 64]} scale={1.0}>
          <meshPhysicalMaterial
            color="#d4af37"
            emissive="#3a2700"
            roughness={0.15}
            metalness={0.95}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>

      {/* Inner Glowing Energetic Sphere */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.18} />
      </Sphere>

      {/* Outer Metallic Ring 1 */}
      <group ref={outerRingRef1}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.3, 0.025, 16, 100]} />
          <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.1} emissive="#664d00" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Outer Cyan Ring 2 */}
      <group ref={outerRingRef2}>
        <mesh rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <torusGeometry args={[2.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#00f2fe" metalness={0.9} roughness={0.1} emissive="#007780" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Wireframe Orbital Ring 3 */}
      <group ref={outerRingRef3}>
        <mesh rotation={[Math.PI / 2, Math.PI / 8, 0]}>
          <torusGeometry args={[3.3, 0.015, 16, 100]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} emissive="#3b0764" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
};

// Orbital Floating Particles
const FloatingParticleCloud = ({ count = 90 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorGold = new THREE.Color('#d4af37');
    const colorCyan = new THREE.Color('#00f2fe');
    const colorWhite = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const rVal = Math.random();
      const chosenColor = rVal > 0.6 ? colorGold : rVal > 0.3 ? colorCyan : colorWhite;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export const HeroCoreCanvas: React.FC = () => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mousePos.current = {
      x: (clientX / innerWidth) * 2 - 1,
      y: -(clientY / innerHeight) * 2 + 1,
    };
  };

  return (
    <div
      className="relative w-full h-[450px] lg:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#00f2fe" />
        <pointLight position={[5, -5, 5]} intensity={2.0} color="#d4af37" />

        <CoreSphere mousePos={mousePos} />
        <FloatingParticleCloud count={120} />
      </Canvas>

      {/* Subtle Bottom Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-gold/10 via-transparent to-transparent opacity-60" />
    </div>
  );
};
