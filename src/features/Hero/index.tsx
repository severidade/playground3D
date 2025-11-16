import styles from './hero.module.css';

function Hero() {
  return (
    <section id="hero">
      <div className={styles.container_hero}>
        <div id="text-1" className={styles.hero_text_block}>
          <h1 className={styles.hero_title}>MacBook Pro M4</h1>
          <p className="subtitle">
            Desperte o seu próximo nível.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
