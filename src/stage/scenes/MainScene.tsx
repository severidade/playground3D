import NoiseBackground from '../background/AnimatedBackground.tsx';
import Notebook from '../notebook/index.tsx';

function MainScene() {
  return (
    <div className="stage">
      <NoiseBackground />
      <Notebook />
    </div>
  );
}
export default MainScene;
