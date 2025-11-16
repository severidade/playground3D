import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextScrollControl() {
  useEffect(() => {
    const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');
    const text3 = document.getElementById('text-3');
    const subtitle = document.querySelector('.subtitle');

    if (!text1 || !text2 || !text3 || !subtitle) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#section1',
          start: 'top bottom',
          end: '30% bottom',
          scrub: true,
        },
      })
      .to(text1, {
        opacity: 0,
        ease: 'power2.inOut',
      });
  }, []);
}

export default TextScrollControl;
