import { Box } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import GSAPIntroControl from '../controls/GSAPIntroControl';
// import { gsap } from 'gsap';

function TestBox() {
  const ref = useRef<any>(null);
  // Rotação contínua com Three.js
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });

  return (
    <Box ref={ref} args={[0.6, 0.6, 0.6]}>
      <meshStandardMaterial color="#f7c130" />
      <GSAPIntroControl ref={ref} />
    </Box>
  );
}

export default TestBox;
