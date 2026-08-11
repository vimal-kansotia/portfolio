import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import StarField from './StarField';
import ShootingStars from './ShootingStars';
import SpaceTravellers from './SpaceTravellers';

function ScrollCamera({ scrollY }) {
  const { camera } = useThree();
  const light1Ref = useRef();
  const light2Ref = useRef();

  useFrame(() => {
    const targetY = -scrollY * 0.005;
    camera.position.y = targetY;

    // Follow camera Y so 3D cosmic lighting ambience stays active at bottom of page
    if (light1Ref.current) light1Ref.current.position.y = targetY + 5;
    if (light2Ref.current) light2Ref.current.position.y = targetY - 5;
  });

  return (
    <>
      <pointLight ref={light1Ref} position={[5, 5, 5]} intensity={2.2} color="#415B06" />
      <pointLight ref={light2Ref} position={[-5, -5, 5]} intensity={1.5} color="#6A8C1A" />
    </>
  );
}

export default function Scene3D({ scrollY }) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.6} />
        <ScrollCamera scrollY={scrollY} />
        <StarField count={4000} />
        <ShootingStars />
        <SpaceTravellers />
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.35} luminanceSmoothing={0.9} intensity={0.3} />
          <Noise opacity={0.012} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
