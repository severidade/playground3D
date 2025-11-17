import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';
import FloatAnimation from '../../animations/FloatAnimation.tsx';

gsap.registerPlugin(ScrollTrigger);

function MacBook() {
  const topModel = useGLTF('./macbook/Macbook_Top.glb');
  const bottomModel = useGLTF('./macbook/Macbook_Bottom.glb');

  const groupRef = useRef<THREE.Group>(null);
  const topRef = useRef<THREE.Group>(null);
  const bottomRef = useRef<THREE.Group>(null);

  const { pause: pauseFloat, resume: resumeFloat } = FloatAnimation(groupRef);

  useEffect(() => {
    if (!groupRef.current || !topRef.current || !bottomRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section1',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          onEnter: () => {
            pauseFloat();
          },
          onLeaveBack: () => {
            resumeFloat(); // 🔄 volta a flutuar se subir a página
          },
        },
      })
      .to(
        groupRef.current?.rotation,
        {
          x: 0,
          ease: 'power2.inOut',
        },
      )
      .to(
        groupRef.current.rotation,
        {
          y: Math.PI - 0.6,
          ease: 'power2.inOut',
        },
        '>', /* grupo gira depois da animação anterior */
      )
      .to(
        topRef.current.rotation,
        {
          x: Math.PI / 2 + 0.1,
        },
        '<', /* junto com a animação o tampo do computador abre */
      )
      .to(
        groupRef.current.position,
        {
          x: 1.1,
          ease: 'power2.inOut', /* desloca o grupo todo ao meso tempo no eixo  x */
        },
        '<',
      )
      .to(
        groupRef.current.scale,
        {
          x: 0.33,
          y: 0.33,
          z: 0.33,
          ease: 'power2.inOut', /* Reduz todo o grupo ao mesmo tempo  */
        },
        '<',
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section2',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI + 0.8,
        ease: 'power2.inOut',
      })
      .to(
        groupRef.current.position,
        {
          x: -1.3,
          ease: 'power2.inOut',
        },
        '<',
      );
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.4, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.4}
    >
      <primitive ref={topRef} object={topModel.scene} />
      <primitive ref={bottomRef} object={bottomModel.scene} />
    </group>
  );
}

export default MacBook;

// X gira para frente e para trás (como acenar com a cabeça)
// Y gira para os lados (como dizer “não”)
// z gira deitado (como inclinar a cabeça para o lado)

// PI rad = 180°
// PI / 2 rad = 90°
// PI * 2 rad = 360°
