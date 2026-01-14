
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial, Environment, Stars, Cylinder, Box } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNodes = () => {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<any>(null);
  useFrame((state) => {
    if (ref.current) {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points positions={positions} ref={ref}>
      <PointMaterial
        transparent
        color="#22D3EE"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export const NeuralMeshScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22D3EE" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[2, 64, 64]}>
            <meshStandardMaterial 
              color="#0B0E14" 
              wireframe 
              transparent 
              opacity={0.15} 
            />
          </Sphere>
          <NeuralNodes />
        </Float>

        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export const DatabaseVisScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22D3EE" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <group>
            {/* Database Stack Representation */}
            {[0, 1, 2, 3].map((i) => (
               <Cylinder key={i} args={[1.5, 1.5, 0.2, 32]} position={[0, i * 0.4 - 0.6, 0]}>
                 <meshStandardMaterial 
                   color="#1e293b" 
                   metalness={0.9} 
                   roughness={0.1} 
                   emissive="#22D3EE" 
                   emissiveIntensity={0.05}
                 />
               </Cylinder>
            ))}

            {/* Central "Core" of Memory */}
            <Sphere args={[0.4, 32, 32]} position={[0, 0, 0]}>
               <MeshDistortMaterial
                 color="#22D3EE"
                 distort={0.4}
                 speed={3}
                 metalness={0.8}
                 roughness={0.2}
               />
            </Sphere>

            {/* Orbiting Memory Bits */}
            {[...Array(6)].map((_, i) => (
                <Float key={i} speed={3} rotationIntensity={2} floatIntensity={1}>
                    <Box args={[0.1, 0.1, 0.1]} position={[
                        Math.cos(i * (Math.PI / 3)) * 2,
                        Math.sin(i * (Math.PI / 3)) * 0.5,
                        Math.sin(i * (Math.PI / 3)) * 2
                    ]}>
                        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={2} />
                    </Box>
                </Float>
            ))}
          </group>
        </Float>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
