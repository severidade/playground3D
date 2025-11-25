import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useRef } from 'react';

// Carrega as texturas de forma otimizada
// const [flare1, flare2, flare3] = useLoader(
//   THREE.TextureLoader,
//   [
//     '/flare/flare1.jpg',
//     '/flare/flare2.jpg',
//     '/textura.jpg',
//   ],
// );
function Flares() {
  const group = useRef<THREE.Group>(null!);

  const flare1 = useLoader(THREE.TextureLoader, '/flare/flare1.jpg');
  const flare2 = useLoader(THREE.TextureLoader, '/flare/flare2.jpg');
  const flare3 = useLoader(THREE.TextureLoader, '/flare/flare3.png');

  // movimento suave cinematográfico
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.position.x = Math.sin(t * 0.1) * 0.4;
    group.current.position.y = Math.cos(t * 0.07) * 0.3;
  });

  return (
    <group ref={group}>
      {/* flare principal */}
      <sprite scale={[5, 5, 1]} position={[0, 0, -2]}>
        <spriteMaterial map={flare1} transparent opacity={0.35} />
      </sprite>

      {/* direita */}
      <sprite scale={[1.4, 1.4, 1]} position={[1.3, -0.1, -1.5]}>
        <spriteMaterial map={flare2} transparent opacity={0.25} />
      </sprite>

      {/* esquerda superior */}
      <sprite scale={[0.9, 0.9, 1]} position={[-1.1, 0.7, -1.3]}>
        <spriteMaterial map={flare3} transparent opacity={0.45} />
      </sprite>

      {/* pontinho */}
      <sprite scale={[0.25, 0.25, 1]} position={[0.8, 0.9, -1.2]}>
        <spriteMaterial map={flare3} transparent opacity={0.28} />
      </sprite>
    </group>
  );
}

function BackgroundScene() {
  return (
    <div
      id="bg"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none', // ⛔ obrigatório para não bloquear OrbitControls
      }}
    >
      <Canvas>
        <ambientLight intensity={1} />

        <Flares />

        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default BackgroundScene;
