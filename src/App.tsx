// import TestBox from './three/elements/TestBox.tsx';
import MainScene from './stage/scenes/MainScene.tsx';
import useTextScrollControl from './animations/scroll/useScrollTextTransitions.tsx';
import Footer from './components/layout/Footer/index.tsx';

import { Hero, Section1, Section2 } from './features/index.ts';

function App() {
  useTextScrollControl();
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <MainScene />
      <Footer />
    </>
  );
}

export default App;
