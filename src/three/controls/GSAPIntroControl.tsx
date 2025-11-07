import { useEffect } from 'react';
import { gsap } from 'gsap';

export function GSAPIntroControl({ ref }: { ref: any }) {
  useEffect(() => {
    if (ref.current) {
      // Anima posição e rotação
      const tl = gsap.timeline();
      tl.fromTo(
        ref.current.position,
        { y: -2 },
        { y: 0, duration: 1.5, ease: 'power3.out' },
      );
      tl.fromTo(
        ref.current.rotation,
        { y: Math.PI },
        { y: 0, duration: 2, ease: 'power2.out' },
        0, // começa junto com o movimento
      );
    }
  }, [ref]);

  return null; // não renderiza nada, só controla
}

export default GSAPIntroControl;
