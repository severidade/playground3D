import { useGLTF } from '@react-three/drei';

function MacBook() {
  const topModel = useGLTF('./3d/macbook/Macbook_Top.glb');
  const bottomModel = useGLTF('./3d/macbook/Macbook_Bottom.glb');

  return (
    <group
      position={[0, -1, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.5}
    >
      <primitive object={topModel.scene} />
      <primitive object={bottomModel.scene} />
    </group>
  );
}

export default MacBook;
