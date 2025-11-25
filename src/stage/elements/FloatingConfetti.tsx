import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingConfetti({ count = 120 }) {
  const confettiRef = useRef();

  // gerar posições e propriedades aleatórias
  const {
    positions, colors, sizes, rotations, rotationSpeeds,
  } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const rotations = new Float32Array(count);
    const rotationSpeeds = new Float32Array(count);

    const palette = [
      new THREE.Color('#ff6b6b'), // vermelho claro
      new THREE.Color('#ffd93d'), // amarelo
      new THREE.Color('#6bcffd'), // azul
      new THREE.Color('#b16bff'), // roxo
      new THREE.Color('#6bff8a'), // verde
    ];

    for (let i = 0; i < count; i++) {
      // posição
      positions[i * 3 + 0] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

      // cor random da paleta
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3 + 0] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // tamanho de cada confete
      sizes[i] = Math.random() * 0.09 + 0.03;

      // rotação individual
      rotations[i] = Math.random() * Math.PI;
      rotationSpeeds[i] = Math.random() * 0.02 + 0.005;
    }

    return {
      positions, colors, sizes, rotations, rotationSpeeds,
    };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (!confettiRef.current) return;

    const { array } = confettiRef.current.geometry.attributes.rotation;

    for (let i = 0; i < count; i++) {
      array[i] += rotationSpeeds[i]; // girar cada confete
    }

    confettiRef.current.geometry.attributes.rotation.needsUpdate = true;

    confettiRef.current.rotation.y = t * 0.1; // rotação do grupo
  });

  return (
    <points ref={confettiRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />

        <bufferAttribute
          attach="attributes-rotation"
          count={count}
          array={rotations}
          itemSize={1}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.15}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
