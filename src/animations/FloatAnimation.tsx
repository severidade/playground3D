import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function FloatAnimation(ref: React.RefObject<THREE.Group>): void {
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return undefined;

    const floatAnimation = gsap.to(ref.current.position, {
      y: '-=0.05',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    animationRef.current = floatAnimation;

    return () => {
      floatAnimation.kill();
    };
  }, [ref]);

  const pause = () => {
    animationRef.current?.pause();
  };

  const resume = () => {
    animationRef.current?.resume();
  };

  return { pause, resume };
}

export default FloatAnimation;
