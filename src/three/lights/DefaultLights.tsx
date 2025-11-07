/* eslint-disable react/no-unknown-property */
function DefaultLights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
    </>
  );
}

export default DefaultLights;
