/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import TestBox from '../elements/TestBox.tsx';
import DefaultLights from '../lights/DefaultLights.tsx';
import Operario from '../elements/Operario.tsx';

function MainScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <DefaultLights />
      <TestBox />
      <Operario />
      <OrbitControls
        enableZoom
        minDistance={2} // distância mínima (zoom máximo)
        maxDistance={8} // distância máxima (zoom mínimo)
      />
    </Canvas>
  );
}

export default MainScene;
