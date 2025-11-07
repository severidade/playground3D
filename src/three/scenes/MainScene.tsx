/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TestBox from '../elements/TestBox.tsx';
import DefaultLights from '../lights/DefaultLights.tsx';

function MainScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={['#1a1a1a']} />
      <DefaultLights />
      <TestBox />
      <OrbitControls />
    </Canvas>
  );
}

export default MainScene;
