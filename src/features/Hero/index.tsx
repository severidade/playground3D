import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import { useLayoutEffect } from 'react';
import styles from './hero.module.css';
import usePieSlice3Animation from '../../animations/motion/usePieSlice3Animation.tsx';

function Hero() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  });

  usePieSlice3Animation();
  return (
    <section id="hero">
      <div className={styles.container_hero}>
        <div id="text-1" className={styles.hero_text_block}>
          <h1 className={styles.hero_title}>MacBook Pro M4</h1>
        </div>

        <div className={styles.container_cta}>
          <div className={styles.cta}>
            <a
              id="cta"
              onClick={(e) => {
                e.preventDefault();
                gsap.to(window, {
                  duration: 1.7,
                  scrollTo: '#section1',
                  ease: 'power4.inOut',
                });
              }}
              href="#section1"
              className={styles.hero_scroll_cta_link}
            >
              {/* Desperte o seu próximo nível. */}
              Entrar
            </a>
            <div className={styles.cta_background_container}>
              <div className={styles.layer_dotted_circle} />
              <div id="pieSlice3" className={styles.hold3} />
              <div className={styles.layer_center} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
