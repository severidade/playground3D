import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import { useLayoutEffect } from 'react';
import styles from './hero.module.css';

function Hero() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  });
  return (
    <section id="hero">
      <div className={styles.container_hero}>
        <div id="text-1" className={styles.hero_text_block}>
          <h1 className={styles.hero_title}>MacBook Pro M4</h1>
          <a
            onClick={(e) => {
              e.preventDefault();
              gsap.to(window, {
                duration: 1.7,
                scrollTo: '#section1',
                ease: 'power4.inOut',
              });
            }}
            href="#section1"
            className={styles.hero_scroll_cta}
          >
            Desperte o seu próximo nível.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
