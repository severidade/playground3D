import { useLayoutEffect } from 'react';
import gsap from 'gsap';

function useAnimatePieSlice3() {
  useLayoutEffect(() => {
    const el = document.getElementById('pieSlice3');

    if (!el) return;

    // Rotação contínua
    gsap.to(el, {
      rotation: '+=360',
      duration: 4,
      ease: 'none',
      repeat: -1,
      modifiers: {
        rotation: gsap.utils.unitize((v) => v % 360),
      },
    });

    // Abertura/fechamento da fatia (clip-path)
    gsap.to(el, {
      clipPath: 'polygon(50% 50%, 100% 800%, 100% 0%)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    // Mudança de cor
    gsap.to(el, {
      borderColor: '#ff008c',
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);
}

export default useAnimatePieSlice3;
