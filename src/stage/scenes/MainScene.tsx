/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';

import DefaultLights from '../lights/DefaultLights.tsx';
import MacBook from '../elements/MacBook.tsx';

function MainScene() {
  return (
    <div className="stage">
      <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
        <DefaultLights />
        <MacBook />
        <OrbitControls
          enableZoom
          minDistance={2} // distância mínima (zoom máximo)
          maxDistance={8}
        />
        <ContactShadows opacity={0.9} position={[0, -0.48, 0]} />
      </Canvas>
    </div>
  );
}

export default MainScene;

// No <Canvas>, eu estou montando o cenário 3D, definindo de onde a câmera observa a cena (posição e orientação) e qual é o ângulo de abertura dessa câmera (campo de visão, ou FOV).

// Em canvas camera define o posicionamento da câmera no cenário
//   [x, y, z]
//   x = 0 → sem deslocamento lateral (nem pra esquerda nem pra direita);
//   y = 0 → sem deslocamento vertical (nem pra cima nem pra baixo);
//   z = 1 → a câmera está 1 unidade à frente do centro da cena, olhando para o ponto (0,0,0).

// PI rad = 180°
// PI / 2 rad = 90°
// PI * 2 rad = 360°

// FOV define o ângulo de abertura da câmera, medido em graus — é o quanto ela “enxerga” ao mesmo tempo
// 60 é um valor equilibrado nem muito fechado ne mito aberto
