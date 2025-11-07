import { Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function TestBox() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  return (
    <Box ref={ref}>
      <meshStandardMaterial color="#f7c130" />
    </Box>
  );
}

export default TestBox;
