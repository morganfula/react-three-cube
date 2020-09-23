import React, { useRef } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber';

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={mesh} >
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh >
  );
}

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position
        />
        <pointLight position={[-10, 0, 20]} intensity={.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='#a8ceef' />
        <SpinningMesh position={[-2, 1, -5]} color='#c9a2a5' />
        <SpinningMesh position={[5, 1, -2]} color='#c19869' />
      </Canvas>
    </>
  );
}

export default App;
