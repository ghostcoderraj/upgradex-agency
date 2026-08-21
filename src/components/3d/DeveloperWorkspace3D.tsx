import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

const TerminalScreen = () => {
  const [lines, setLines] = React.useState<string[]>([]);
  
  const terminalSequence = React.useMemo(() => [
    "aditya@upgradex:~$ npx create-upgradex-app",
    "🚀 Deploying premium 3D digital ecosystem...",
    "✔ Loading Three.js WebGL canvas engine...",
    "✔ Injecting Brevo SMTP email API keys...",
    "✔ Optimizing luxury Tailwind CSS theme...",
    "✔ Compiling TypeScript production builds...",
    "✨ Build optimized successfully (99/100)",
    "Ready to turn ideas into reality. 🚀",
    "aditya@upgradex:~$ "
  ], []);

  React.useEffect(() => {
    let index = 0;
    setLines([terminalSequence[0]]);
    
    const interval = setInterval(() => {
      index++;
      if (index < terminalSequence.length) {
        setLines((prev) => [...prev, terminalSequence[index]]);
      } else {
        // Reset loop after a delay
        setTimeout(() => {
          setLines([terminalSequence[0]]);
          index = 0;
        }, 4000);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [terminalSequence]);

  return (
    <div className="w-[480px] h-[315px] bg-[#030305]/98 border border-white/15 rounded-xl p-5 font-mono text-[10px] text-gray-300 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(212,175,55,0.05)]">
      {/* Terminal Top Window Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
        </div>
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">UpgradeX Terminal v2.1</span>
        <div className="w-6" />
      </div>

      {/* Terminal Live Output */}
      <div className="flex-1 space-y-2 text-left overflow-hidden pr-0.5 select-none">
        {lines.map((line, i) => {
          const isPrompt = line.startsWith("aditya@upgradex");
          const isSuccess = line.startsWith("✔") || line.startsWith("Ready") || line.startsWith("✨");
          const isProgress = line.startsWith("🚀");

          let colorClass = "text-gray-400";
          if (isPrompt) colorClass = "text-gold font-bold";
          else if (isSuccess) colorClass = "text-emerald-400 font-bold";
          else if (isProgress) colorClass = "text-cyan font-semibold";

          return (
            <div key={i} className={`${colorClass} leading-normal`}>
              {line}
              {isPrompt && i === lines.length - 1 && (
                <span className="inline-block w-1.5 h-3 bg-gold ml-1 animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* System Status Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[7px] text-gray-500 font-bold tracking-wider">
        <span>MEM: 12.4GB / 16GB</span>
        <span>CPU: 4.2%</span>
        <span>PORT: 5173</span>
      </div>
    </div>
  );
};

const DeveloperLaptopAndCode = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const screenRef = useRef<THREE.Mesh>(null!);
  const codePanel1 = useRef<THREE.Group>(null!);
  const codePanel2 = useRef<THREE.Group>(null!);

  useFrame((state, _delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
    if (codePanel1.current) {
      codePanel1.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
    if (codePanel2.current) {
      codePanel2.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={1.1}>
      {/* Laptop Base */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial color="#1a1d29" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Trackpad detail */}
      <mesh position={[0, -1.13, 0.6]}>
        <boxGeometry args={[0.9, 0.01, 0.6]} />
        <meshStandardMaterial color="#252a3d" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Laptop Screen Frame */}
      <mesh ref={screenRef} position={[0, 0.2, -1.0]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[3.2, 2.1, 0.08]} />
        <meshStandardMaterial color="#0e1017" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen Display Terminal (No separate background black box) */}
      <group position={[0, 0.2, -0.95]} rotation={[-0.15, 0, 0]}>
        <Html
          transform
          distanceFactor={3.9}
          position={[0, 0, 0.01]}
          className="pointer-events-none select-none"
        >
          <TerminalScreen />
        </Html>
      </group>

      {/* Floating Glass Code Billboard Left */}
      <group ref={codePanel1} position={[-1.8, 0.6, 0.4]} rotation={[0, 0.35, 0]}>
        <mesh>
          <planeGeometry args={[1.7, 1.2]} />
          <meshPhysicalMaterial
            color="#0f172a"
            transparent
            opacity={0.7}
            roughness={0.1}
            transmission={0.6}
            thickness={0.5}
          />
        </mesh>

        <Text position={[-0.7, 0.4, 0.02]} fontSize={0.08} color="#00f2fe" anchorX="left">
          {`const dev = new Developer({`}
        </Text>
        <Text position={[-0.6, 0.22, 0.02]} fontSize={0.07} color="#d4af37" anchorX="left">
          {`  skills: ["React", "Next.js"],`}
        </Text>
        <Text position={[-0.6, 0.07, 0.02]} fontSize={0.07} color="#a855f7" anchorX="left">
          {`  backend: ["Node", "Supabase"],`}
        </Text>
        <Text position={[-0.6, -0.08, 0.02]} fontSize={0.07} color="#10b981" anchorX="left">
          {`  quality: "Production Ready",`}
        </Text>
        <Text position={[-0.7, -0.23, 0.02]} fontSize={0.08} color="#00f2fe" anchorX="left">
          {`}); dev.deploy();`}
        </Text>
      </group>

      {/* Floating Glass Tech Badge Right */}
      <group ref={codePanel2} position={[1.8, 0.8, 0.2]} rotation={[0, -0.3, 0]}>
        <Float speed={3} floatIntensity={0.5}>
          <mesh>
            <planeGeometry args={[1.5, 1.0]} />
            <meshPhysicalMaterial
              color="#1e1b4b"
              transparent
              opacity={0.75}
              roughness={0.1}
              transmission={0.5}
            />
          </mesh>
          <Text position={[0, 0.2, 0.02]} fontSize={0.11} color="#6366f1" anchorX="center">
            {"REACT • NEXT.JS"}
          </Text>
          <Text position={[0, -0.05, 0.02]} fontSize={0.09} color="#d4af37" anchorX="center">
            {"FULL-STACK POWER"}
          </Text>
          <Text position={[0, -0.28, 0.02]} fontSize={0.07} color="#38bdf8" anchorX="center">
            {"✓ 100% Scalable Code"}
          </Text>
        </Float>
      </group>

      {/* Floating 3D Glowing Tech Nodes (React / Node / TS symbols) */}
      <Float speed={4} rotationIntensity={1.5} position={[-1.2, 1.5, -0.2]}>
        <mesh>
          <octahedronGeometry args={[0.25]} />
          <meshStandardMaterial color="#61dafb" wireframe emissive="#0088cc" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={3.5} rotationIntensity={1.2} position={[1.3, 1.6, -0.4]}>
        <mesh>
          <icosahedronGeometry args={[0.22]} />
          <meshStandardMaterial color="#d4af37" wireframe emissive="#997517" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={4.5} rotationIntensity={1.8} position={[0, 1.9, 0.2]}>
        <mesh>
          <torusGeometry args={[0.2, 0.05, 12, 24]} />
          <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.7} />
        </mesh>
      </Float>
    </group>
  );
};

export const DeveloperWorkspace3D: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[520px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0.5, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, 2, 3]} intensity={1.5} color="#00f2fe" />
        <pointLight position={[5, -2, 3]} intensity={1.8} color="#d4af37" />

        <DeveloperLaptopAndCode />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-radial from-cyan-500/10 via-transparent to-transparent opacity-50" />
    </div>
  );
};
