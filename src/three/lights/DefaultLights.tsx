/* eslint-disable react/no-unknown-property */
function DefaultLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
    </>
  );
}

export default DefaultLights;
