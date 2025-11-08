/* eslint-disable react/no-unknown-property */
function DefaultLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 2, 3]} intensity={1.3} />
    </>
  );
}

export default DefaultLights;
