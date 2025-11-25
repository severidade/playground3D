import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

export default function FloatingParticles({ count = 10 }) {
  const pointsRef = useRef();

  const positions = new Float32Array(count * 3);

  // distribuição das partículas
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 4; // área de 4x4x4
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y = t * 0.04; // rotação lenta
    pointsRef.current.position.y = Math.sin(t * 0.2) * 0.1; // flutuação suave
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#ffffff"
        opacity={0.25}
        transparent
        sizeAttenuation
      />
    </points>
  );
}
