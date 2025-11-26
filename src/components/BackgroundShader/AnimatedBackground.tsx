import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import './BackgroundShader.js'; // Importe o arquivo do shader para estender o three/fiber

function SceneBackground() {
  const materialRef = useRef();
  const { size } = useThree();

  // Use useFrame para animar a variável de tempo (u_time) em cada frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.u_time = clock.getElapsedTime();
    }
  });

  // Um plano que cobre toda a tela (screen quad)
  return (
    <Plane args={[size.width, size.height, 1, 1]} position={[0, 0, -1]}>
      {/* Usamos a tag com o nome do shader estendido em camelCase */}
      <backgroundMaterial
        ref={materialRef}
        u_resolution={[size.width, size.height]}
      />
    </Plane>
  );
}

export function AnimatedBackground() {
  return (
    <Canvas
      // Define a câmera para ser ortográfica, o que funciona bem para fundos 2D/planos
      orthographic
      camera={{ zoom: 1, position: [0, 0, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        zIndex: -1, // Garante que fique atrás de outro conteúdo HTML
      }}
    >
      <SceneBackground />
    </Canvas>
  );
}

export default AnimatedBackground;
