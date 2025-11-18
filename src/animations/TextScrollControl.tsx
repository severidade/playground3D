import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextScrollControl() {
  useLayoutEffect(() => {
    const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');
    const text3 = document.getElementById('text-3');

    if (!text1 || !text2 || !text3) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section1',
          start: 'top bottom',
          end: '50% bottom',
          scrub: true,
        },
      })
      .to(text1, {
        opacity: 0,
        ease: 'power2.inOut',
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section1',
          start: 'top 50%',
          end: 'top top',
          scrub: true,
        },
      })
      .to(text2, {
        opacity: 1,
        ease: 'power2.inOut',
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section2',
          start: 'top 50%',
          end: 'top top',
          scrub: true,
        },
      })
      .to(text3, {
        opacity: 1,
        ease: 'power2.inOut',
      });
  }, []);
}

export default TextScrollControl;
