import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import GSAPIntroControl from '../controls/GSAPIntroControl';

function Operario() {
  const { scene } = useGLTF('./3d/operario.glb');
  const modelRef = useRef(null);

  // Rotação contínua com Three.js
  useFrame(() => {
    if (modelRef.current) modelRef.current.rotation.y += 0.005;
  });

  // return <primitive ref={modelRef} object={scene} scale={2} position={[0, 0, 0]} />;
  return (
    <>
      <primitive ref={modelRef} object={scene} scale={1.6} position={[0, 0, 0]} />
      <GSAPIntroControl ref={modelRef} />
    </>
  );
}

export default Operario;
