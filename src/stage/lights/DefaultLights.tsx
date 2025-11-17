/* eslint-disable react/no-unknown-property */
function DefaultLights() {
  return (
    <>
      {/* Luz ambiente suave (preenche sombras sem estourar) */}
      <hemisphereLight
        intensity={1}
        groundColor="#222"
      />

      {/* Luz principal — iluminação frontal suave */}
      <directionalLight
        position={[2, 4, 5]}
        intensity={1.5}
        castShadow
      />

      {/* Luz secundária mais fria — aumenta o realismo */}
      <directionalLight
        position={[-3, 2, 1]}
        intensity={0.6}
        color="#a8c7ff"
      />

      {/* Back light — cria um halo e destaca o contorno do MacBook */}
      <spotLight
        position={[0, 5, -2]}
        angle={0.4}
        intensity={2.0}
        penumbra={1}
        color="#ffdcbf"
      />

      {/* Luz baixa frontal para refletir no alumínio */}
      <pointLight
        position={[0, -1, 2]}
        intensity={1.0}
        color="#ffffff"
      />

    </>
  );
}

export default DefaultLights;
